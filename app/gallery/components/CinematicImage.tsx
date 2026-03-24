"use client";
import { CldImage } from "next-cloudinary";

export default function CinematicImage({
    src,
    alt,
    width,
    height,
    className
}: any) {
    return (
        <CldImage
            src={src}
            alt={alt}
            width={width || 1200} // Base width
            height={height || 1600} // Base height
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={className}
            crop="scale"
            quality="auto"
            format="auto"
        />
    );
}
