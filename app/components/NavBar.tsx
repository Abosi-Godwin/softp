"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

export const navLinks = [
    { name: "THE ARCHIVE", href: "/portfolio", label: "01" },
    { name: "VISUALS", href: "/gallery", label: "02" },
    { name: "ABOUT", href: "/about", label: "03" },
    { name: "BOOKINGS", href: "/bookings", label: "04" }
];

const menuVariants: Variants = {
    closed: {
        opacity: 0,
        y: "-100%",
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    },
    open: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
};

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const close = () => setIsOpen(false);

    return (
        <>
            {/* Desktop */}
            <div className="hidden lg:flex gap-10">
                {navLinks.map(({ name, href }, i) => {
                    const isActive = pathname === href;
                    return (
                        <motion.div
                            key={href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                href={href}
                                className={`relative group text-[10px] font-bold tracking-[0.25em] transition-colors duration-500 ${
                                    isActive
                                        ? "text-gold"
                                        : "text-letters-muted hover:text-letters-primary"
                                }`}
                            >
                                {name}
                                <span
                                    className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-500 ${
                                        isActive
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                />
                            </Link>
                        </motion.div>
                    );
                })}
            </div>

            {/* Mobile toggle */}
            <button
                onClick={() => setIsOpen(prev => !prev)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="lg:hidden p-2 text-letters-primary hover:text-gold transition-colors z-50"
            >
                {isOpen ? (
                    <X size={24} strokeWidth={1.5} />
                ) : (
                    <Menu size={24} strokeWidth={1.5} />
                )}
            </button>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 h-screen bg-secondary flex flex-col justify-center items-center gap-8 z-40"
                    >
                        {navLinks.map(({ name, href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={close}
                                className={`text-2xl font-heading font-bold tracking-[0.2em] transition-colors ${
                                    pathname === href
                                        ? "text-gold"
                                        : "text-letters-primary"
                                }`}
                            >
                                <span className="text-gold text-xs mr-3">
                                    {label}
                                </span>
                                {name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
