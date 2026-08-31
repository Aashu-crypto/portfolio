export const site = {
  name: "Aashutosh Gandotra",
  role: "Lead Full Stack Engineer",
  title:
    "React Native and Node.js specialist with 4+ years delivering production mobile platforms, real-time systems, and cloud backends.",
  location: "Gurugram, India",
  remote: "Open to remote",
  email: "ashugandotra14@gmail.com",
  resume: "/Aashutosh_Resume.pdf",
  github: "https://github.com/Aashu-crypto",
  linkedin: "https://www.linkedin.com/in/aashutosh-gandotra/",
  url: "https://www.aashutoshgandotra.com",
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
      "Delivered video consultation, chat, content, and payment experiences for patient workflows.",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/ie/app/all-cures/id6748640097",
      },
      { label: "Website", href: "https://www.all-cures.com/" },
    ],
  },
];

export const experience = [
  {
    company: "Zaptric Mobility",
    role: "Lead Full Stack Engineer",
    dates: "Aug 2024 – Present",
    location: "Gurugram",
    bullets: [
      "Own end-to-end delivery of two React Native apps, a React admin dashboard, and Node.js/Prisma services for EV mobility operations.",
      "Shipped OCPI charging, payments, fleet workflows, and a Gemini/MCP operations agent.",
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
