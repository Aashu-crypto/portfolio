import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customColor: "#FEFFF0",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        outline: ["Outline", "sans-serif"],
        normal: ["Normal", "sans-serif"],
        stylish: ["Stylish", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: [
          "var(--font-fira-code)",
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
        code: [
          "var(--font-fira-code)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
        jetbrains: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        typing:
          "typing 3.5s steps(40, end), blink-caret .75s step-end infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { "border-color": "transparent" },
          "50%": { "border-color": "#000" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
