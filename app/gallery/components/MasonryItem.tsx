 import { motion } from "framer-motion";
import CinematicImage from "./CinematicImage";
import type { MediaItem } from "../data/types";

interface MasonryItemProps {
    item: MediaItem;
    index: number;
    onClick: () => void;
}

export function MasonryItem({ item, index, onClick }: MasonryItemProps) {
    return (
        <motion.div
            layoutId={`img-${item.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 5) * 0.1 }}
            onClick={onClick}
            className="relative break-inside-avoid group cursor-zoom-in border border-white/5 bg-secondary overflow-hidden"
        >
            <div className="transition-transform duration-1000 ease-out group-hover:scale-105">
                <CinematicImage
                    src={item.src}
                    alt={item.label}
                    width={item.width}
                    height={item.height}
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase italic">
                    {item.label}
                </span>
            </div>
        </motion.div>
    );
}
