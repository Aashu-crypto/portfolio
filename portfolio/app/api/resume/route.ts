import { NextResponse } from "next/server";

export async function GET() {
  const resumeData = {
    personalInfo: {
      name: "Aashutosh Gandotra",
      title: "Full-Stack Mobile Developer",
      location: "Jammu, India",
      phone: "+91-8825024304",
      email: "ashugandotra14@gmail.com",
      website: "https://aashutoshgandotra.dev",
      github: "https://github.com/Aashu-crypto",
      linkedin: "https://linkedin.com/in/aashutosh-gandotra",
    },
    summary:
      "Full-Stack Mobile Developer with 3+ years of experience building scalable React Native apps, web apps using React and Next JS and backend systems using Node.js, Express, PostgreSQL, and Prisma. Proficient in modern JavaScript/TypeScript, real-time data features, and cloud deployment. Strong focus on performance, clean architecture, and end-to-end product delivery.",
    experience: [
      {
        company: "Ethereum Technologies",
        role: "React Native & Full Stack Developer",
        duration: "Jul 2023 – Present",
        location: "Jammu, India",
        achievements: [
          "Developed and optimized mobile apps for All Cures (healthcare) and Saathi (elderly care) using React Native, Expo, Redux – achieving a 200% boost in app performance.",
          "Implemented real-time chat and video calls via WebRTC, Firebase, and WebSockets, enhancing user engagement.",
          "Built and deployed Igris's customer ride-booking app, enabling real-time ride booking and payments.",
          "Designed and built Igris's Admin Dashboard using React + shadcn UI to manage users, rides, and driver earnings.",
          "Integrated push notifications, geolocation, and secure authentication using Firebase and React Native libraries.",
        ],
      },
      {
        company: "Ministry of Education, Govt. of India",
        role: "Computer Science Teacher",
        duration: "Apr 2022 – Jul 2023",
        location: "Jammu, India",
        achievements: [
          "Contributed to the JK Attendance SED App frontend using React Native.",
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
        name: "All Cures",
        description:
          "Developed a real-time doctor consultation & engagement platform using WebRTC, WebSockets, Redux. Achieved 20% faster performance and 200% improvement in core web vitals.",
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
        name: "Igris – Driver App, Customer App & Admin Dashboard",
        description:
          "Architected and developed a complete ride-booking ecosystem from the ground up with React Native apps, scalable backend, and admin dashboard.",
        technologies: [
          "React Native",
          "Node.js",
          "Express",
          "Prisma",
          "PostgreSQL",
          "WebSockets",
          "Redis",
          "React",
          "shadcn UI",
          "Docker",
          "AWS",
        ],
        links: {
          github: "https://github.com/Aashu-crypto/Driver-app",
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
      databases: ["PostgreSQL", "Firebase", "Redis"],
      tools: ["Docker", "Git", "VS Code", "AWS (EC2, S3)"],
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
