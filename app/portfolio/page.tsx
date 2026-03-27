 "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CinematicImage from "../components/CinematicImage";

/* =========================
   PROJECT DATA
========================= */
const portfolioProjects = [
  {
    id: "01",
    title: "Fragments of Silence",
    role: "Lead Actor",
    year: "2024",
    type: "Short Film",
    description:
      "A restrained performance exploring isolation, memory, and emotional tension through silence and minimal dialogue.",
    src: "/images/project1.jpg",
  },
  {
    id: "02",
    title: "Echoes of the Stage",
    role: "Theatre Performer",
    year: "2023",
    type: "Stage Performance",
    description:
      "A live theatrical piece blending classical delivery with contemporary narrative structure and audience immersion.",
    src: "/images/project2.jpg",
  },
  {
    id: "03",
    title: "The Inner Voice",
    role: "Voice Actor",
    year: "2024",
    type: "2D Animation",
    description:
      "An animated narrative centered on identity and self-awareness, featuring expressive voice performance.",
    src: "/images/project3.jpg",
  },
  {
    id: "04",
    title: "Nocturnal City",
    role: "Music Composer",
    year: "2025",
    type: "Soundtrack",
    description:
      "A cinematic soundscape designed to enhance visual storytelling through atmosphere and tonal progression.",
    src: "/images/project4.jpg",
  },
];

export default function PortfolioPage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const activeProject = portfolioProjects.find(
    (p) => p.id === hoveredProject
  );

  return (
    <section className="min-h-screen bg-primary pt-32 pb-20 px-6 relative overflow-hidden">
      {/* =========================
         BACKGROUND IMAGE REVEAL
      ========================= */}
      <div className="absolute inset-0 pointer-events-none opacity-0 md:opacity-100 z-0">
        <AnimatePresence>
          {activeProject && (
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.25, scale: 1 }}
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

      {/* =========================
         MAIN CONTENT
      ========================= */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-20">
          <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase block mb-4">
            Selected Works
          </span>

          <h1 className="text-5xl lg:text-8xl font-heading font-bold text-letters-primary">
            THE ARCHIVE.
          </h1>

          <p className="text-letters-muted max-w-lg mt-6 text-lg leading-relaxed">
            A curated body of work spanning performance, sound, and visual
            storytelling — each project representing a distinct exploration
            of character, narrative, and form.
          </p>
        </div>

        {/* PROJECT LIST */}
        <div className="border-t border-white/10 flex flex-col">
          {portfolioProjects.map((project, i) => {
            const isActive = hoveredProject === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
                className={`cursor-pointer flex justify-between items-center py-10 border-b border-white/10 transition-all group
                  ${
                    isActive
                      ? "bg-white/[0.05]"
                      : "hover:bg-white/[0.02]"
                  }
                `}
              >
                <div>
                  <h3 className="text-2xl lg:text-3xl font-heading text-letters-primary group-hover:text-gold transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-letters-muted mt-2">
                    {project.role} • {project.year}
                  </p>

                  <span className="text-xs uppercase tracking-widest text-letters-muted">
                    {project.type}
                  </span>
                </div>

                <span className="text-letters-muted text-sm opacity-40 group-hover:opacity-100 transition">
                  {project.id}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =========================
         MODAL (PROJECT DETAILS)
      ========================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-secondary max-w-2xl w-full rounded-xl p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.src}
                alt={selectedProject.title}
                className="rounded-lg mb-4 w-full object-cover"
              />

              <h2 className="text-3xl font-heading mb-2 text-letters-primary">
                {selectedProject.title}
              </h2>

              <p className="text-letters-muted text-sm mb-4">
                {selectedProject.role} • {selectedProject.year} •{" "}
                {selectedProject.type}
              </p>

              <p className="text-letters-primary leading-relaxed">
                {selectedProject.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}