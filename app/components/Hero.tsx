 "use client";

import { HeroCopy }  from "./HeroCopy";
import { HeroImage } from "./HeroImage";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
                <HeroCopy />
                <HeroImage />
            </div>

            <div className="absolute top-1/2 -right-20 -z-10 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
        </section>
    );
}
