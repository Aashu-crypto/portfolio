import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#121212",
          borderRadius: 40,
          color: "#FAFAF8",
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: "-0.05em",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        AG
      </div>
    ),
    { ...size },
  );
}
