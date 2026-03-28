import { motion } from "framer-motion";
import { STEP_VARIANTS } from "../data/constants";
import { groupSlotsByDate } from "../utils/slots";
import type { TimeSlot } from "../utils/types";

interface SlotStepProps {
    slots: TimeSlot[];
    loading: boolean;
    selectedSlot: TimeSlot | null;
    onSelect: (slot: TimeSlot) => void;
    onBack: () => void;
    onNext: () => void;
}

export function SlotStep({ slots, loading, selectedSlot, onSelect, onBack, onNext }: SlotStepProps) {
    const slotsByDate = groupSlotsByDate(slots);

    return (
        <motion.div key="step-slot" variants={STEP_VARIANTS} initial="hidden" animate="visible" exit="exit">
            <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase mb-4 block">SCHEDULING</span>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-letters-primary mb-12">
                SECURE <span className="text-white/30">A TIME.</span>
            </h1>

            {loading ? (
                <div className="py-20 text-center text-xs tracking-widest text-white/40 uppercase animate-pulse">Syncing with Calendar...</div>
            ) : (
                <div className="space-y-12">
                    {Object.entries(slotsByDate).map(([dateLabel, daySlots]) => (
                        <div key={dateLabel}>
                            <h3 className="text-sm font-bold tracking-widest uppercase text-gold mb-6 border-b border-white/10 pb-2">{dateLabel}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {daySlots.map(slot => (
                                    <button
                                        key={slot.id}
                                        disabled={slot.booked}
                                        onClick={() => onSelect(slot)}
                                        className={`p-4 text-center border transition-all duration-300 ${
                                            slot.booked
                                                ? "border-white/5 opacity-30 cursor-not-allowed text-white/20 line-through"
                                                : selectedSlot?.id === slot.id
                                                    ? "border-gold bg-gold/10 text-gold scale-105"
                                                    : "border-white/10 hover:border-white/30 text-white/70"
                                        }`}
                                    >
                                        <span className="text-sm font-bold">{slot.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-between mt-16">
                <button onClick={onBack} className="text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors">← Back</button>
                <button
                    onClick={onNext}
                    disabled={!selectedSlot}
                    className="px-8 py-3 bg-white text-primary text-xs font-bold tracking-widest uppercase disabled:opacity-30 transition-opacity hover:bg-gold"
                >
                    Final Details →
                </button>
            </div>
        </motion.div>
    );
}
