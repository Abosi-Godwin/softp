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
    // Added 'lfill' (Limit Fill) to prevent upscaling blur 
    // and 'auto:eco' to preserve contrast in event photos
    crop="lfill"
    gravity="auto"
    quality="auto:eco"
    // Use object-cover to ensure the image fills the Bento box 
    // while maintaining its center point
    className={`object-cover transition-all duration-700 ${className}`}
/>

    );
}


/*
 <CldImage
            fill
            src={src}
            alt={alt}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            crop="fill"
            gravity="auto"
            // High-end optimization:
            quality="auto:best" 
            format="auto"
            className={`object-cover transition-all duration-700 ease-in-out ${className}`}
        />
        



*/