import { motion } from "framer-motion";
import { STEP_VARIANTS } from "../data/constants";
import { FieldRenderer } from "../components/FieldRenderer";
import type { Service } from "../utils/types";

interface DetailsStepProps {
    svc: Service;
    answers: Record<string, string | string[]>;
    onAnswer: (id: string, value: string | string[]) => void;
    onBack: () => void;
    onNext: () => void;
    valid: boolean;
}

export function DetailsStep({ svc, answers, onAnswer, onBack, onNext, valid }: DetailsStepProps) {
    return (
        <motion.div key="step-details" variants={STEP_VARIANTS} initial="hidden" animate="visible" exit="exit">
            <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase mb-4 block">{svc.label} INQUIRY</span>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-letters-primary mb-12">
                PROJECT <span className="text-white/30">PARAMETERS.</span>
            </h1>

            <div className="space-y-8">
                {svc.fields.map(field => (
                    <FieldRenderer
                        key={field.id}
                        field={field}
                        value={answers[field.id] ?? (field.type === "chips" ? [] : "")}
                        onChange={v => onAnswer(field.id, v)}
                    />
                ))}
            </div>

            <div className="flex justify-between mt-16">
                <button onClick={onBack} className="text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors">← Back</button>
                <button
                    onClick={onNext}
                    disabled={!valid}
                    className="px-8 py-3 bg-white text-primary text-xs font-bold tracking-widest uppercase disabled:opacity-30 transition-opacity hover:bg-gold"
                >
                    Select Time →
                </button>
            </div>
        </motion.div>
    );
}
