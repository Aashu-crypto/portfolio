import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name} — ${site.role}. React Native, Node.js & AI. ${site.location}. Open to remote roles.`;
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
          background: "#07090f",
          color: "#f2f5fc",
          padding: "54px 66px",
          fontFamily: "sans-serif",
          borderTop: "8px solid #c9ff63",
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
              width: 56,
              height: 56,
              color: "#07090f",
              background: "#c9ff63",
              borderRadius: 14,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            AG
          </div>
          <div style={{ fontSize: 20, color: "#a7b0c1" }}>
            aashutoshgandotra.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.045em",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 42,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#93a5ff",
            }}
          >
            {site.role}
          </div>
          <div style={{ fontSize: 27, color: "#cbd2e0" }}>
            React Native · Node.js · TypeScript · AI workflows
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #293040",
            paddingTop: 26,
            fontSize: 21,
          }}
        >
          <div style={{ color: "#a7b0c1" }}>{site.location}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#c9ff63",
              }}
            />
            <div style={{ color: "#c9ff63" }}>Open to remote roles</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
