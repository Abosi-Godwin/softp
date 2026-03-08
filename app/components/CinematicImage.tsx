import { CldImage } from "next-cloudinary";

export function CinematicImage({ src, alt }: { src: string; alt: string }) {
    return (
        <CldImage
            width="1200"
            height="1600"
            src={src}  
            alt={alt}
            sizes="(max-width: 768px) 100vw, 50vw"
            tint="equalize:80:gray" 
            overlays={[
                {
                    text: {
                        color: "white",
                        fontFamily: "Playfair Display",
                        fontSize: 40,
                        fontWeight: "bold",
                        text: "SOFT P"
                    },
                    position: { gravity: "south_east", x: 20, y: 20 }
                }
            ]}
            className="object-cover hover:filter-none transition-all duration-700"
        />
    );
}
