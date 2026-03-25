 "use client";

import { HeroSection }        from "./components/HeroSection";
import { ManifestoSection }   from "./components/ManifestoSection";
import { DisciplinesSection } from "./components/DisciplinesSection";
import { ArchiveLog }         from "./components/ArchiveLog";

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
