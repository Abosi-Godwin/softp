export interface Project {
    id: string;
    title: string;
    category: string;
    role: string;
    year: string;
    src: string;
}

export const portfolioProjects: Project[] = [
    {
        id: "01",
        title: "Neon Shadows",
        category: "Short Film",
        role: "Lead Actor",
        year: "2025",
        src: "your_cloudinary_id_1"
    },
    {
        id: "02",
        title: "Echoes in Canvas",
        category: "Animation",
        role: "Lead Animator",
        year: "2025",
        src: "your_cloudinary_id_2"
    },
    // ...
];
