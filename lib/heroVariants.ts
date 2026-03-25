import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
};

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export const HERO_LINKS = [
    { href: "/portfolio", label: "Explore Portfolio", variant: "primary" },
    { href: "/bookings",  label: "Bookings",          variant: "outline" },
] as const;
