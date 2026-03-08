"use client";

import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="md:col-span-2 flex flex-col gap-6">
                        <h2 className="font-heading text-2xl font-bold tracking-[0.4em] uppercase text-letters-primary">
                            SOFT P
                        </h2>
                        <p className="max-w-xs text-letters-muted text-xs leading-relaxed tracking-widest uppercase">
                            Multidisciplinary Artist <br />& Strategic Creative
                            Partner.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                            Navigation
                        </h3>
                        {[
                            "About",
                            "Acting",
                            "Music",
                            "Animation",
                            "Gallery"
                        ].map(item => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-letters-muted hover:text-white transition-colors text-xs uppercase tracking-widest"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Social Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                            Social
                        </h3>
                        {["Instagram", "IMDb", "LinkedIn", "Vimeo"].map(
                            platform => (
                                <a
                                    key={platform}
                                    href="#"
                                    className="text-letters-muted hover:text-white transition-colors text-xs uppercase tracking-widest"
                                >
                                    {platform}
                                </a>
                            )
                        )}
                    </div>
                </div>

                {/* Legal Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-letters-muted/50">
                    <p>© {currentYear} SOFT P. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a
                            href="#"
                            className="hover:text-gold transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-gold transition-colors"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
