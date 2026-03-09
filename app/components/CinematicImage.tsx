"use client";

import { CldImage } from "next-cloudinary";

interface CinematicImageProps {
    src: string;
    alt: string;
    className?: string;
}

export default function CinematicImage({
    src,
    alt,
    className
}: CinematicImageProps) {
    return (
        <CldImage
            fill
            src={src}
            alt={alt}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            crop="fill"
            gravity="auto"
            className={`object-cover transition-all duration-700 ease-in-out ${className}`}
        />
    );
}
