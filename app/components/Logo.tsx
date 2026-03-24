import { motion } from "framer-motion";
import Link from "next/link";

const Logo = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-heading text-xl lg:text-2xl font-extrabold tracking-[0.4em] uppercase text-letters-primary"
        >
            <Link href="/">SOFT-P</Link>
        </motion.div>
    );
};

export default Logo;
