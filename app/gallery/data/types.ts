export type MediaSize = "tall" | "wide" | "square";

export interface MediaItem {
    id: string;
    src: string;
    size: MediaSize;
    label: string;
}

export interface CloudinaryResource {
    public_id: string;
    width: number;
    height: number;
}
