 "use client";

import { CldImage } from "next-cloudinary";

interface CinematicImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

export default function CinematicImage({ src, alt, width, height, className }: CinematicImageProps) {
    return (
        <CldImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={className}
            crop="scale"
            quality="auto"
            format="auto"
        />
    );
}
