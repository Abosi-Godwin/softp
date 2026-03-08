import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair"
});

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.variable} ${playfair.variable} antialiased bg-primary text-letters-primary font-body flex flex-col min-h-screen`}
            >
                <Navbar />
                {/* Semantic main wraps the page content */}
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
