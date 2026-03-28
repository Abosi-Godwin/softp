import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import Header from "./components/Header";
import Footer from "./components/Footer";

// ─── Fonts ──
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

// ─── Viewport ──
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#000000"
};

// ─── SEO Metadata ───
const BASE_URL = "https://softp.vercel.app";
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

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

    // ── Icons (favicon, Apple touch icon) 
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/icon.png", type: "image/png", sizes: "32x32" }
        ],
        apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
        shortcut: "/favicon.ico"
    },

    // ── Open Graph
    openGraph: {
        title: "Paulinus Onwumere Odinaka — Actor | Music Artist | 2D Animator",
        description:
            "Official portfolio of Paulinus Onwumere Odinaka — First-Class Theatre Arts graduate, professional actor, music artist, and 2D animation creator.",
        url: BASE_URL,
        siteName: "Paulinus Onwumere Odinaka Portfolio",
        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                alt: "Paulinus Onwumere Odinaka Official Portfolio",
                type: "image/jpeg"
            }
        ],
        locale: "en_US",
        type: "website"
    },

    // ── Twitter / X ─
    twitter: {
        card: "summary_large_image",
        title: "Paulinus Onwumere Odinaka — Actor | Music Artist | 2D Animator",
        description:
            "Official portfolio of Paulinus Onwumere Odinaka — actor, music artist, and 2D animation creator.",
        images: [OG_IMAGE], // absolute URL
        creator: "@Offixial-softp" // ← replace with real handle
    },

    // ── Robots ───
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

    // ── Search Console Verification ──
    verification: {
        google: "8wKxFBoxKbThGGJsFMXBoid6P9uWONt00GcfrWKw0BU"
    }
};

// ─── JSON-LD Structured Data ───
const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Paulinus Onwumere Odinaka",
        url: BASE_URL,
        image: OG_IMAGE,
        jobTitle: ["Actor", "Music Artist", "2D Animator"],
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "University of Nigeria, Nsukka"
        },
        nationality: "Nigerian",
        sameAs: [
            "https://twitter.com/Offixial-softp",
            "https://instagram.com/Offixial-softp",
            "https://www.tiktok.com/@realsoftp001",
            "https://www.linkedin.com/in/paulinus-onwumere-328835315/",
            "https://www.facebook.com/pauli.nus.onwumere.2025"
        ]
    },
    // WebSite schema
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
                name: "About",
                item: `${BASE_URL}/about`
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Portfolio",
                item: `${BASE_URL}/portfolio/`
            },
            {
                "@type": "ListItem",
                position: 4,
                name: "Gallery",
                item: `${BASE_URL}/gallery`
            },
            {
                "@type": "ListItem",
                position: 4,
                name: "Bookings",
                item: `${BASE_URL}/bookings`
            }
        ]
    }
];

// ─── Root Layout ───
export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <meta property="og:image:secure_url" content={OG_IMAGE} />
            </head>
            <body className="font-body">
                {jsonLd.map((schema, i) => (
                    <script
                        key={i}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(schema)
                        }}
                    />
                ))}

                <Header />
                <main className="flex-grow py-10">{children}</main>
                <Footer />

                <GoogleAnalytics gaId="G-EXQ46LPDJN" />
            </body>
        </html>
    );
}
