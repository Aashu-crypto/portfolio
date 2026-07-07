"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const projects = [
  {
    title: "Zaptric Mobility",
    description:
      "Full-stack EV mobility platform — React Native driver & supervisor apps, React admin dashboard, and Node.js/Prisma backend. WhatsApp-based EV charging via OCPI, RBAC fleet management, and a production AI agent (Gemini + MCP).",
    link: "https://zaptric.in",
    image: "/images/zaptric.png",
    tags: ["React Native", "React", "Node.js", "PostgreSQL", "OCPI"],
    live: true,
  },
  {
    title: "All Cures",
    description:
      "Real-time telehealth platform with live video consultations. Built with React Native, WebRTC, and WebSockets. Improved app performance by 20% and Core Web Vitals by 200%.",
    link: "https://apps.apple.com/us/app/all-cures/id1659590351",
    image: "/images/allcures.png",
    tags: ["React Native", "WebRTC", "Redux"],
    live: true,
  },
  {
    title: "Saathi (Elderly Care)",
    description:
      "Elderly care platform with a React admin dashboard and React Native mobile app. Secure payments, authentication, and real-time care management for families.",
    link: "https://play.google.com/store/apps/details?id=com.aashutoshgandotra14.saathi&hl=en",
    image: "/images/saathi.png",
    tags: ["React Native", "React", "Firebase"],
    live: true,
  },
  {
    title: "Igris Ride-Booking",
    description:
      "Customer ride-booking app with real-time tracking and payments. Built the React Native app and React admin dashboard for managing users, rides, and driver earnings.",
    link: "#",
    image: "/images/customerapp.png",
    tags: ["React Native", "React", "Node.js", "Docker"],
    live: true,
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-jetbrains mb-4 text-center">
          Projects
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Production apps I&apos;ve built and shipped — from EV mobility to
          healthcare.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-green-400/40 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {project.live && (
                  <span className="absolute top-3 right-3 text-xs bg-green-500/20 text-green-400 border border-green-400/30 px-2 py-1 rounded-full">
                    Live
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white font-jetbrains mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-700/80 text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium"
                  >
                    <Globe className="w-4 h-4" />
                    View project
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
