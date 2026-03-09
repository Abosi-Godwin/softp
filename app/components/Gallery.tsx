"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";
import CinematicImage from "../components/CinematicImage";

const GALLERY_IMAGES = [
    {
        src: "FB_IMG_1773000797945_jx27va",
        size: "lg",
        title: "Character Study"
    },
    { src: "/gal-2.jpg", size: "sm", title: "Studio Session" },
    { src: "/gal-3.jpg", size: "sm", title: "Animation Roughs" },
    { src: "FB_IMG_1773000981569_fgsust", size: "md", title: "On Set" },
    { src: "/gal-5.jpg", size: "lg", title: "Behind the Lens" },
    { src: "FB_IMG_1773000708965_wzfh0d", size: "md", title: "Vocal Recording" }
];

export default function Gallery() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    // Subtle parallax move for the background elements
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section
            id="gallery"
            ref={targetRef}
            className="py-32 lg:py-52 bg-primary overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title with Vertical Label */}
                <div className="flex flex-col gap-4 mb-20 relative">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase"
                    >
                        Visual Archives
                    </motion.span>
                    <h2 className="text-5xl lg:text-8xl font-heading font-bold text-letters-primary">
                        The Gallery.
                    </h2>
                </div>

                {/* Bento Masonry Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[250px] lg:auto-rows-[300px]">
                    {GALLERY_IMAGES.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: 0,
                                clipPath: "inset(100% 0% 0% 0%)"
                            }}
                            whileInView={{
                                opacity: 1,
                                clipPath: "inset(0% 0% 0% 0%)"
                            }}
                            transition={{
                                duration: 1,
                                delay: i * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            viewport={{ once: true }}
                            className={`relative group overflow-hidden bg-secondary border border-white/5 
                ${img.size === "lg" ? "col-span-2 row-span-2" : ""}
                ${img.size === "md" ? "col-span-2 row-span-1" : ""}
                ${img.size === "sm" ? "col-span-1 row-span-1" : ""}
              `}
                        >
                            <div className="relative aspect-square overflow-hidden border border-white/5 group">
                                <CinematicImage
                                    src={img.src}
                                    alt={img.title}
                                    className="grayscale group-hover:grayscale-0 group-hover:scale-105"
                                />
                            </div>

                            {/* Overlay Label (Appears on Hover) */}
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                <div className="flex flex-col gap-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-gold text-[8px] font-bold tracking-widest uppercase italic">
                                        Archive Entry #{i + 1}
                                    </span>
                                    <p className="text-letters-primary font-heading text-lg font-medium">
                                        {img.title}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Cinematic Parallax Background Text */}
                <motion.div
                    style={{ y }}
                    className="absolute -z-10 right-0 top-1/4 select-none pointer-events-none opacity-[0.02]"
                >
                    <span className="text-[20vw] font-bold text-white uppercase whitespace-nowrap leading-none">
                        VERSATILITY • VERSATILITY
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
