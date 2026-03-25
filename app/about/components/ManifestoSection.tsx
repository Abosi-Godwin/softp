import { motion } from "framer-motion";

export function ManifestoSection() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-white/10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-12"
            >
                <h2 className="text-3xl md:text-5xl font-heading font-light leading-tight uppercase">
                    The intersection of{" "}
                    <span className="font-bold italic text-white">Stage</span>,{" "}
                    <span className="font-bold italic text-white">Sound</span>, and{" "}
                    <span className="font-bold italic text-white">Motion</span>.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/50 text-lg font-light leading-relaxed">
                    <p>
                        Paulinus Onwumere Odinaka is a multidisciplinary artist whose craft is
                        rooted in rigorous academic discipline. Graduating with{" "}
                        <strong className="text-white font-normal">
                            First-Class Honors in Theatre Arts
                        </strong>{" "}
                        from UNN, he operates with a profound understanding of narrative
                        structure and human performance.
                    </p>
                    <p>
                        He refuses to be confined to a single medium. Whether commanding a
                        physical stage as an actor, composing sonic landscapes, or breathing
                        life into digital realms through 2D animation, his work remains driven
                        by an uncompromising dedication to storytelling.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
