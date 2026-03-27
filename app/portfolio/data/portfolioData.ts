export interface Project {
  id: string;
  title: string;
  role: string;
  year: string;
  type: string;
  description: string;
  src: string;
}

export const portfolioProjects: Project[] = [
  {
    id: "01",
    title: "Fragments of Silence",
    role: "Lead Actor",
    year: "2024",
    type: "Short Film",
    description:
      "A restrained performance exploring isolation, memory, and emotional tension through silence and minimal dialogue.",
    src: "Paulinus4_etpmtn",
  },
  {
    id: "02",
    title: "Echoes of the Stage",
    role: "Theatre Performer",
    year: "2023",
    type: "Stage Performance",
    description:
      "A live theatrical piece blending classical delivery with contemporary narrative structure and audience immersion.",
    src: "Paulinus3_nfx7q7",
  },
  {
    id: "03",
    title: "The Inner Voice",
    role: "Voice Actor",
    year: "2024",
    type: "2D Animation",
    description:
      "An animated narrative centered on identity and self-awareness, featuring expressive voice performance.",
    src: "Paulinus2_cdb5lv",
  },
  {
    id: "04",
    title: "Nocturnal City",
    role: "Music Composer",
    year: "2025",
    type: "Soundtrack",
    description:
      "A cinematic soundscape designed to enhance visual storytelling through atmosphere and tonal progression.",
    src: "Paulinus1_ccgzpi",
  },
];