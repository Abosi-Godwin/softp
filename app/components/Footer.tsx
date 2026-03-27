"use client";

import { motion } from "framer-motion";
import {
    Instagram,
    Linkedin,
    Video,
    ExternalLink,
    ArrowUpRight,
    Heart
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "Instagram", icon: <Instagram size={14} />, href: "#" },
        { name: "IMDb", icon: <ExternalLink size={14} />, href: "#" },
        { name: "LinkedIn", icon: <Linkedin size={14} />, href: "#" },
        { name: "Vimeo", icon: <Video size={14} />, href: "#" }
    ];

    return (
        <footer className="bg-primary pt-32 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Subtle background glow to match the cinematic vibe */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gold/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
                    {/* Brand Column - Expanded for impact */}
                    <div className="md:col-span-5 flex flex-col gap-8">
                        <h2 className="font-heading text-3xl font-extrabold tracking-[0.5em] uppercase text-letters-primary">
                            SOFT-P
                        </h2>
                        <p className="max-w-sm text-letters-muted text-[10px] leading-[2] tracking-[0.3em] uppercase font-light">
                           
                           Multidisciplinary Artist <br />
& Strategic Creative Partner.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="md:col-span-3 flex flex-col gap-5">
                        <h3 className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 opacity-80">
                            Navigate
                        </h3>
                        {[
                            "Home",
                            "Acting",
                            "Music",
                            "Animation",
                            "Gallery"
                        ].map(item => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="group flex items-center gap-2 text-letters-muted hover:text-white transition-all duration-500 text-[10px] uppercase tracking-[0.2em]"
                            >
                                <span className="w-0 group-hover:w-3 h-[1px] bg-gold transition-all duration-500" />
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Social Column - With Icons */}
                    <div className="md:col-span-4 flex flex-col gap-5">
                        <h3 className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 opacity-80">
                            Connect
                        </h3>
                        <div className="grid grid-cols-2 gap-y-4">
                            {socialLinks.map(social => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="group flex items-center gap-3 text-letters-muted hover:text-gold transition-all duration-500 text-[10px] uppercase tracking-[0.2em]"
                                >
                                    <span className="p-2 border border-white/5 rounded-full group-hover:border-gold/30 transition-colors">
                                        {social.icon}
                                    </span>
                                    {social.name}
                                    <ArrowUpRight
                                        size={10}
                                        className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Legal & Credit Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] text-letters-muted/40">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                        <p>© {currentYear} SOFT P. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a
                                href="#"
                                className="hover:text-letters-primary transition-colors"
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="hover:text-letters-primary transition-colors"
                            >
                                Terms
                            </a>
                        </div>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-2 group"
                    >
                        <span className="font-light">Artistry by</span>
                        <a
                            href="https://abosi.vercel.app"
                            target="_blank"
                            className="text-letters-muted group-hover:text-gold transition-colors font-bold flex items-center gap-1"
                        >
                            ABOSI GODWIN
                            <Heart
                                size={10}
                                className="text-red-500/60 group-hover:text-red-500 fill-current transition-colors"
                            />
                        </a>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
