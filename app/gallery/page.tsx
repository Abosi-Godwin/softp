import type { Metadata } from "next";

import { fetchGalleryImages } from "../../lib/cloudinary";
import MasonryGallery from "./components/MasonryGallery";

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Pictures of paulinus Onwumere Odinaka — First-Class Theatre Arts graduate of the University of Nigeria, Nsukka. Actor, music artist, and 2D animator.",
    alternates: {
        canonical: "https://softp.vercel.app/gallery"
    },
    openGraph: {
        title: "Gallery — Paulinus Onwumere Odinaka",
        description:
            "Actor, music artist, and 2D animator. First-Class Theatre Arts graduate of the University of Nigeria, Nsukka.",
        url: "https://softp.vercel.app/gallery",
        type: "website"
    }
};

export default async function GalleryPage() {
    const archiveMedia = await fetchGalleryImages();
    return <MasonryGallery archiveMedia={archiveMedia} />;
}
