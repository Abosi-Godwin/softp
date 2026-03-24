"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Play } from "lucide-react";

import CinematicImage from "../components/CinematicImage";

const PROJECTS = [
    {
        title: "The Echoes Within",
        category: "Lead Role • Feature Film",
        year: "2025",
        image: "1773034773509_wuwyym"
    },
    {
        title: "Silent Rhythm",
        category: "Voice Actor • Animation",
        year: "2024",
        image: "1773048647558_dznm5a"
    },
    {
        title: "Aurora",
        category: "Original Score • Music",
        year: "2024",
        image: "1773050829282_toqtbq"
    }
];

export default function Portfolio() {
    return (
        <section id="acting" className="py-32 lg:py-52 bg-primary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="flex flex-col gap-4">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase"
                        >
                            Selected Works
                        </motion.span>
                        <h2 className="text-5xl lg:text-7xl font-heading font-medium text-letters-primary">
                            The Portfolio.
                        </h2>
                    </div>
                    <p className="max-w-xs text-letters-muted text-sm leading-relaxed border-l border-gold/30 pl-6">
                        A curated selection of performances and digital
                        creations across multiple disciplines.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.8 }}
                            viewport={{ once: true }}
                            tabIndex={0}
                            className="group relative aspect-[3/4] overflow-hidden bg-secondary cursor-pointer focus:outline-none"
                        >
                            <div className="absolute inset-0 z-0 transition-transform duration-1000 ease-out group-hover:scale-110 group-active:scale-110 group-focus:scale-110">
                                <CinematicImage
                                    src={project.image}
                                    alt={project.title}
                                    className="grayscale group-hover:grayscale-0
                                    group-active:grayscale-0
                                    group-focus:grayscale-0 transition-[filter]
                                    duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80 group-hover:opacity-40 group-active:opacity-40 group-focus:opacity-40 transition-opacity duration-700" />
                            </div>

                            <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-500">
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/10">
                                    <Play
                                        className="text-gold fill-gold ml-1"
                                        size={24}
                                    />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-2 z-20">
                                <span className="text-gold text-[9px] font-bold tracking-[0.3em] uppercase">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-heading text-letters-primary leading-none group-hover:text-gold group-active:text-gold group-focus:text-gold transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 group-focus:translate-y-0 transition-all duration-500">
                                    <span className="text-letters-muted text-[10px] tracking-widest">
                                        {project.year}
                                    </span>
                                    <span className="text-letters-primary text-[10px] font-bold tracking-widest">
                                        VIEW CASE STUDY
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

              <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mt-20 flex justify-center"
>
    <Link href="/portfolio" className="group relative flex flex-col items-center gap-4">
        <span className="text-[10px] font-bold tracking-[0.5em] text-letters-muted group-hover:text-gold transition-colors">
            VIEW ALL PRODUCTIONS
        </span>
        <div className="w-20 h-[1px] bg-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        </div>
    </Link>
</motion.div>
            </div>
        </section>
    );
}
