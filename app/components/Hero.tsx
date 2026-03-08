"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  // Animation variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content: Semantic Text Stack */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 z-10"
        >
          <motion.span 
            variants={itemVariants}
            className="text-gold font-bold tracking-[0.3em] text-[10px] lg:text-xs uppercase"
          >
            Actor • Music Artist • 2D Animator
          </motion.span>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] uppercase text-letters-primary"
          >
            First-Class Mind.<br />
            <span className="opacity-80">World-Class Art.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="max-w-md text-letters-muted text-base lg:text-lg leading-relaxed font-body"
          >
            A multidisciplinary creative seamlessly blending cinematic acting, 
            evocative music production, and immersive 2D animation.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="px-10 py-4 bg-letters-primary text-primary font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-gold transition-colors duration-500">
              Explore Portfolio
            </button>
            <button className="px-10 py-4 border border-letters-muted/30 text-letters-primary font-bold uppercase tracking-[0.2em] text-[10px] hover:border-gold transition-colors duration-500">
              Bookings
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content: Optimized Portrait Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative aspect-[4/5] lg:aspect-[3/4] w-full max-w-lg mx-auto lg:max-w-none rounded-sm overflow-hidden border border-white/5 shadow-2xl"
        >
          {/* Using a placeholder - Replace with your actual image path */}
          <div className="absolute inset-0 bg-secondary animate-pulse" /> 
          <Image
            src="/hero-portrait.jpg" 
            alt="Portrait of Jonathan Vance"
            fill
            priority // Critical: Preloads the image to prevent LCP issues
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
          {/* Subtle gold vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        </motion.div>

      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 -right-20 -z-10 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
    </section>
  );
}
