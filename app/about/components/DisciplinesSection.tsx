import { motion } from "framer-motion";
import { DISCIPLINES } from "../data/about";

export function DisciplinesSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-secondary/30">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {DISCIPLINES.map((item, i) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-10 lg:p-16 hover:bg-white/[0.02] transition-colors"
                    >
                        <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-8 block">
                            {item.label}
                        </span>
                        <h3 className="text-3xl font-heading font-bold uppercase mb-4 text-letters-primary">
                            {item.title}
                        </h3>
                        <p className="text-white/40 text-sm tracking-wide leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
