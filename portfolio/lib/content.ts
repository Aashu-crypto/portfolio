export const site = {
  name: "Aashutosh Gandotra",
  role: "Lead Full Stack Engineer",
  title:
    "React Native, Node.js, TypeScript — 4+ years shipping mobile-led platforms end to end.",
  location: "Gurugram, India",
  remote: "Open to remote",
  email: "ashugandotra14@gmail.com",
  resume: "/Aashutosh_Resume.pdf",
  github: "https://github.com/Aashu-crypto",
  linkedin: "https://www.linkedin.com/in/aashutosh-gandotra/",
  url: "https://aashutoshgandotra.dev",
} as const;

export type ProjectLink = { label: string; href: string };

export type Project = {
  name: string;
  problem: string;
  stack: string;
  bullets: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    name: "Zaptric Mobility",
    problem:
      "One stack for EV driver apps, fleet ops, charging, and payments.",
    stack: "React Native, React, Node.js, Prisma, PostgreSQL, OCPI, Gemini/MCP",
    bullets: [
      "Owned end-to-end platform: React Native driver/supervisor apps, React admin, Node.js/Prisma backend.",
      "Shipped WhatsApp EV charging + OCPI eMSP, and a production Gemini/MCP agent for ops workflows.",
    ],
    links: [
      { label: "Live", href: "https://zaptric.in/" },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.zaptric.pilotmain",
      },
      {
        label: "Code",
        href: "https://github.com/Aashu-crypto/react-native-zaptric-ui",
      },
    ],
  },
  {
    name: "All Cures",
    problem: "Live video consults for patients and clinicians.",
    stack: "React Native, WebRTC, WebSockets, Redux, Firebase",
    bullets: [
      "Built the React Native telehealth client with WebRTC/WebSockets.",
      "~20% faster app work; ~200% Core Web Vitals improvement.",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/be/app/all-cures/id1659590351",
      },
      { label: "Website", href: "https://www.all-cures.com/" },
    ],
  },
  {
    name: "Saathi",
    problem: "Mobile + admin for elderly care with auth and payments.",
    stack: "React Native, React, Firebase",
    bullets: [
      "Built React Native app and React admin for care management.",
      "Shipped authentication and payment flows for family users.",
    ],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.aashutoshgandotra14.saathi&hl=en",
      },
      { label: "Admin", href: "https://saath-web.vercel.app" },
      { label: "Code", href: "https://github.com/Aashu-crypto/Saathi" },
    ],
  },
];

export const experience = [
  {
    company: "Zaptric Mobility",
    role: "Lead Full Stack Engineer",
    dates: "Aug 2024 – Present",
    location: "Gurugram",
    summary:
      "Sole/lead engineer for EV mobility — React Native apps, React admin, Node/Prisma, OCPI charging, Gemini/MCP agent.",
  },
  {
    company: "Etherium Technologies",
    role: "Software Developer",
    dates: "Jul 2023 – Aug 2024",
    location: "Jammu",
    summary:
      "Telehealth apps (All Cures, Saathi) with React Native + WebRTC; ~20% perf / ~200% CWV gains; Docker releases.",
  },
  {
    company: "Ministry of Education, Govt. of India",
    role: "Computer Science Teacher",
    dates: "Apr 2022 – Jul 2023",
    location: "Jammu",
    summary:
      "UI/UX for a React Native school attendance app; Python curriculum for high school students.",
  },
] as const;

export const skills = [
  {
    label: "Languages",
    items: "JavaScript, TypeScript, Python",
  },
  {
    label: "Mobile & frontend",
    items: "React Native, React, Next.js, Redux, Tailwind",
  },
  {
    label: "Backend",
    items: "Node.js, Express, Prisma, REST, WebSockets, WebRTC",
  },
  {
    label: "Data & cloud",
    items: "PostgreSQL, Redis, Firebase, AWS, Docker",
  },
  {
    label: "AI & tooling",
    items: "Gemini, MCP, Mapbox, OCPI, SDUI, RBAC, Cashfree, Zoho",
  },
] as const;
