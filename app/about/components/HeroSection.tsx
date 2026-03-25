 import { useState } from "react";
import { motion } from "framer-motion";
import CinematicImage from "../../components/CinematicImage";

export function HeroSection() {
    const [hovered, setHovered] = useState(false);

    return (
        <section className="relative pt-40 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                {/* Typography */}
                <div className="lg:col-span-7 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold tracking-[0.6em] text-[10px] uppercase font-bold block mb-8">
                            First-Class Graduate // University of Nigeria, Nsukka
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

                {/* Hover detected on container, class driven by state — mirrors working Gallery pattern */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] w-full overflow-hidden"
                >
                    <CinematicImage
                        src="FB_IMG_1773001100452_sgri5k"
                        alt="Paulinus Onwumere Odinaka"
                        width={900}
                        height={1200}
                        className={`object-cover w-full h-full transition-[filter] duration-700 ease-in-out ${hovered ? "grayscale-0" : "grayscale"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-50 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
