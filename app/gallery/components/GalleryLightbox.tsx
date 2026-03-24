 import { motion } from "framer-motion";
import CinematicImage from "../components/CinematicImage";
import type { MediaItem } from "../data/types";

interface GalleryLightboxProps {
    item: MediaItem;
    onClose: () => void;
}

export function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {
  console.log(item)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-primary/98 backdrop-blur-2xl flex items-center justify-center p-4 cursor-zoom-out"
        >
            <motion.div
                layoutId={`img-${item.id}`}
                className="relative max-w-5xl max-h-[90vh]"
            >
                <CinematicImage
                    src={item.src}
                    alt={item.label}
                    className="object-contain w-full h-full"
                />
            </motion.div>
        </motion.div>
    );
}
