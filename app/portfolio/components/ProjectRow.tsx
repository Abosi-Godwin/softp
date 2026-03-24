import { motion } from "framer-motion";
import CinematicImage from "../../components/CinematicImage";
import type { Project } from "../data/projects";

interface ProjectRowProps {
    project: Project;
    index: number;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export function ProjectRow({ project, index, onMouseEnter, onMouseLeave }: ProjectRowProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-white/10 cursor-pointer transition-colors hover:bg-white/[0.02]"
        >
            <div className="flex items-baseline gap-6 mb-4 md:mb-0">
                <span className="text-gold text-sm font-bold tracking-widest">{project.id}</span>
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-letters-primary group-hover:translate-x-4 transition-transform duration-500">
                    {project.title}
                </h2>
            </div>

            <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-12 text-xs tracking-widest uppercase text-white/40">
                <span className="w-24">{project.category}</span>
                <span className="w-32 group-hover:text-gold transition-colors duration-300">{project.role}</span>
                <span>{project.year}</span>

                <div className="w-full h-48 mt-4 md:hidden relative overflow-hidden">
                    <CinematicImage src={project.src} alt={project.title} />
                </div>
            </div>
        </motion.div>
    );
}
