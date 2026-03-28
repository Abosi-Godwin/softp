"use client";

import { motion } from "framer-motion";
import Link from "next/link";


import PortfolioRow from "../components/PortfolioRow";

const PROJECTS = [
    {
        title: "The Echoes Within",
        category: "Lead Role • Feature Film",
        year: "2025",
        image: "1774701113376_hnbjuk"
    },
    {
        title: "Silent Rhythm",
        category: "Voice Actor • Animation",
        year: "2024",
        image: "1774702105662_ndxcoq"
    },
    {
        title: "Aurora",
        category: "Original Score • Music",
        year: "2024",
        image: "1774701628739_eqtsbo"
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
                        <PortfolioRow project={project} index={i} key={i} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 flex justify-center"
                >
                    <Link
                        href="/portfolio"
                        className="group relative flex flex-col items-center gap-4"
                    >
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
