 "use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const navLinks = [
        "ABOUT",
        "ACTING",
        "MUSIC",
        "ANIMATION",
        "GALLERY",
        "CONTACT"
    ];

    // Intersection Observer Logic
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px", // Triggers when section is roughly in the top third
            threshold: 0,
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id.toUpperCase());
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        // Track all sections that match our nav links
        navLinks.forEach((link) => {
            const element = document.getElementById(link.toLowerCase());
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as any }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as any }
        }
    };

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

                {/* Desktop Links */}
                <div className="hidden lg:flex gap-10">
                    {navLinks.map((link, i) => {
                        const isActive = activeSection === link;
                        return (
                            <motion.a
                                key={link}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                href={`#${link.toLowerCase()}`}
                                className={`relative group text-[10px] font-bold tracking-[0.25em] transition-colors duration-500 ${
                                    isActive ? "text-gold" : "text-letters-muted"
                                }`}
                            >
                                {link}
                                {/* Animated Underline for Active State */}
                                <span 
                                    className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-500 ${
                                        isActive ? "w-full" : "w-0 group-hover:w-full"
                                    }`} 
                                />
                            </motion.a>
                        );
                    })}
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-letters-primary hover:text-gold transition-colors z-50"
                >
                    {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 h-screen bg-secondary flex flex-col justify-center items-center gap-8 z-40"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className={`text-2xl font-heading font-bold tracking-[0.2em] transition-colors ${
                                    activeSection === link ? "text-gold" : "text-letters-primary"
                                }`}
                            >
                                {link}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
