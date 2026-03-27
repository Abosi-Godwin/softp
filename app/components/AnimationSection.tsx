 "use client";

import { motion } from "framer-motion";
import { Zap, ArrowUpRight } from "lucide-react";

import AnimationCard from "./ReelsPlayer";

const ANIMATIONS = [
    {
        title: "National Anthem",
        tech: "Hand-drawn • After Effects",
        desc: "A Nigerian citizen denied his country.",
        publicId: "firstAnime_qr6uo0",
    },
    {
        title: "Animated DJ Mixtape",
        tech: "Frame-by-Frame • Toon Boom",
        desc: "The animated musical DJ video of two Nigerian songs.",
        publicId: "secondAnime_rwfony",
    },
];

export default function AnimationSection() {
    return (
        <section id="animation" className="py-32 lg:py-52 bg-primary relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col gap-6 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <Zap size={14} className="text-gold fill-gold" />
                        <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">
                            Digital Craft
                        </span>
                    </motion.div>

                    <h2 className="text-5xl lg:text-8xl font-heading font-bold text-letters-primary tracking-tight">
                        2D Motion.
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {ANIMATIONS.map((item, i) => (
                        <AnimationCard key={i} item={item} index={i} />
                    ))}
                </div>

                {/* TikTok CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 flex items-center gap-4"
                >
                    <div className="w-12 h-[1px] bg-gold" />
                    <motion.a
                        href="https://tiktok.com/@animenaija1"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="inline-flex items-center gap-3 text-letters-primary font-bold tracking-[0.3em] text-[10px] uppercase group"
                    >
                        Watch on TikTok
                        <ArrowUpRight
                            size={13}
                            className="text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                    </motion.a>
                </motion.div>

                {/* Decorative vertical text */}
                <div className="hidden xl:block absolute -right-12 top-1/2 -rotate-90 origin-center">
                    <span className="text-[10px] font-bold tracking-[1em] text-white/5 uppercase">
                        Frame By Frame • Frame By Frame
                    </span>
                </div>
            </div>
        </section>
    );
}
