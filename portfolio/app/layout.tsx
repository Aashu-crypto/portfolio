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
  metadataBase: new URL("https://aashutoshgandotra.dev"),
  title: {
    default:
      "Aashutosh Gandotra - Full-Stack Mobile Developer | React Native Expert",
    template: "%s | Aashutosh Gandotra",
  },
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
    "Expo Developer",
    "Redux Developer",
    "PostgreSQL Developer",
    "Firebase Developer",
    "Jammu Developer",
    "India Developer",
  ],
  authors: [
    { name: "Aashutosh Gandotra", url: "https://aashutoshgandotra.dev" },
  ],
  creator: "Aashutosh Gandotra",
  publisher: "Aashutosh Gandotra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  alternates: {
    canonical: "https://aashutoshgandotra.dev",
  },
  openGraph: {
    title:
      "Aashutosh Gandotra - Full-Stack Mobile Developer | React Native Expert",
    description:
      "Full-Stack Mobile Developer specializing in React Native, React, and Node.js. 3+ years experience building scalable applications.",
    url: "https://aashutoshgandotra.dev",
    siteName: "Aashutosh Gandotra Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aashutosh Gandotra - Full-Stack Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Aashutosh Gandotra - Full-Stack Mobile Developer | React Native Expert",
    description:
      "Full-Stack Mobile Developer specializing in React Native, React, and Node.js. Building scalable apps with 3+ years of experience.",
    creator: "@AashutoshGando3",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add your actual verification codes when you get them from:
    // Google Search Console, Bing Webmaster Tools, etc.
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
