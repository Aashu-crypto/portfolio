import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aashutosh Gandotra",
    short_name: "AG",
    description:
      "Full-stack AI-native developer building production mobile apps, real-time platforms, cloud backends, and agentic workflows.",
    start_url: "/",
    display: "standalone",
    background_color: "#07090F",
    theme_color: "#07090F",
    lang: "en",
    icons: [
      {
        src: "/favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "/icon",
        type: "image/png",
        sizes: "32x32",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        type: "image/png",
        sizes: "180x180",
        purpose: "any",
      },
    ],
  };
}
