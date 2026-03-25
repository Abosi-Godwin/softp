 import { motion } from "framer-motion";
import CinematicImage from "./CinematicImage";
import type { MediaItem } from "../data/types";

interface GalleryLightboxProps {
    item: MediaItem;
    onClose: () => void;
}

export function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-primary/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-16 cursor-zoom-out"
        >
            <motion.div
                layoutId={`img-${item.id}`}
                className="relative max-w-5xl w-full"
                onClick={e => e.stopPropagation()}
            >
                <CinematicImage
                    src={item.src}
                    alt={item.label}
                    width={item.width}
                    height={item.height}
                    className="w-full h-auto max-h-[90vh] object-contain"
                />
            </motion.div>
        </motion.div>
    );
}
