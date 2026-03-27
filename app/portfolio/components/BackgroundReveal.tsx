"use client";

import { motion, AnimatePresence } from "framer-motion";
import CinematicImage from "../../components/CinematicImage";
import { Project } from "../data/portfolioData";

interface BackgroundRevealProps {
    activeProject: Project | undefined;
}

export default function BackgroundReveal({
    activeProject
}: BackgroundRevealProps) {
    return (
        <div className="absolute inset-0 pointer-events-none opacity-0 md:opacity-100 z-0">
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        key={activeProject.id}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{
                            opacity: 0.2,
                            scale: 1.05,
                            x: [0, -10, 0],
                            y: [0, -5, 0]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            opacity: { duration: 0.5 },
                            scale: { duration: 0.5 },
                            x: {
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            y: {
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            exit: { duration: 0.4 }
                        }}
                    >
                        <CinematicImage
                            src={activeProject.src}
                            alt="Project Background"
                            className="object-cover w-full h-full grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
