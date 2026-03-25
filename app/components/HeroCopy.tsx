import { motion } from "framer-motion";
import Link from "next/link";
import {
    containerVariants,
    itemVariants,
    HERO_LINKS
} from "../../lib/heroVariants";

export function HeroCopy() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 z-10"
        >
            <motion.span
                variants={itemVariants}
                className="text-gold font-bold tracking-[0.3em] text-[10px] lg:text-xs uppercase"
            >
                Actor • Music Artist • 2D Animator
            </motion.span>

            <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] uppercase text-letters-primary"
            >
                First-Class Mind.
                <br />
                <span className="opacity-80">World-Class Art.</span>
            </motion.h1>

            <motion.p
                variants={itemVariants}
                className="max-w-md text-letters-muted text-base lg:text-lg leading-relaxed font-body"
            >
                A multidisciplinary creative seamlessly blending cinematic
                acting, evocative music production, and immersive 2D animation.
            </motion.p>

            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mt-4"
            >
                {HERO_LINKS.map(({ href, label, variant }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`px-10 py-4 text-center font-bold uppercase tracking-[0.2em] text-[10px] transition-colors duration-500 ${
                            variant === "primary"
                                ? "bg-letters-primary text-primary hover:bg-gold"
                                : "border border-letters-muted/30 text-letters-primary hover:border-gold"
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </motion.div>
        </motion.div>
    );
}
