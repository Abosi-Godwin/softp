import { motion } from "framer-motion";
import type { Step } from "../utils/types";

const STEPS: Step[] = ["service", "details", "slot", "contact"];
const LABELS = ["01 SERVICE", "02 PROJECT", "03 TIME", "04 CONTACT"];

export function ProgressBar({ step }: { step: Step }) {
    const idx = STEPS.indexOf(step);

    return (
        <div className="mb-16">
            <div className="flex justify-between mb-3">
                {LABELS.map((label, i) => (
                    <span
                        key={label}
                        className={`text-[10px] font-bold tracking-[0.2em] transition-colors duration-500 ${
                            i < idx ? "text-gold" : i === idx ? "text-letters-primary" : "text-white/20"
                        }`}
                    >
                        {label}
                    </span>
                ))}
            </div>
            <div className="h-[1px] bg-white/10 relative w-full">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(idx / (STEPS.length - 1)) * 100}%` }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute left-0 top-0 h-full bg-gold"
                />
            </div>
        </div>
    );
}
