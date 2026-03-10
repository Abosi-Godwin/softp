 "use client";

import { CldImage } from "next-cloudinary";

interface CinematicImageProps {
    src: string;
    alt: string;
    className?: string;
}

export default function CinematicImage({ src, alt, className }: CinematicImageProps) {
    return (
        <CldImage
            fill
            src={src}
            alt={alt}
           
            quality="auto"
            format="auto"
            
            crop="fill"
            gravity="auto"
            sizes="(max-width: 768px) 100vw, 50vw"
           
            className={`object-cover transition-[filter]  duration-700
            ease-in-out ${className}`}
        />
    );
}
