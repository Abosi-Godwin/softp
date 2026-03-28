import type { Metadata } from "next";

import { HeroSection } from "./components/HeroSection";
import { ManifestoSection } from "./components/ManifestoSection";
import { DisciplinesSection } from "./components/DisciplinesSection";
import { ArchiveLog } from "./components/ArchiveLog";

export const metadata: Metadata = {
    title: "About",
    description:
        "Paulinus Onwumere Odinaka — First-Class Theatre Arts graduate of the University of Nigeria, Nsukka. Actor, music artist, and 2D animator.",
    alternates: {
        canonical: "https://softp.vercel.app/about"
    },
    openGraph: {
        title: "About — Paulinus Onwumere Odinaka",
        description:
            "Actor, music artist, and 2D animator. First-Class Theatre Arts graduate of the University of Nigeria, Nsukka.",
        url: "https://softp.vercel.app/about",
        type: "website"
    }
};

export default function AboutPage() {
    return (
        <main className="bg-primary text-letters-primary min-h-screen selection:bg-gold selection:text-primary">
            <HeroSection />
            <ManifestoSection />
            <DisciplinesSection />
            <ArchiveLog />
        </main>
    );
}
