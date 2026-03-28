"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

const TRACKS = [
    {
        id: "01",
        title: "Play Boy",
        duration: "2:36",
        genre: "Afrobeat",
        spotifyId: "0dJNbgS2Khov8MzIoRlVya"
    },
    {
        id: "02",
        title: "The Boy",
        duration: "3:09",
        genre: "Afrobeat",
        spotifyId: "11Y0WhshKM6gXLHOHG0LfD"
    },

    {
        id: "03",
        title: "Neon Pulse",
        duration: "2:58",
        genre: "Electronic / Synth",
        spotifyId: "YOUR_SPOTIFY_ID_HERE" // ← replace with real ID
    }
];

export default function MusicSection() {
    const [activeTrack, setActiveTrack] = useState(TRACKS[0]);

    return (
        <section
            id="music"
            className="py-32 lg:py-52 bg-secondary/20 relative overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-gold/[0.04] to-transparent" />
                <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-gold/[0.03] blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* ── Left: Context ── */}
                    <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-[1px] bg-gold" />
                            <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">
                                Aural Identity
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-heading font-medium text-letters-primary leading-tight"
                        >
                            The Sound <br />
                            <span className="italic text-gold/80">
                                Of Story.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-letters-muted text-lg leading-relaxed max-w-sm"
                        >
                            Original compositions and sound design tailored for
                            cinematic narratives and immersive digital
                            environments.
                        </motion.p>

                        {/* Active track info */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTrack.id}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="flex flex-col gap-1 border-l-2 border-gold pl-4"
                            >
                                <p className="text-[9px] uppercase tracking-[0.3em] text-gold">
                                    Now Playing
                                </p>
                                <p className="text-letters-primary font-heading text-xl">
                                    {activeTrack.title}
                                </p>
                                <p className="text-letters-muted text-xs tracking-widest uppercase">
                                    {activeTrack.genre} · {activeTrack.duration}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <motion.a
                            href={`https://open.spotify.com/track/${activeTrack.spotifyId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="inline-flex items-center gap-3 text-letters-primary font-bold tracking-[0.3em] text-[10px] uppercase group w-fit"
                        >
                            Listen on Spotify
                            <ArrowUpRight
                                size={13}
                                className="text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                            />
                        </motion.a>
                    </div>

                    {/* ── Right: Tracklist + Embed ── */}
                    <div className="lg:col-span-7 flex flex-col">
                        {/* Track count */}
                        <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-2">
                            <span className="text-[9px] uppercase tracking-[0.3em] text-letters-muted/40">
                                Tracks
                            </span>
                            <span className="text-[9px] uppercase tracking-[0.3em] text-letters-muted/40 font-mono">
                                {TRACKS.length} / {TRACKS.length}
                            </span>
                        </div>

                        {TRACKS.map((track, i) => {
                            const isActive = activeTrack.id === track.id;
                            return (
                                <motion.div
                                    key={track.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: i * 0.12,
                                        duration: 0.5
                                    }}
                                    onClick={() => setActiveTrack(track)}
                                    className={`group relative flex items-center justify-between p-6 lg:p-8 border-b border-white/5 transition-all duration-300 cursor-pointer
                                        ${isActive ? "bg-white/[0.05]" : "hover:bg-white/[0.02]"}`}
                                >
                                    {/* Active left accent bar */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeBar"
                                                initial={{ scaleY: 0 }}
                                                animate={{ scaleY: 1 }}
                                                exit={{ scaleY: 0 }}
                                                className="absolute left-0 top-0 h-full w-[2px] bg-gold origin-top"
                                            />
                                        )}
                                    </AnimatePresence>

                                    <div className="flex items-center gap-8 lg:gap-10">
                                        {/* Track number */}
                                        <span
                                            className={`font-heading text-sm italic transition-colors duration-300 tabular-nums
                                                ${isActive ? "text-gold" : "text-letters-muted/30 group-hover:text-gold/60"}`}
                                        >
                                            {track.id}
                                        </span>

                                        {/* Title + genre */}
                                        <div className="flex flex-col gap-1">
                                            <h3
                                                className={`text-xl lg:text-2xl font-heading transition-all duration-500
                                                    ${
                                                        isActive
                                                            ? "text-letters-primary tracking-wider"
                                                            : "text-letters-primary/70 group-hover:text-letters-primary group-hover:tracking-wider"
                                                    }`}
                                            >
                                                {track.title}
                                            </h3>
                                            <span className="text-[9px] uppercase tracking-[0.2em] text-letters-muted">
                                                {track.genre}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5">
                                        {/* Duration */}
                                        <span className="text-letters-muted text-xs font-mono tabular-nums">
                                            {track.duration}
                                        </span>

                                        {/* Play button */}
                                        <motion.div
                                            whileTap={{ scale: 0.92 }}
                                            className={`p-3 rounded-full border transition-all duration-300
                                                ${
                                                    isActive
                                                        ? "border-gold bg-gold/15 text-gold"
                                                        : "border-white/10 text-letters-primary group-hover:border-gold/50 group-hover:bg-gold/10 group-hover:text-gold"
                                                }`}
                                        >
                                            <Play
                                                size={15}
                                                className="fill-current"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Spotify Embed */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTrack.spotifyId}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="mt-10"
                            >
                                <iframe
                                    src={`https://open.spotify.com/embed/track/${activeTrack.spotifyId}?utm_source=generator&theme=0`}
                                    width="100%"
                                    height="80"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    className="rounded-xl opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
