import { ImageResponse } from "next/og";

export const alt =
  "Aashutosh Gandotra — Lead Full Stack Engineer in Gurugram, from Jammu and Kashmir";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F5F6F8",
          color: "#0E0E0E",
          padding: "64px 72px",
          fontFamily: "Georgia, ui-serif, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              background: "#0E0E0E",
              color: "#F5F6F8",
              borderRadius: 14,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            AG
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#5A5A5A",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            aashutoshgandotra.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
            }}
          >
            Aashutosh Gandotra
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#0A4DCC",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            Lead Full Stack Engineer
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              lineHeight: 1.35,
              maxWidth: 920,
              color: "#0E0E0E",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            React Native, Node.js, TypeScript — mobile-led platforms end to end
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#5A5A5A",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            Gurugram, India · Jammu and Kashmir · Open to remote
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
