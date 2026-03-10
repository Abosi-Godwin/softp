 "use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import CinematicImage from "../components/CinematicImage";

const GALLERY_IMAGES = [
    { src: "FB_IMG_1773000797945_jx27va", size: "lg", title: "Character Study" },
    { src: "FB_IMG_1773000942560_cypu4x", size: "sm", title: "Studio Session" },
    { src: "FB_IMG_1773000974551_lhhtu0", size: "sm", title: "Animation Roughs" },
    { src: "FB_IMG_1773000981569_fgsust", size: "md", title: "On Set" },
    { src: "FB_IMG_1773001094387_mudaxg", size: "lg", title: "Behind the Lens" },
    { src: "FB_IMG_1773000742288_nbm7j8", size: "md", title: "Vocal Recording" }
];

function GalleryCard({ img, i }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`relative overflow-hidden bg-secondary border border-white/5 
                ${img.size === "lg" ? "col-span-2 row-span-2" : ""}
                ${img.size === "md" ? "col-span-2 row-span-1" : ""}
                ${img.size === "sm" ? "col-span-1 row-span-1" : ""}
            `}
        >
            <div className="absolute inset-0 overflow-hidden">
                <CinematicImage
                    src={img.src}
                    alt={img.title}
                    className={`transition-[filter] duration-700 ease-in-out ${hovered ? "grayscale-0" : "grayscale"}`}
                />
            </div>

            <div className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent transition-opacity duration-500 flex items-end p-6 pointer-events-none ${hovered ? "opacity-100" : "opacity-0"}`}>
                <div className={`flex flex-col gap-1 transition-transform duration-500 ${hovered ? "translate-y-0" : "translate-y-4"}`}>
                    <span className="text-gold text-[8px] font-bold tracking-widest uppercase italic">
                        Archive Entry #{i + 1}
                    </span>
                    <p className="text-letters-primary font-heading text-lg font-medium">
                        {img.title}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function Gallery() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section id="gallery" ref={targetRef} className="py-32 lg:py-52 bg-primary overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
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

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[250px] lg:auto-rows-[300px]">
                    {GALLERY_IMAGES.map((img, i) => (
                        <GalleryCard key={i} img={img} i={i} />
                    ))}
                </div>

                <motion.div style={{ y }} className="absolute -z-10 right-0 top-1/4 select-none pointer-events-none opacity-[0.02]">
                    <span className="text-[20vw] font-bold text-white uppercase whitespace-nowrap leading-none">
                        VERSATILITY • VERSATILITY
                    </span>
                </motion.div>
            </div>
        </section>
    );
}