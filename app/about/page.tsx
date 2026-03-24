"use client";

import { motion } from "framer-motion";
import CinematicImage from "../components/CinematicImage";

const ARCHIVE_WORKS = [
    {
        title: "THE RITUAL",
        role: "Stage Lead",
        year: "2024",
        category: "Theatre"
    },
    {
        title: "SILENT ECHOES",
        role: "2D Animator",
        year: "2024",
        category: "Animation"
    },
    {
        title: "ODINAKA EP",
        role: "Composer / Artist",
        year: "2023",
        category: "Music"
    }
];

export default function AboutPage() {
    return (
        <main className="bg-primary text-letters-primary min-h-screen selection:bg-gold selection:text-primary">
            {/* 01 // THE HERO */}
            <section className="relative pt-40 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    {/* Typography Block */}
                    <div className="lg:col-span-7 z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-gold tracking-[0.6em] text-[10px] uppercase font-bold block mb-8">
                                First-Class Graduate // University of Nigeria,
                                Nsukka
                            </span>
                            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-black leading-[0.85] tracking-tighter uppercase">
                                PAULINUS
                                <br />
                                <span className="text-white/40">
                                    ODINAKA<span className="text-gold">.</span>
                                </span>
                            </h1>
                        </motion.div>
                    </div>

                    {/* Anchor Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] w-full"
                    >
                        
                        <CinematicImage
                            src="FB_IMG_1773001100452_sgri5k"
                            alt="Paulinus Onwumere Odinaka"
                            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-50" />
                    </motion.div>
                </div>
            </section>

            {/* 02 // THE MANIFESTO */}
            <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-white/10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-12"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-light leading-tight uppercase">
                        The intersection of{" "}
                        <span className="font-bold italic text-white">
                            Stage
                        </span>
                        ,{" "}
                        <span className="font-bold italic text-white">
                            Sound
                        </span>
                        , and{" "}
                        <span className="font-bold italic text-white">
                            Motion
                        </span>
                        .
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/50 text-lg font-light leading-relaxed">
                        <p>
                            Paulinus Onwumere Odinaka is a multidisciplinary
                            artist whose craft is rooted in rigorous academic
                            discipline. Graduating with{" "}
                            <strong className="text-white font-normal">
                                First-Class Honors in Theatre Arts
                            </strong>{" "}
                            from UNN, he operates with a profound understanding
                            of narrative structure and human performance.
                        </p>
                        <p>
                            He refuses to be confined to a single medium.
                            Whether commanding a physical stage as an actor,
                            composing sonic landscapes, or breathing life into
                            digital realms through 2D animation, his work
                            remains driven by an uncompromising dedication to
                            storytelling.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* 03 // THE DISCIPLINES */}
            <section className="py-24 px-6 md:px-12 bg-secondary/30">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {[
                        {
                            title: "Professional Acting",
                            desc: "Method-driven performance for stage and cinematic productions.",
                            label: "Drama"
                        },
                        {
                            title: "Music Artistry",
                            desc: "Original compositions and vocal performances.",
                            label: "Sound"
                        },
                        {
                            title: "2D Animation",
                            desc: "Character-driven motion and digital visual storytelling.",
                            label: "Visuals"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 lg:p-16 group hover:bg-white/[0.02] transition-colors"
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

            {/* 04 // THE ARCHIVE LOG */}
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
                    {ARCHIVE_WORKS.map((work, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            key={index}
                            className="group flex flex-col lg:flex-row lg:items-center justify-between py-8 border-b border-white/5 hover:bg-white/[0.01] transition-colors cursor-default"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-20">
                                <span className="text-gold text-[10px] font-bold w-12">
                                    {work.year}
                                </span>
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
        </main>
    );
}
