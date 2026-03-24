"use client"

import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-xl border-b border-white/5">
            <nav className="max-w-7xl mx-auto px-6 py-6 lg:py-8 flex justify-between items-center relative z-50">
                <Logo />
                <NavBar />
            </nav>
        </header>
    );
}
