"use client";

//import { motion } from "framer-motion";
import { motion, Variants } from "framer-motion"; // Add Variants import

export default function About() {
    const headline = "A lifelong dedication to the craft of storytelling.";
    const words = headline.split(" ");

    // Animation variants for the container
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.04 * i }
        })
    };

    // Animation variants for each word
    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };
 

    return (
        <section
            id="about"
            className="relative py-32 lg:py-52 bg-primary overflow-hidden"
        >
            {/* 1. Background Grain / Texture Overlay for a 'Film' look */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-start gap-8">
                    {/* 2. Animated Accent Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-12 h-[1px] bg-gold" />
                        <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">
                            The Manifesto
                        </span>
                    </motion.div>

                    {/* 3. Staggered Word Reveal Heading */}
                    <motion.h2
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-wrap text-4xl md:text-6xl lg:text-7xl font-heading font-medium leading-[1.1] text-letters-primary"
                    >
                        {words.map((word, index) => (
                            <motion.span
                                variants={child}
                                key={index}
                                className="mr-[0.25em] mb-2"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h2>

                    {/* 4. Description with a slower fade */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-12 mt-8"
                    >
                        <p className="text-letters-muted text-lg lg:text-xl leading-relaxed font-body">
                            Soft P is a multidisciplinary artist whose work
                            explores the intersection of human emotion and
                            digital precision. From the stage to the recording
                            studio, every project is a search for authentic
                            connection.
                        </p>

                        <div className="flex flex-col justify-end">
                            <p className="text-gold/80 italic font-heading text-lg">
                                "Art is not what you see, but what you make
                                others see."
                            </p>
                        </div>
                    </motion.div>

                    {/* 5. Modern Minimalist Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/5 w-full">
                        {[
                            { label: "Experience", val: "12+ YRS" },
                            { label: "Projects", val: "48" },
                            { label: "Awards", val: "06" },
                            { label: "Location", val: "LA / NYC" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1 + i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col"
                            >
                                <span className="text-letters-muted text-[9px] uppercase tracking-[0.3em] mb-1">
                                    {stat.label}
                                </span>
                                <span className="text-letters-primary font-heading text-2xl font-bold">
                                    {stat.val}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
