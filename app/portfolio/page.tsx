import type { Metadata } from "next";

import PortfolioClient from "./components/PortfolioClient";

export const metadata: Metadata = {
    title: "Portfolio",
    description:
        "Paulinus Onwumere Odinaka — First-Class Theatre Arts graduate of the University of Nigeria, Nsukka. Actor, music artist, and 2D animator.",
    alternates: {
        canonical: "https://softp.vercel.app/portfolio"
    },
    openGraph: {
        title: "Portfolio — Paulinus Onwumere Odinaka",
        description:
            "Actor, music artist, and 2D animator. First-Class Theatre Arts graduate of the University of Nigeria, Nsukka.",
        url: "https://softp.vercel.app/portfolio",
        type: "website"
    }
};

export default function PortfolioPage() {
    return (
        <section className="min-h-screen bg-primary pt-32 pb-20 px-6 relative overflow-hidden">
            <PortfolioClient />
        </section>
    );
}
