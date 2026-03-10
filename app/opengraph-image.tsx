import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        <div
            style={{
                background: "#0b0f14",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#f5f7fa"
            }}
        >
            <h1 style={{ fontSize: 64, color: "#d4af37" }}>
                Paulinus Onwumere Odinaka
            </h1>
            <p style={{ fontSize: 32, color: "#9ca3af" }}>
                Actor · Music Artist · 2D Animator
            </p>
        </div>
    );
}
