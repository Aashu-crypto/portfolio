import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

const title = "Aashutosh Gandotra — Lead Full Stack Engineer";
const description =
  "Lead Full Stack Engineer specializing in React Native and Node.js, with 4+ years delivering production mobile platforms, real-time systems, and cloud backends.";

export const viewport: Viewport = {
  themeColor: "#F5F6F8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aashutoshgandotra.com"),
  title: {
    default: title,
    template: "%s | Aashutosh Gandotra",
  },
  description,
  applicationName: "Aashutosh Gandotra",
  keywords: [
    "Aashutosh Gandotra",
    "Lead Full Stack Engineer",
    "React Native Developer",
    "Full Stack Engineer",
    "Node.js",
    "TypeScript",
    "Gurugram",
    "Jammu and Kashmir",
    "Jammu & Kashmir",
    "India",
    "Remote Full Stack Engineer",
    "Zaptric",
  ],
  authors: [
    { name: "Aashutosh Gandotra", url: "https://www.aashutoshgandotra.com" },
  ],
  creator: "Aashutosh Gandotra",
  publisher: "Aashutosh Gandotra",
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.aashutoshgandotra.com",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.svg"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title,
    description,
    url: "https://www.aashutoshgandotra.com",
    siteName: "Aashutosh Gandotra",
    locale: "en_IN",
    type: "profile",
    firstName: "Aashutosh",
    lastName: "Gandotra",
    username: "aashutosh-gandotra",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@AashutoshGando3",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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
      className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
