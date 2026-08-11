import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aashutosh Gandotra",
    short_name: "AG",
    description:
      "Lead Full Stack Engineer in Gurugram, India (from Jammu and Kashmir). React Native, Node.js, TypeScript. Open to remote.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F6F8",
    theme_color: "#F5F6F8",
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
