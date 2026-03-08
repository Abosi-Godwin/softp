 "use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        "ABOUT",
        "ACTING",
        "MUSIC",
        "ANIMATION",
        "GALLERY",
        "CONTACT"
    ];

    // Variants for the mobile menu drawer
    const menuVariants = {
        closed: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
        open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
    };

    // Stagger effect for links
    const linkVariants = {
        closed: { opacity: 0, x: -20 },
        open: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: 0.1 + i * 0.1, duration: 0.4 }
        })
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-xl border-b border-white/5">
            <nav className="max-w-7xl mx-auto px-6 py-6 lg:py-8 flex justify-between items-center relative z-50">
                {/* Brand/Logo */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-heading text-xl lg:text-2xl font-bold tracking-[0.4em] uppercase text-letters-primary"
                >
                    SOFT P
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden lg:flex gap-10">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            href={`#${link.toLowerCase()}`}
                            className="relative group text-[10px] font-bold tracking-[0.25em] text-letters-muted hover:text-gold transition-colors duration-300"
                        >
                            {link}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-letters-primary hover:text-gold transition-colors z-50"
                    aria-label="Toggle Menu"
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
                                custom={i}
                                variants={linkVariants}
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-heading font-bold tracking-[0.2em] text-letters-primary hover:text-gold transition-colors"
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
