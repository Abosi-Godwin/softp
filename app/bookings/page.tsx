import type { Metadata } from "next";

import BookingClient from "./components/BookingClient";

export const metadata: Metadata = {
    title: "Bookings",
    description:
        "Pictures of paulinus Onwumere Odinaka — First-Class Theatre Arts graduate of the University of Nigeria, Nsukka. Actor, music artist, and 2D animator.",
    alternates: {
        canonical: "https://softp.vercel.app/bookings"
    },
    openGraph: {
        title: "Bookings — Paulinus Onwumere Odinaka",
        description:
            "Actor, music artist, and 2D animator. First-Class Theatre Arts graduate of the University of Nigeria, Nsukka.",
        url: "https://softp.vercel.app/bookings",
        type: "website"
    }
};

export default function BookingsPage() {
    return <BookingClient />;
}
