"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { doc, runTransaction } from "firebase/firestore";
import { AnimatePresence } from "framer-motion";

import { SERVICES } from "../data/constants";
import { useBookingSlots } from "../hooks/useBookingSlots";
import { ProgressBar } from "./ProgressBar";
import { ServiceStep } from "../steps/ServiceStep";
import { DetailsStep } from "../steps/DetailsStep";
import { SlotStep } from "../steps/SlotStep";
import { ContactStep } from "../steps/ContactStep";
import { DoneStep } from "../steps/DoneStep";

import type { ServiceKey, Step, TimeSlot, ContactInfo } from "../utils/types";

const BookingClient = () => {
    const [step, setStep] = useState<Step>("service");
    const [service, setService] = useState<ServiceKey | null>(null);
    const [answers, setAnswers] = useState<Record<string, string | string[]>>(
        {}
    );
    const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
    const [contact, setContact] = useState<ContactInfo>({
        name: "",
        email: "",
        message: ""
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        slots,
        loading: loadingSlots,
        markBooked
    } = useBookingSlots(step === "slot");

    const svc = service ? SERVICES[service] : null;

    const detailsValid = svc
        ? svc.fields.every(f => {
              const v = answers[f.id];
              return f.type === "chips"
                  ? Array.isArray(v) && v.length > 0
                  : typeof v === "string" && v.trim().length > 0;
          })
        : false;

    const contactValid =
        contact.name.trim().length > 0 &&
        contact.email.includes("@") &&
        contact.message.trim().length > 5;

    const handleSubmit = async () => {
        if (!selectedSlot || !service) return;
        setSubmitting(true);
        setSubmitError(null);
        const slotRef = doc(db, "bookings", selectedSlot.id);

        try {
            await runTransaction(db, async tx => {
                const slotDoc = await tx.get(slotRef);
                if (slotDoc.exists())
                    throw new Error(
                        "This slot was just taken. Please choose another time."
                    );
                tx.set(slotRef, {
                    service,
                    answers,
                    contact,
                    slotLabel: selectedSlot.label,
                    slotDate: selectedSlot.dateLabel,
                    bookedAt: new Date().toISOString()
                });
            });
            setStep("done");
        } catch (err: unknown) {
            setSubmitError(
                err instanceof Error ? err.message : "Something went wrong."
            );
            markBooked(selectedSlot.id);
            setSelectedSlot(null);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="min-h-screen bg-primary pt-32 pb-20 px-6 overflow-hidden">
            <div className="max-w-3xl mx-auto">
                {step !== "done" && <ProgressBar step={step} />}

                <AnimatePresence mode="wait">
                    {step === "service" && (
                        <ServiceStep
                            onSelect={key => {
                                setService(key);
                                setStep("details");
                            }}
                        />
                    )}

                    {step === "details" && svc && (
                        <DetailsStep
                            svc={svc}
                            answers={answers}
                            onAnswer={(id, v) =>
                                setAnswers(prev => ({ ...prev, [id]: v }))
                            }
                            onBack={() => setStep("service")}
                            onNext={() => setStep("slot")}
                            valid={detailsValid}
                        />
                    )}

                    {step === "slot" && (
                        <SlotStep
                            slots={slots}
                            loading={loadingSlots}
                            selectedSlot={selectedSlot}
                            onSelect={setSelectedSlot}
                            onBack={() => setStep("details")}
                            onNext={() => setStep("contact")}
                        />
                    )}

                    {step === "contact" && selectedSlot && (
                        <ContactStep
                            contact={contact}
                            onChange={(field, value) =>
                                setContact(prev => ({
                                    ...prev,
                                    [field]: value
                                }))
                            }
                            selectedSlot={selectedSlot}
                            onBack={() => setStep("slot")}
                            onSubmit={handleSubmit}
                            valid={contactValid}
                            submitting={submitting}
                            submitError={submitError}
                        />
                    )}

                    {step === "done" && service && selectedSlot && (
                        <DoneStep
                            service={service}
                            selectedSlot={selectedSlot}
                            contact={contact}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default BookingClient;
