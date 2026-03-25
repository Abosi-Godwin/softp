import { motion } from "framer-motion";
import { ARCHIVE_WORKS } from "../data/about";

export function ArchiveLog() {
    return (
        <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 border-b border-white/10 pb-6">
                <h3 className="text-4xl font-heading font-bold uppercase tracking-tighter">
                    Selected Archive
                </h3>
                <span className="text-[10px] text-white/30 tracking-widest uppercase font-bold mt-4 md:mt-0">
                    Chronological Order
                </span>
            </div>

            <div className="flex flex-col">
                {ARCHIVE_WORKS.map((work, i) => (
                    <motion.div
                        key={work.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex flex-col lg:flex-row lg:items-center justify-between py-8 border-b border-white/5 hover:bg-white/[0.01] transition-colors cursor-default"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-20">
                            <span className="text-gold text-[10px] font-bold w-12">{work.year}</span>
                            <h4 className="text-3xl lg:text-5xl font-heading font-bold uppercase group-hover:translate-x-4 transition-transform duration-500">
                                {work.title}
                            </h4>
                        </div>
                        <div className="flex items-center gap-8 mt-6 lg:mt-0 text-xs uppercase tracking-widest text-white/40">
                            <span className="w-40">{work.role}</span>
                            <span className="px-4 py-2 border border-white/10 rounded-full">
                                {work.category}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
