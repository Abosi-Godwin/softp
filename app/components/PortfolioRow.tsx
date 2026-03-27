import { motion } from "framer-motion";

import { Play } from "lucide-react";
import CinematicImage from "../components/CinematicImage";

const PortfolioRow = ({ project, index }) => {
    return (
        <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            viewport={{ once: true }}
            tabIndex={0}
            className="group relative aspect-[3/4] overflow-hidden bg-secondary cursor-pointer focus:outline-none"
        >
            {/* Image — scales on hover */}
            <div className="absolute inset-0 z-0 transition-transform duration-1000 ease-out group-hover:scale-110 group-active:scale-110 group-focus:scale-110">
                <CinematicImage
                    src={project.image}
                    alt={project.title}
                    className="grayscale group-hover:grayscale-0 group-active:grayscale-0 group-focus:grayscale-0 transition-[filter] duration-700"
                />
            </div>

            {/* Gradient — fixed, does NOT scale */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80 group-hover:opacity-40 group-active:opacity-40 group-focus:opacity-40 transition-opacity duration-700" />

            {/* Play button */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/10">
                    <Play className="text-gold fill-gold ml-1" size={24} />
                </div>
            </div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-2 z-30">
                <span className="text-gold text-[9px] font-bold tracking-[0.3em] uppercase">
                    {project.category}
                </span>
                <h3 className="text-2xl font-heading text-letters-primary leading-none group-hover:text-gold group-active:text-gold group-focus:text-gold transition-colors">
                    {project.title}
                </h3>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100 translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 group-focus:translate-y-0 transition-all duration-500">
                    <span className="text-letters-muted text-[10px] tracking-widest">
                        {project.year}
                    </span>
                    <span className="text-letters-primary text-[10px] font-bold tracking-widest">
                        VIEW CASE STUDY
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioRow;
