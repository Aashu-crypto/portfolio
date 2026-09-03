export const site = {
  name: "Aashutosh Gandotra",
  role: "Full-Stack AI-Native Developer",
  title: "I build intelligent products from interface to infrastructure.",
  description:
    "Full-stack AI-native developer building production mobile apps, real-time platforms, cloud backends, and agentic workflows.",
  location: "Gurugram, India",
  hometown: "Jammu and Kashmir",
  remote: "Open to remote",
  availability: "Available for select remote opportunities",
  email: "ashugandotra14@gmail.com",
  resume: "/Aashutosh_Resume.pdf",
  github: "https://github.com/Aashu-crypto",
  linkedin: "https://www.linkedin.com/in/aashutosh-gandotra/",
  url: "https://www.aashutoshgandotra.com",
} as const;

export type ProjectLink = { label: string; href: string };

export type Project = {
  number: string;
  kicker: string;
  name: string;
  headline: string;
  summary: string;
  stack: string[];
  capabilities: string[];
  contributions: string[];
  links: ProjectLink[];
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    kicker: "EV mobility · Lead ownership",
    name: "Zaptric Mobility",
    headline: "One intelligent system for every moving part of EV operations.",
    summary:
      "A connected product suite spanning driver and supervisor apps, fleet operations, charging, payments, and an AI operations agent.",
    stack: [
      "React Native",
      "React",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "OCPI",
      "Gemini",
      "MCP",
    ],
    capabilities: [
      "Mobile products",
      "Fleet operations",
      "Charging + payments",
      "AI operations",
    ],
    contributions: [
      "Own end-to-end delivery across two React Native apps, a React admin dashboard, and Node.js/Prisma services.",
      "Shipped OCPI charging, payments, fleet workflows, and a production Gemini/MCP agent for operations.",
    ],
    links: [
      { label: "Live site", href: "https://zaptric.in/" },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.zaptric.pilotmain",
      },
      {
        label: "View code",
        href: "https://github.com/Aashu-crypto/react-native-zaptric-ui",
      },
    ],
    image: "/images/driverapp.png",
    imageAlt: "Zaptric driver application screens",
    secondaryImage: "/images/dashboard.png",
    secondaryImageAlt: "Zaptric fleet operations dashboard",
  },
  {
    number: "02",
    kicker: "Telehealth · Real-time product",
    name: "All Cures",
    headline: "Live clinical care without the waiting-room friction.",
    summary:
      "A real-time healthcare experience that brings consultation, messaging, content, and payments into one mobile workflow.",
    stack: [
      "React Native",
      "WebRTC",
      "WebSockets",
      "Redux",
      "Firebase",
    ],
    capabilities: [
      "Video consultation",
      "Realtime messaging",
      "Patient journeys",
      "Payments",
    ],
    contributions: [
      "Built the React Native telehealth client with WebRTC and WebSockets at its core.",
      "Delivered consultation, chat, content, and payment experiences for patient workflows.",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/ie/app/all-cures/id6748640097",
      },
      { label: "Live site", href: "https://www.all-cures.com/" },
    ],
    image: "/images/allcures.png",
    imageAlt: "All Cures telehealth application screens",
  },
];

export const experience = [
  {
    company: "Zaptric Mobility",
    role: "Lead Full Stack Engineer",
    dates: "Aug 2024 – Present",
    location: "Gurugram",
    bullets: [
      "Own mobile, web, and backend delivery for an EV mobility platform used across driver and operations workflows.",
      "Build AI-assisted operations, OCPI charging, payments, fleet tooling, and the systems connecting them.",
    ],
  },
  {
    company: "Etherium Technologies",
    role: "Software Developer",
    dates: "Jul 2023 – Aug 2024",
    location: "Jammu",
    bullets: [
      "Built real-time telehealth experiences in React Native using WebRTC, WebSockets, Redux, and Firebase.",
      "Improved rendering, network performance, and release reliability through targeted optimization and Dockerized deployments.",
    ],
  },
  {
    company: "Ministry of Education, Govt. of India",
    role: "Computer Science Teacher",
    dates: "Apr 2022 – Jul 2023",
    location: "Jammu",
    bullets: [
      "Contributed UI/UX for a React Native school-attendance app and designed a project-based Python curriculum for high school students.",
    ],
  },
] as const;

export const education = {
  degree: "B.E. in Computer Science",
  school: "Government College of Engineering and Technology",
  dates: "2018 – 2022",
  detail: "GPA 8.0/10",
} as const;

export const skills = [
  {
    number: "01",
    title: "Product engineering",
    description:
      "Mobile and web products designed as one coherent system—from the first interaction to release.",
    items: ["React Native", "React", "Next.js", "TypeScript", "Redux"],
  },
  {
    number: "02",
    title: "AI-native systems",
    description:
      "Production workflows that give models useful context, trusted tools, and clear operational boundaries.",
    items: ["Gemini", "MCP", "AI agents", "Workflow automation"],
  },
  {
    number: "03",
    title: "Backend & platform",
    description:
      "Realtime services, data, payments, and cloud infrastructure built to support products in motion.",
    items: [
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "WebRTC",
      "AWS",
      "Docker",
    ],
  },
] as const;
