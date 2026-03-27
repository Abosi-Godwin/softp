"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import CinematicImage from "../../components/CinematicImage";
import { Project } from "../data/portfolioData";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-end md:items-center justify-center p-0 md:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-secondary w-full md:max-w-2xl rounded-t-2xl md:rounded-xl overflow-hidden"
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 60, opacity: 0 }}
                        transition={{
                            type: "spring",
                            damping: 28,
                            stiffness: 300
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div className="relative w-full aspect-video overflow-hidden">
                            <motion.div
                                className="absolute inset-0"
                                initial={{ scale: 1.08 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <CinematicImage
                                    src={project.src}
                                    alt={project.title}
                                    className="object-cover grayscale brightness-75"
                                />
                            </motion.div>

                            {/* Gradient into card body */}
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                aria-label="Close"
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white/70 hover:text-white hover:bg-black/70 transition-colors"
                            >
                                <X size={16} />
                            </button>

                            {/* Type badge */}
                            <div className="absolute bottom-4 left-6">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-gold border border-gold/30 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                                    {project.type}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8">
                            <div className="flex items-start justify-between gap-4 mb-1">
                                <h2 className="text-2xl md:text-3xl font-heading text-letters-primary">
                                    {project.title}
                                </h2>
                                <span className="text-xs font-mono text-white/25 mt-1 shrink-0">
                                    {project.id}
                                </span>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-sm text-gold">
                                    {project.role}
                                </span>
                                <span className="text-white/20">·</span>
                                <span className="text-sm text-letters-muted">
                                    {project.year}
                                </span>
                            </div>

                            <div className="w-10 h-px bg-gold/30 mb-4" />

                            <p className="text-letters-muted leading-relaxed text-sm md:text-base">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
