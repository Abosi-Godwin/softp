import { motion } from "framer-motion";
import { SERVICES, STEP_VARIANTS } from "../constants";
import type { ServiceKey, Service } from "../types";

interface ServiceStepProps {
    onSelect: (key: ServiceKey) => void;
}

export function ServiceStep({ onSelect }: ServiceStepProps) {
    return (
        <motion.div key="step-service" variants={STEP_VARIANTS} initial="hidden" animate="visible" exit="exit">
            <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase mb-4 block">Initiate Booking</span>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-letters-primary mb-12">
                WHAT CAN I <br /> <span className="text-white/30">DO FOR YOU?</span>
            </h1>

            <div className="flex flex-col border-t border-white/10">
                {(Object.entries(SERVICES) as [ServiceKey, Service][]).map(([key, s]) => (
                    <button
                        key={key}
                        onClick={() => onSelect(key)}
                        className="group w-full flex items-center justify-between py-8 border-b border-white/10 text-left transition-all duration-500 hover:pl-6 hover:bg-white/[0.02]"
                    >
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-letters-primary group-hover:text-gold transition-colors">{s.label}</h2>
                            <p className="text-xs tracking-widest uppercase text-white/40 mt-2">{s.tag}</p>
                        </div>
                        <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity text-2xl">→</span>
                    </button>
                ))}
            </div>
        </motion.div>
    );
}
