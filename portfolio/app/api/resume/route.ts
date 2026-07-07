import { NextResponse } from "next/server";

export async function GET() {
  const resumeData = {
    personalInfo: {
      name: "Aashutosh Gandotra",
      title: "Full Stack Engineer",
      location: "Jammu, India",
      phone: "+91-8825024304",
      email: "ashugandotra14@gmail.com",
      website: "https://aashutoshgandotra.dev",
      github: "https://github.com/Aashu-crypto",
      linkedin: "https://linkedin.com/in/aashutosh-gandotra",
    },
    summary:
      "Full Stack Engineer with 4+ years of experience building and shipping production web and mobile platforms end-to-end — including AI agent services, React Native, Node.js, and TypeScript products — real-time systems (WebRTC, WebSockets), and cloud-native backends (AWS, Docker, PostgreSQL, Redis) — across HealthTech, Ride-Hailing, and EV Mobility.",
    experience: [
      {
        company: "Zaptric Mobility",
        role: "Lead Full Stack Engineer",
        duration: "Aug 2024 – Present",
        location: "Gurgaon, India",
        achievements: [
          "Sole/lead engineer owning architecture and end-to-end delivery of a full-stack EV mobility platform.",
          "Built the React/TypeScript admin dashboard, two React Native apps (driver, supervisor), and the Node.js/Prisma backend.",
          "Engineered a WhatsApp-based EV charging flow (Node.js, Express, Prisma, PostgreSQL) letting users scan station QR codes and pay for charging sessions entirely through chat.",
          "Integrated OCPI (Open Charge Point Interface) as the eMSP — station discovery, charging sessions, CDR billing, and tariff management for interoperability with third-party charge point operators (CPOs).",
          "Built a production AI agent using Google Gemini and Model Context Protocol (MCP) to automate supervisor workflows, driver support, escalation handling, and slot allocation.",
          "Developed a role-based access control (RBAC) fleet-management dashboard (React, TypeScript, Radix UI, Mapbox) covering vehicle lifecycle, maintenance audits, driver documentation, wallets, and payments.",
          "Implemented a server-driven UI (SDUI) architecture in React Native and integrated real-time GPS navigation, biometric face-detection check-in (ML Kit), and payment gateways (Cashfree, Zoho) into production driver apps.",
        ],
      },
      {
        company: "Ethereum Technologies",
        role: "Software Developer",
        duration: "Jul 2023 – Aug 2024",
        location: "Jammu, India",
        achievements: [
          "Built real-time telehealth platforms (All Cures, Saathi) enabling live video consultations using WebRTC, WebSockets, and React.",
          "Improved application performance by 20% and Core Web Vitals by 200% through rendering and network optimizations.",
          "Implemented containerized deployments with Docker, reducing deployment time and improving release reliability.",
        ],
      },
      {
        company: "Ministry of Education, Govt. of India",
        role: "Computer Science Teacher",
        duration: "Apr 2022 – Jul 2023",
        location: "Jammu, India",
        achievements: [
          "Designed UI/UX for a React Native school-attendance app and built a Python coding curriculum for high schoolers.",
        ],
      },
    ],
    education: [
      {
        institution: "Government College of Engineering and Technology",
        degree: "Bachelor of Engineering (B.E.) in Computer Science",
        duration: "August 2018 – October 2022",
        gpa: "8.0",
      },
    ],
    projects: [
      {
        name: "Zaptric Mobility – EV Platform (Driver App, Admin Dashboard, AI Agent)",
        description:
          "Sole/lead engineer of a full-stack EV mobility platform: React/TypeScript admin dashboard, React Native driver & supervisor apps, WhatsApp-based EV charging flow, OCPI eMSP integration, RBAC fleet management, and a Gemini/MCP-powered AI agent.",
        technologies: [
          "React Native",
          "React",
          "TypeScript",
          "Node.js",
          "Prisma",
          "PostgreSQL",
          "Mapbox",
          "OCPI",
          "Google Gemini",
          "MCP",
          "Cashfree",
        ],
        links: {
          website: "https://zaptric.in",
          playStore:
            "https://play.google.com/store/apps/details?id=com.zaptric.pilotmain",
        },
      },
      {
        name: "All Cures",
        description:
          "Built a real-time telehealth platform enabling live video consultations using React Native, WebRTC, WebSockets, and Redux. Achieved 20% faster performance and 200% improvement in core web vitals.",
        technologies: [
          "React Native",
          "WebRTC",
          "WebSockets",
          "Redux",
          "Firebase",
        ],
        links: {
          appStore:
            "https://play.google.com/store/apps/details?id=com.allcures&hl=en&gl=US&pli=1",
        },
      },
      {
        name: "Saathi (Elderly Care)",
        description:
          "Built the React admin dashboard and React Native mobile application with secure payments and user authentication.",
        technologies: [
          "React Native",
          "React",
          "Firebase",
          "Payment Integration",
        ],
        links: {
          playStore:
            "https://play.google.com/store/apps/details?id=com.aashutoshgandotra14.saathi&hl=en",
        },
      },
      {
        name: "AI Partner Match Up",
        description:
          "AI-powered matchmaking app in Next.js, powered by OpenAI APIs and Qdrant DB. Captures user context and matches based on profile compatibility.",
        technologies: ["Next.js", "OpenAI APIs", "Qdrant DB", "AI/ML"],
        status: "In Progress",
      },
    ],
    skills: {
      languages: ["JavaScript", "TypeScript", "Python"],
      frontend: ["React Native", "React", "Next.js", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Prisma", "WebSockets", "WebRTC"],
      databases: ["PostgreSQL", "Redis", "Firebase"],
      cloud: ["AWS", "Docker"],
      ai: ["Google Gemini API", "LLM Agent Development", "Model Context Protocol"],
      tools: [
        "Git",
        "CI/CD",
        "Mapbox",
        "RBAC",
        "Server-Driven UI (SDUI)",
        "OCPI (eMSP)",
        "Payment Gateways (Cashfree, Zoho)",
      ],
    },
    certifications: [
      {
        title: "Full Stack Web Development",
        issuer: "100xDev",
        date: "April 2024",
      },
      {
        title: "React Native",
        issuer: "Meta",
        date: "August 2023",
      },
      {
        title: "React",
        issuer: "Meta",
        date: "July 2023",
      },
      {
        title: "Data Structures & Algorithms",
        issuer: "Udemy",
        date: "August 2022",
      },
    ],
  };

  return NextResponse.json(resumeData, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
