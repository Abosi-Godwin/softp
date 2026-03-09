import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export function ReelPlayer({ src }: { src: string }) {
    return (
        <CldVideoPlayer
            width="1920"
            height="1080"
            src={src}
            colors={{ accent: "#D4AF37" }}  
            fontFace="Playfair Display"
            logo={{ imageUrl: "/logo.svg", onClickUrl: "https://softp.com" }}
        />
    );
}
