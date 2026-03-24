export type MediaSize = "tall" | "wide" | "square";

export interface MediaItem {
    id: number;
    src: string;
    size: MediaSize;
    label: string;
}

export const ARCHIVE_MEDIA: MediaItem[] = [
    { id: 1, src: "FB_IMG_1773000797945_jx27va", size: "tall",   label: "Study 01"    },
    { id: 2, src: "FB_IMG_1773000942560_cypu4x", size: "wide",   label: "Set Design"  },
    { id: 3, src: "FB_IMG_1773000974551_lhhtu0", size: "square", label: "Sketch"      },
    { id: 4, src: "FB_IMG_1773000981569_fgsust", size: "tall",   label: "Action"      },
    { id: 5, src: "FB_IMG_1773001094387_mudaxg", size: "wide",   label: "Final Frame" },
    { id: 6, src: "FB_IMG_1773000742288_nbm7j8", size: "square", label: "Lighting"    },
];

export const sizeToSpan: Record<MediaSize, string> = {
    tall:   "md:col-span-3 md:row-span-3",
    wide:   "md:col-span-6 md:row-span-2",
    square: "md:col-span-3 md:row-span-2",
};
