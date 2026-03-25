"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export function HeroImage() {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative aspect-[4/5] lg:aspect-[3/4] w-full max-w-lg mx-auto lg:max-w-none rounded-sm overflow-hidden border border-white/5 shadow-2xl"
        >
            <div className="absolute inset-0 bg-secondary animate-pulse" />

            <CldImage
                src="FB_IMG_1773000794903_en1zeg"
                alt="Onwumere Paulinus Professional Portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-[filter] duration-700 ease-in-out ${hovered ? "grayscale-0" : "grayscale"}`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent pointer-events-none" />
        </motion.div>
    );
}
