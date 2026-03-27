import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

import Header from "./components/Header";
import Footer from "./components/Footer";

// ─── Fonts ───
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap"
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#000000"
};

// ─── SEO Metadata ────
const BASE_URL = "https://softp.vercel.app";

export const metadata: Metadata = {
    title: {
        default:
            "Paulinus Onwumere Odinaka — Actor | Music Artist | 2D Animator",
        template: "%s | Paulinus Onwumere Odinaka"
    },
    description:
        "Official portfolio of Paulinus Onwumere Odinaka, a First-Class Theatre Arts graduate of the University of Nigeria, Nsukka. Professional actor, music artist, and 2D animation creator showcasing films, music projects, and creative works.",
    keywords: [
        "Paulinus Onwumere Odinaka",
        "Paulinus Onwumere",
        "Paulinus Odinaka",
        "Paulinus actor Nigeria",
        "Paulinus UNN Nsukka",
        "Paulinus music artist",
        "Paulinus animation",
        "Nigerian actor portfolio",
        "Theatre arts graduate Nigeria",
        "Nollywood actor",
        "Nigerian filmmaker",
        "2D animator Nigeria"
    ],
    authors: [{ name: "Paulinus Onwumere Odinaka", url: BASE_URL }],
    creator: "Paulinus Onwumere Odinaka",
    publisher: "Paulinus Onwumere Odinaka",
    category: "portfolio",
    metadataBase: new URL(BASE_URL),
    alternates: {
        canonical: BASE_URL
    },

    // ── Open Graph ──
    openGraph: {
        title: "Paulinus Onwumere Odinaka — Actor | Music Artist | 2D Animator",
        description:
            "Official portfolio of Paulinus Onwumere Odinaka — First-Class Theatre Arts graduate, professional actor, music artist, and 2D animation creator.",
        url: BASE_URL,
        siteName: "Paulinus Onwumere Odinaka Portfolio",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Paulinus Onwumere Odinaka Official Portfolio",
                type: "image/jpeg"
            }
        ],
        locale: "en_US",
        type: "website"
    },

    // ── Twitter / X ──
    twitter: {
        card: "summary_large_image",
        title: "Paulinus Onwumere Odinaka — Actor | Music Artist | 2D Animator",
        description:
            "Official portfolio of Paulinus Onwumere Odinaka — actor, music artist, and 2D animation creator.",
        images: ["/og-image.jpg"],
        creator: "@softp" // ← replace with real handle
    },

    // ── Robots ──
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },

    // ── Verification ──
    verification: {
        google: "8wKxFBoxKbThGGJsFMXBoid6P9uWONt00GcfrWKw0BU"
    }
};

// ── JSON-LD Structured Data (Person schema)

const jsonLd = [
    // Person schema
    {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Paulinus Onwumere Odinaka",
        url: BASE_URL,
        image: `${BASE_URL}/og-image.jpg`,
        jobTitle: ["Actor", "Music Artist", "2D Animator"],
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "University of Nigeria, Nsukka"
        },
        nationality: "Nigerian",
        sameAs: [
            "https://twitter.com/softp",
            "https://instagram.com/Offixial-softp",
            "https://www.tiktok.com/@realsoftp001",
            "https://www.linkedin.com/in/paulinus-onwumere-328835315/",
            "https://www.facebook.com/pauli.nus.onwumere.2025"
        ]
    },
    // Website schema
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Paulinus Onwumere Odinaka Portfolio",
        url: BASE_URL,
        author: {
            "@type": "Person",
            name: "Paulinus Onwumere Odinaka"
        }
    },
    // BreadcrumbList
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            {
                "@type": "ListItem",
                position: 2,
                name: "Films",
                item: `${BASE_URL}/films`
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Music",
                item: `${BASE_URL}/music`
            },
            {
                "@type": "ListItem",
                position: 4,
                name: "Animation",
                item: `${BASE_URL}/animation`
            }
        ]
    }
];

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="font-body">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Header />
                <main className="flex-grow py-10">{children}</main>
                <Footer />
                {/* Google Analytics — replace GA_MEASUREMENT_ID */}
                <GoogleAnalytics gaId="G-EXQ46LPDJN" />
            </body>
        </html>
    );
}
