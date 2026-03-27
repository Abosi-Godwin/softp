 "use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { getCldVideoUrl } from "next-cloudinary";

type AnimationItem = {
    title: string;
    tech: string;
    desc: string;
    publicId: string;
};

type Props = {
    item: AnimationItem;
    index: number;
};

export default function AnimationCard({ item, index }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    const videoUrl = getCldVideoUrl({
        src: item.publicId,
        quality: "auto",
        format: "auto"
    });

    const posterUrl = getCldVideoUrl({
        src: item.publicId,
        assetType: "video",
        format: "jpg",
        quality: "auto",
        rawTransformations: ["so_0"]
    });

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col gap-8"
        >
            {/* Screen Container */}
            <div className="relative aspect-video bg-secondary overflow-hidden rounded-sm border border-white/5">

                {/* Scanning line */}
                <motion.div
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-gold/30 blur-sm z-20 pointer-events-none"
                />

                {/* Video — filter applied directly so it works on the compositor layer */}
                <video
                    ref={videoRef}
                    src={videoUrl}
                    poster={posterUrl}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseOver={() => videoRef.current?.play()}
                    onMouseOut={() => videoRef.current?.pause()}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
                />

                {/* Corner UI overlays */}
                <div className="absolute top-4 left-4 text-[8px] text-white/20 font-mono tracking-widest uppercase z-10">
                    REC • 00:00:24:02
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2 items-center z-10">
                    <div className="w-1 h-1 bg-gold rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-white/20 rounded-full" />
                </div>
            </div>

            {/* Meta */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <h3 className="text-2xl lg:text-3xl font-heading text-letters-primary group-hover:text-gold transition-colors duration-300">
                        {item.title}
                    </h3>
                    <Layers
                        size={18}
                        className="text-letters-muted group-hover:rotate-12 transition-transform duration-300"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">
                        {item.tech}
                    </span>
                    <p className="text-letters-muted text-sm leading-relaxed max-w-sm">
                        {item.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
