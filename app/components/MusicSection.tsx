"use client";

import { motion } from "framer-motion";
import { Play, Pause, Music, Volume2, ArrowRight } from "lucide-react";

const TRACKS = [
    {
        id: "01",
        title: "Aurora Skyline",
        duration: "3:42",
        genre: "Cinematic Ambient"
    },
    {
        id: "02",
        title: "The Echoes Within (Original Score)",
        duration: "4:15",
        genre: "Orchestral"
    },
    {
        id: "03",
        title: "Neon Pulse",
        duration: "2:58",
        genre: "Electronic / Synth"
    }
];

export default function MusicSection() {
    return (
        <section
            id="music"
            className="py-32 lg:py-52 bg-secondary/20 relative overflow-hidden"
        >
            {/* Decorative Soundwave Background Element */}
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* 1. Left: Section Context */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-[1px] bg-gold" />
                            <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">
                                Aural Identity
                            </span>
                        </motion.div>

                        <h2 className="text-5xl lg:text-7xl font-heading font-medium text-letters-primary leading-tight">
                            The Sound <br />
                            Of Story.
                        </h2>

                        <p className="text-letters-muted text-lg leading-relaxed max-w-sm">
                            Original compositions and sound design tailored for
                            cinematic narratives and immersive digital
                            environments.
                        </p>

                        <motion.button
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-4 text-letters-primary font-bold tracking-[0.3em] text-[10px] uppercase group"
                        >
                            Listen on Spotify{" "}
                            <ArrowRight
                                size={14}
                                className="text-gold group-hover:translate-x-2 transition-transform"
                            />
                        </motion.button>
                    </div>

                    {/* 2. Right: Interactive Tracklist */}
                    <div className="lg:col-span-7 flex flex-col gap-2">
                        {TRACKS.map((track, i) => (
                            <motion.div
                                key={track.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative flex items-center justify-between p-6 lg:p-10 border-b border-white/5 hover:bg-white/[0.02] transition-all cursor-pointer"
                            >
                                <div className="flex items-center gap-8 lg:gap-12">
                                    <span className="font-heading text-letters-muted/40 text-sm group-hover:text-gold transition-colors italic">
                                        {track.id}
                                    </span>

                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-xl lg:text-2xl font-heading text-letters-primary group-hover:tracking-wider transition-all duration-500">
                                            {track.title}
                                        </h3>
                                        <span className="text-[9px] uppercase tracking-[0.2em] text-letters-muted">
                                            {track.genre}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    {/* Animated Sound Equalizer (Simulated) */}
                                    <div className="hidden md:flex items-end gap-[3px] h-4">
                                        {[1, 2, 3, 4].map(bar => (
                                            <motion.div
                                                key={bar}
                                                animate={{
                                                    height: [4, 16, 8, 14, 4]
                                                }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 1.5,
                                                    delay: bar * 0.2
                                                }}
                                                className="w-[2px] bg-gold/40 group-hover:bg-gold transition-colors"
                                            />
                                        ))}
                                    </div>

                                    <span className="text-letters-muted text-xs font-mono tabular-nums">
                                        {track.duration}
                                    </span>

                                    <div className="p-3 rounded-full border border-white/10 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all">
                                        <Play
                                            size={16}
                                            className="text-letters-primary group-hover:text-gold fill-current"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
