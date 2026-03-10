import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Films",  
    description:
        "Watch films and acting reels featuring Paulinus Onwumere Odinaka — Nigerian actor and Theatre Arts graduate.",
    alternates: {
        canonical: "https://softp.vercel.app/films"
    },
    openGraph: {
        title: "Films — Paulinus Onwumere Odinaka",
        description: "...",
        url: "https://softp.vercel.app/films",
        images: [{ url: "/og-films.jpg", width: 1200, height: 630 }]
    }
};

interface Props {}

const Page = () => {
    return <div>gallery</div>;
};

export default Page;
