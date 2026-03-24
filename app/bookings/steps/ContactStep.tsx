import { motion } from "framer-motion";
import { STEP_VARIANTS } from "../constants";
import type { ContactInfo, TimeSlot } from "../types";

interface ContactStepProps {
    contact: ContactInfo;
    onChange: (field: keyof ContactInfo, value: string) => void;
    selectedSlot: TimeSlot;
    onBack: () => void;
    onSubmit: () => void;
    valid: boolean;
    submitting: boolean;
    submitError: string | null;
}

const inputClass =
    "w-full bg-transparent border-b border-white/20 py-3 text-lg text-letters-primary placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors duration-300 rounded-none";

export function ContactStep({
    contact,
    onChange,
    selectedSlot,
    onBack,
    onSubmit,
    valid,
    submitting,
    submitError,
}: ContactStepProps) {
    return (
        <motion.div key="step-contact" variants={STEP_VARIANTS} initial="hidden" animate="visible" exit="exit">
            <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase mb-4 block">Almost There</span>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-letters-primary mb-12">
                YOUR <span className="text-white/30">DETAILS.</span>
            </h1>

            {/* Slot summary */}
            <div className="mb-12 px-6 py-5 border border-white/10 bg-white/[0.02]">
                <p className="text-[10px] font-bold tracking-widest uppercase text-white/40 mb-1">Booking For</p>
                <p className="text-sm font-bold text-gold tracking-widest uppercase">
                    {selectedSlot.dateLabel} &mdash; {selectedSlot.label}
                </p>
            </div>

            <div className="space-y-10">
                <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/60 mb-2">Full Name</label>
                    <input
                        type="text"
                        placeholder="Your name…"
                        value={contact.name}
                        onChange={e => onChange("name", e.target.value)}
                        className={inputClass}
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/60 mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={contact.email}
                        onChange={e => onChange("email", e.target.value)}
                        className={inputClass}
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/60 mb-2">Anything Else?</label>
                    <textarea
                        rows={4}
                        placeholder="Any additional context, links, or questions…"
                        value={contact.message}
                        onChange={e => onChange("message", e.target.value)}
                        className={`${inputClass} resize-y`}
                    />
                </div>
            </div>

            {submitError && (
                <p className="mt-6 text-xs tracking-widest uppercase text-red-400/80">{submitError}</p>
            )}

            <div className="flex justify-between mt-16">
                <button
                    onClick={onBack}
                    disabled={submitting}
                    className="text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors disabled:opacity-30"
                >
                    ← Back
                </button>
                <button
                    onClick={onSubmit}
                    disabled={!valid || submitting}
                    className="px-8 py-3 bg-white text-primary text-xs font-bold tracking-widest uppercase disabled:opacity-30 transition-all hover:bg-gold"
                >
                    {submitting ? "Confirming…" : "Confirm Booking →"}
                </button>
            </div>
        </motion.div>
    );
}
