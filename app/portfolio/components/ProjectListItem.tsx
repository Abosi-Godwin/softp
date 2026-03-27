"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { Project } from "../data/portfolioData";

interface ProjectListItemProps {
  project: Project;
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export default function ProjectListItem({
  project,
  index,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: ProjectListItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={clsx(
        "relative flex items-center gap-4 md:gap-8 cursor-pointer",
        "px-4 md:px-6 py-8 md:py-10",
        "border-b border-white/10 transition-colors duration-300",
        "active:bg-white/[0.04]",
        isActive ? "bg-white/[0.05]" : "hover:bg-white/[0.02]"
      )}
    >
      {/* Animated left border */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold origin-top"
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Index */}
      <span
        className={clsx(
          "text-xs font-mono tracking-widest shrink-0 transition-colors duration-300",
          isActive ? "text-gold" : "text-white/20"
        )}
      >
        {project.id}
      </span>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <motion.h3
          className={clsx(
            "text-xl md:text-3xl font-heading transition-colors duration-300 truncate",
            isActive ? "text-gold" : "text-letters-primary"
          )}
          animate={{ x: isActive ? 6 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>

        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="text-xs text-letters-muted">{project.role}</span>
          <span className="text-white/20 text-xs">·</span>
          <span className="text-xs text-letters-muted">{project.year}</span>
          <span
            className={clsx(
              "text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border transition-colors duration-300",
              isActive
                ? "border-gold/50 text-gold"
                : "border-white/10 text-white/30"
            )}
          >
            {project.type}
          </span>
        </div>
      </div>

      {/* Arrow */}
      <motion.div
        className="text-gold shrink-0"
        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4 10h12M12 6l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}