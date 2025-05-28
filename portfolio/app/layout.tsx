import type { Metadata } from "next";
import { Inter, Fira_Code, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Aashutosh Gandotra - Full-Stack Mobile Developer | React Native Expert",
  description:
    "Full-Stack Mobile Developer with 3+ years experience in React Native, React, Next.js, Node.js, and TypeScript. Specialized in building scalable mobile apps, real-time features, and cloud deployment. Available for hire.",
  keywords: [
    "React Native Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "Aashutosh Gandotra",
    "Mobile Development",
    "Web Development",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Aashutosh Gandotra" }],
  creator: "Aashutosh Gandotra",
  openGraph: {
    title: "Aashutosh Gandotra - Full-Stack Mobile Developer",
    description:
      "Full-Stack Mobile Developer specializing in React Native, React, and Node.js. 3+ years experience building scalable applications.",
    url: "https://aashutoshgandotra.dev",
    siteName: "Aashutosh Gandotra Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aashutosh Gandotra - Full-Stack Mobile Developer",
    description:
      "Full-Stack Mobile Developer specializing in React Native, React, and Node.js",
    creator: "@AashutoshGando3",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="canonical" href="https://aashutoshgandotra.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} relative`}>
        <AnimatedBackground />
        <div className="relative z-10">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
