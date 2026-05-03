import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Daniel Janda — Software Developer & IT Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(236,72,153,0.18), transparent 60%), radial-gradient(ellipse 70% 50% at 80% 80%, rgba(59,130,246,0.10), transparent 70%)",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Top — terminal handle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#ec4899",
            fontSize: "20px",
            fontFamily: "monospace",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          <span>~</span>
          <span style={{ color: "#fff" }}>daniel-janda</span>
        </div>

        {/* Middle — name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            lineHeight: 0.9,
            fontWeight: 900,
            letterSpacing: "-0.04em",
          }}
        >
          <span style={{ fontSize: "180px" }}>Daniel</span>
          <span style={{ fontSize: "180px", display: "flex" }}>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #ec4899, #a855f7, #f472b6)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Janda
            </span>
            <span style={{ color: "#ec4899" }}>.</span>
          </span>
        </div>

        {/* Bottom — role */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            color: "#9ca3af",
            fontSize: "24px",
            fontFamily: "monospace",
          }}
        >
          <span>Software Developer · IT Specialist</span>
          <span style={{ color: "#6f6f74" }}>danieljanda.cz</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
