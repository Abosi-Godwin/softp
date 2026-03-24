import type { ServiceKey, Service } from "./types";

export const SERVICES: Record<ServiceKey, Service> = {
    acting: {
        label: "ACTING",
        tag: "Film · TV · Theatre",
        fields: [
            { id: "projectType", label: "Project Type", type: "chips", options: ["Short Film", "Feature Film", "Commercial", "TV / Web Series", "Theatre", "Other"] },
            { id: "role", label: "Role / Character Description", type: "textarea", placeholder: "Briefly describe the character or role you have in mind…" },
            { id: "timeline", label: "Production Timeline", type: "chips", options: ["ASAP", "1–3 months", "3–6 months", "6+ months", "TBD"] },
            { id: "budget", label: "Budget Range", type: "chips", options: ["Under $500", "$500–$2k", "$2k–$5k", "$5k+", "Let's discuss"] }
        ]
    },
    music: {
        label: "MUSIC",
        tag: "Features · Production · Collabs",
        fields: [
            { id: "collab", label: "Type of Collaboration", type: "chips", options: ["Feature Verse", "Full Song Collab", "Beat / Production", "Co-Write", "Other"] },
            { id: "genre", label: "Genre / Vibe", type: "chips", options: ["Hip-Hop", "R&B / Soul", "Pop", "Afrobeats", "Electronic", "Other"] },
            { id: "reference", label: "Reference Track or Mood", type: "text", placeholder: "Drop a link or describe the sonic direction…" },
            { id: "deadline", label: "Delivery Deadline", type: "chips", options: ["Rush (< 2 weeks)", "1 month", "1–3 months", "Flexible"] }
        ]
    },
    animation: {
        label: "ANIMATION",
        tag: "2D · Motion · Commissions",
        fields: [
            { id: "animType", label: "Animation Type", type: "chips", options: ["Music Video", "Character Design", "Short Film", "Brand / Logo Motion", "Explainer", "Other"] },
            { id: "style", label: "Visual Style", type: "chips", options: ["Flat / Minimal", "Detailed / Painterly", "Retro / Vintage", "Abstract", "Not sure yet"] },
            { id: "duration", label: "Approximate Duration", type: "chips", options: ["< 30 sec", "30 sec – 2 min", "2–5 min", "5+ min", "TBD"] },
            { id: "budget", label: "Budget Range", type: "chips", options: ["Under $500", "$500–$2k", "$2k–$5k", "$5k+", "Let's discuss"] }
        ]
    }
};

export const STEP_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
} as const;
