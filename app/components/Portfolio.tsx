"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

const PROJECTS = [
  {
    title: "The Echoes Within",
    category: "Lead Role • Feature Film",
    year: "2025",
    image: "/project-1.jpg", // Replace with your cinematic stills
  },
  {
    title: "Silent Rhythm",
    category: "Voice Actor • Animation",
    year: "2024",
    image: "/project-2.jpg",
  },
  {
    title: "Aurora",
    category: "Original Score • Music",
    year: "2024",
    image: "/project-3.jpg",
  }
];

export default function Portfolio() {
  return (
    <section id="acting" className="py-32 lg:py-52 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Section Header with Semantic Hierarchy */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="flex flex-col gap-4">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase"
            >
              Selected Works
            </motion.span>
            <h2 className="text-5xl lg:text-7xl font-heading font-medium text-letters-primary">
              The Portfolio.
            </h2>
          </div>
          <p className="max-w-xs text-letters-muted text-sm leading-relaxed border-l border-gold/30 pl-6">
            A curated selection of performances and digital creations across multiple disciplines.
          </p>
        </div>

        {/* 2. Interactive Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] overflow-hidden bg-secondary cursor-pointer"
            >
              {/* Image with subtle Scale-on-Hover */}
              <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Dark Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Play Button Icon Overlay (Appears on Hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5">
                   <Play className="text-gold fill-gold ml-1" size={24} />
                </div>
              </div>

              {/* Content Box */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-2">
                <span className="text-gold text-[9px] font-bold tracking-[0.3em] uppercase">
                  {project.category}
                </span>
                <h3 className="text-2xl font-heading text-letters-primary leading-none group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-letters-muted text-[10px] tracking-widest">{project.year}</span>
                  <span className="text-letters-primary text-[10px] font-bold tracking-widest">VIEW CASE STUDY</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. "View All" CTA with Line Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <button className="group relative flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.5em] text-letters-muted group-hover:text-gold transition-colors">
              VIEW ALL PRODUCTIONS
            </span>
            <div className="w-20 h-[1px] bg-white/10 relative overflow-hidden">
               <div className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
