import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import MusicSection from "./components/MusicSection";
import AnimationSection from "./components/AnimationSection";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center py-10">
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
