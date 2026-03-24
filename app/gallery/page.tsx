import { fetchGalleryImages } from "../../lib/cloudinary";
import MasonryGallery from "./components/MasonryGallery";

export default async function GalleryPage() {
  
    const archiveMedia = await fetchGalleryImages();
    return <MasonryGallery archiveMedia={archiveMedia} />;
}
