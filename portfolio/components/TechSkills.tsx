"use client";
import { motion } from "framer-motion";

const skills = [
  "React",
  "React Native",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "AWS",
  "Docker",
  "WebRTC",
  "WebSockets",
  "Tailwind CSS",
  "Redux",
  "Firebase",
  "Mapbox",
  "Git",
];

const TechSkills = () => {
  return (
    <section className="py-16 px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-jetbrains mb-8 text-center">
          Skills
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg text-gray-200 text-sm font-medium hover:border-green-400/50 transition-colors"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechSkills;
