"use client";

import { motion } from "framer-motion";
import { Monitor, Layers, Zap } from "lucide-react";

const ANIMATIONS = [
  {
    title: "Shadow & Light",
    tech: "Hand-drawn • After Effects",
    desc: "A study on noir aesthetics in 2D space.",
    preview: "/anim-1.mp4", // Replace with your video path
  },
  {
    title: "The Glitch Protocol",
    tech: "Frame-by-Frame • Toon Boom",
    desc: "Experimental character movement and liquid physics.",
    preview: "/anim-2.mp4",
  }
];

export default function AnimationSection() {
  return (
    <section id="animation" className="py-32 lg:py-52 bg-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Section Header: The 'Studio' Vibe */}
        <div className="flex flex-col gap-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <Zap size={14} className="text-gold fill-gold" />
            <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">
              Digital Craft
            </span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-8xl font-heading font-bold text-letters-primary tracking-tight">
            2D Motion.
          </h2>
        </div>

        {/* 2. Large-Scale Storyboard Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {ANIMATIONS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group flex flex-col gap-8"
            >
              {/* The 'Screen' Container */}
              <div className="relative aspect-video bg-secondary overflow-hidden rounded-sm border border-white/5">
                {/* 3. The Scanning Line (Top-Notch Detail) */}
                <motion.div 
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute left-0 w-full h-[2px] bg-gold/30 blur-sm z-20 pointer-events-none"
                />

                {/* Video/Image Content */}
                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                   <video 
                     src={item.preview}
                     muted 
                     loop 
                     playsInline
                     className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                     onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                     onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
                   />
                </div>

                {/* Corner Accents (UI/UX Framing) */}
                <div className="absolute top-4 left-4 text-[8px] text-white/20 font-mono tracking-widest uppercase">REC • 00:00:24:02</div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                   <div className="w-1 h-1 bg-gold rounded-full animate-pulse" />
                   <div className="w-1 h-1 bg-white/20 rounded-full" />
                </div>
              </div>

              {/* 4. Meta Information */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <h3 className="text-2xl lg:text-3xl font-heading text-letters-primary group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <Layers size={18} className="text-letters-muted group-hover:rotate-12 transition-transform" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">{item.tech}</span>
                  <p className="text-letters-muted text-sm leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Vertical Text (Hidden on Mobile) */}
        <div className="hidden xl:block absolute -right-12 top-1/2 -rotate-90 origin-center">
            <span className="text-[10px] font-bold tracking-[1em] text-white/5 uppercase">
                Frame By Frame • Frame By Frame
            </span>
        </div>
      </div>
    </section>
  );
}
