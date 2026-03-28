import { motion } from "framer-motion";
import type { ServiceKey, TimeSlot, ContactInfo } from "../utils/types";
import { SERVICES } from "../data/constants";

interface DoneStepProps {
    service: ServiceKey;
    selectedSlot: TimeSlot;
    contact: ContactInfo;
}

export function DoneStep({ service, selectedSlot, contact }: DoneStepProps) {
    const svc = SERVICES[service];

    return (
        <motion.div
            key="step-done"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="py-12 text-center"
        >
            {/* Animated checkmark ring */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto mb-12 w-20 h-20 rounded-full border border-gold flex items-center justify-center"
            >
                <span className="text-gold text-2xl">✓</span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase mb-4 block">Confirmed</span>
                <h1 className="text-4xl lg:text-6xl font-heading font-bold text-letters-primary mb-6">
                    YOU&apos;RE <span className="text-white/30">BOOKED.</span>
                </h1>
                <p className="text-white/40 text-sm tracking-widest uppercase mb-16">
                    Expect a reply at <span className="text-white/70">{contact.email}</span>
                </p>

                {/* Booking summary card */}
                <div className="text-left border border-white/10 bg-white/[0.02] divide-y divide-white/10">
                    {[
                        { label: "Service", value: svc.label },
                        { label: "Date", value: selectedSlot.dateLabel },
                        { label: "Time", value: selectedSlot.label },
                        { label: "Name", value: contact.name },
                    ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between px-6 py-4">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-white/30">{label}</span>
                            <span className="text-sm font-bold text-letters-primary">{value}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
