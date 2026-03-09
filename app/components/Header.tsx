"use client";

import { motion } from "framer-motion";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-xl border-b border-white/5">
            <nav className="max-w-7xl mx-auto px-6 py-6 lg:py-8 flex justify-between items-center relative z-50">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-heading text-xl lg:text-2xl font-extrabold tracking-[0.4em] uppercase text-letters-primary"
                >
                    SOFT-P
                </motion.div>

                <NavBar />
            </nav>
        </header>
    );
}
