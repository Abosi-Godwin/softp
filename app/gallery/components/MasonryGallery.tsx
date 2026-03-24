 "use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MasonryItem } from "./MasonryItem";
import { GalleryLightbox } from "./GalleryLightbox";
import type { MediaItem } from "../data/types";

interface MasonryGalleryProps {
    archiveMedia: MediaItem[];
}

export default function MasonryGallery({ archiveMedia }: MasonryGalleryProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedItem = archiveMedia.find(m => m.id === selectedId) ?? null;

    return (
        <section className="bg-primary min-h-screen pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto mb-24">
                <span className="text-gold font-bold tracking-[0.8em] text-[10px] uppercase block mb-4">
                    Visual Archive
                </span>
                <h1 className="text-6xl md:text-9xl font-heading font-black text-letters-primary leading-none uppercase">
                    THE WORKS<span className="text-gold">.</span>
                </h1>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8 max-w-[1800px] mx-auto">
                {archiveMedia.map((item, i) => (
                    <MasonryItem
                        key={item.id}
                        item={item}
                        index={i}
                        onClick={() => setSelectedId(item.id)}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <GalleryLightbox
                        item={selectedItem}
                        onClose={() => setSelectedId(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
