
"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import MusicSection from "./components/MusicSection";
import AnimationSection from "./components/AnimationSection";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default function Home() {
    return (
        <main
            className="relative min-h-screen flex flex-col items-center
        justify-center"
        >
            <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <Hero />
            <About />
            <Portfolio />
            <MusicSection />
            <AnimationSection />
            <Gallery />
            <Contact />
        </main>
    );
}
