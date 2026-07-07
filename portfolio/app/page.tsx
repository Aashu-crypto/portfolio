import "./globals.css";
import { Zap, Building, GraduationCap, MapPin, Calendar } from "lucide-react";

import Form from "@/components/Form";
import Hero from "@/components/Hero";
import TechSkills from "@/components/TechSkills";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const experiences = [
    {
      company: "Zaptric Mobility",
      role: "Lead Full Stack Engineer",
      duration: "Aug 2024 – Present",
      location: "Gurgaon, India",
      icon: <Zap className="w-5 h-5" />,
      bullets: [
        "Sole engineer owning architecture and end-to-end delivery of a full-stack EV mobility platform (React Native apps, React admin, Node.js/Prisma backend).",
        "Built WhatsApp-based EV charging with OCPI integration for station discovery, session billing, and tariff management.",
        "Shipped a production AI agent (Google Gemini + MCP) for supervisor workflows, driver support, and slot allocation.",
      ],
    },
    {
      company: "Ethereum Technologies",
      role: "Software Developer",
      duration: "Jul 2023 – Aug 2024",
      location: "Jammu, India",
      icon: <Building className="w-5 h-5" />,
      bullets: [
        "Built real-time telehealth platforms (All Cures, Saathi) with React Native, WebRTC, and WebSockets.",
        "Improved app performance by 20% and Core Web Vitals by 200% through rendering and network optimizations.",
        "Built Igris ride-booking app and admin dashboard; deployed with Docker for faster, more reliable releases.",
      ],
    },
    {
      company: "Ministry of Education, Government of India",
      role: "Computer Science Teacher",
      duration: "Apr 2022 – Jul 2023",
      location: "Jammu, India",
      icon: <GraduationCap className="w-5 h-5" />,
      bullets: [
        "Designed UI/UX for JK Attendance SED, a React Native school attendance app.",
        "Built a Python coding curriculum for high school students with project-based learning.",
      ],
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Aashutosh Gandotra",
      jobTitle: "Full Stack Engineer",
      description:
        "Full Stack Engineer with 4+ years experience building production web and mobile platforms with React, React Native, and Node.js.",
      url: "https://aashutoshgandotra.dev",
      sameAs: [
        "https://www.linkedin.com/in/aashutosh-gandotra/",
        "https://github.com/Aashu-crypto",
        "https://x.com/AashutoshGando3",
      ],
      email: "ashugandotra14@gmail.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex flex-col font-sans">
        <Hero />
        <AboutMe />

        <section
          className="py-16 px-4"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className="max-w-3xl mx-auto">
            <h2
              id="experience-heading"
              className="text-3xl md:text-4xl font-bold text-white font-jetbrains mb-10 text-center"
            >
              Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <article
                  key={exp.company}
                  className="border border-gray-700 rounded-xl p-6 bg-gray-800/40 hover:border-green-400/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="text-green-400 p-2 bg-gray-700 rounded-lg shrink-0">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white font-jetbrains">
                          {exp.role}
                        </h3>
                        <p className="text-green-400 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm flex items-center gap-1 sm:shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </p>
                  </div>

                  <ul className="space-y-2 pl-1">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-gray-300 text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-green-400 shrink-0 mt-1.5">
                          •
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Projects />
        <TechSkills />
        <Form />
        <Footer />
      </main>
    </>
  );
}
