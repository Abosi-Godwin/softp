"use client";

import { useState } from "react";
import { portfolioProjects, Project } from "./data/portfolioData";
import BackgroundReveal from "./components/BackgroundReveal";
import ProjectListItem from "./components/ProjectListItem";
import ProjectModal from "./components/ProjectModal";

export default function PortfolioPage() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    const activeProject = portfolioProjects.find(p => p.id === hoveredId);

    return (
        <section className="min-h-screen bg-primary pt-32 pb-20 px-6 relative overflow-hidden">
            <BackgroundReveal activeProject={activeProject} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase block mb-4">
                        Selected Works
                    </span>
                    <h1 className="text-5xl lg:text-8xl font-heading font-bold text-letters-primary">
                        THE ARCHIVE.
                    </h1>
                    <p className="text-letters-muted max-w-lg mt-6 text-base md:text-lg leading-relaxed">
                        A curated body of work spanning performance, sound, and
                        visual storytelling — each project representing a
                        distinct exploration of character, narrative, and form.
                    </p>
                </div>

                {/* Project list */}
                <div className="border-t border-white/10">
                    {portfolioProjects.map((project, i) => (
                        <ProjectListItem
                            key={project.id}
                            project={project}
                            index={i}
                            isActive={hoveredId === project.id}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
