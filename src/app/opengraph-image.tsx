import { ImageResponse } from "next/og";
import { meta } from "@/lib/content";

export const alt = meta.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0d",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#f2b84b",
            fontFamily: "monospace",
            marginBottom: 24,
          }}
        >
          {meta.location} · {meta.remote}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 600,
            color: "#e8e9ec",
            letterSpacing: -2,
          }}
        >
          {meta.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#9a9da4",
            marginTop: 24,
            maxWidth: 1000,
          }}
        >
          {meta.title}
        </div>
      </div>
    ),
    { ...size }
  );
}
