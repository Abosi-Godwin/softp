"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CinematicImage from "../components/CinematicImage";
import { portfolioProjects } from "./data/projects";
import { ProjectRow } from "./components/ProjectRow";

export default function PortfolioPage() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const activeProject = portfolioProjects.find(p => p.id === hoveredProject);

    return (
        <section className="min-h-screen bg-primary pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background reveal — desktop only */}
            <div className="absolute inset-0 pointer-events-none opacity-0 md:opacity-100 z-0">
                <AnimatePresence>
                    {activeProject && (
                        <motion.div
                            key={activeProject.id}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 0.15, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7 }}
                            className="absolute inset-0"
                        >
                            <CinematicImage
                                src={activeProject.src}
                                alt="Project Background"
                                className="object-cover w-full h-full grayscale"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20">
                    <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase block mb-4">
                        Selected Works
                    </span>
                    <h1 className="text-5xl lg:text-8xl font-heading font-bold text-letters-primary">
                        THE ARCHIVE.
                    </h1>
                </div>

                <div className="border-t border-white/10 flex flex-col">
                    {portfolioProjects.map((project, i) => (
                        <ProjectRow
                            key={project.id}
                            project={project}
                            index={i}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
