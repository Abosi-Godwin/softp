import { v2 as cloudinary } from "cloudinary";
import type { CloudinaryResource, MediaItem, MediaSize } from "../data/types";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

export async function fetchGalleryImages(limit = 50): Promise<MediaItem[]> {
    const { resources } = await cloudinary.search
        .expression("folder:gallery")
        .sort_by("created_at", "desc")
        .max_results(limit)
        .execute();

    return (resources as CloudinaryResource[]).map((img, index) => {
        const ratio = img.width / img.height;
        const size: MediaSize =
            ratio > 1.2 ? "wide" : ratio < 0.8 ? "tall" : "square";

        return {
            id: img.public_id,
            src: img.public_id,
            size,
            label: `Archive // ${String(index + 1).padStart(2, "0")}`
        };
    });
}
