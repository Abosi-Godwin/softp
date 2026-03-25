export interface ArchiveWork {
    title: string;
    role: string;
    year: string;
    category: string;
}

export const ARCHIVE_WORKS: ArchiveWork[] = [
    { title: "THE RITUAL",   role: "Stage Lead",        year: "2024", category: "Theatre"   },
    { title: "SILENT ECHOES", role: "2D Animator",      year: "2024", category: "Animation" },
    { title: "ODINAKA EP",   role: "Composer / Artist", year: "2023", category: "Music"     },
];

export const DISCIPLINES = [
    { title: "Professional Acting", desc: "Method-driven performance for stage and cinematic productions.", label: "Drama"   },
    { title: "Music Artistry",      desc: "Original compositions and vocal performances.",                  label: "Sound"   },
    { title: "2D Animation",        desc: "Character-driven motion and digital visual storytelling.",       label: "Visuals" },
];
