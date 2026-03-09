"use client";

import { CldImage } from "next-cloudinary";

export default function HeroImg() {
    return (
        <CldImage
            src="FB_IMG_1773000794903_en1zeg"
             alt="Onwumere paulinus Professional Portrait"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover grayscale hover:grayscale-0
                        transition-all duration-1000 ease-in-out"
        />
    );
}
 