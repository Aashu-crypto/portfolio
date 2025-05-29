"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiFirebase,
  SiSocketdotio,
  SiRedux,
  SiTailwindcss,
  SiDocker,
  SiAmazonaws,
  SiGit,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiGithub,
  SiVisualstudio,
  SiFigma,
  SiWebrtc,
  SiRedis,
  SiLinux,
  SiUbuntu,
  SiNginx,
  SiJest,
  SiCypress,
  SiStorybook,
  SiGraphql,
  SiApollographql,
  SiStripe,
  SiCloudflare,
  SiNetlify,
  SiHeroku,
  SiDigitalocean,
  SiPostman,
  SiSlack,
  SiNotion,
  SiTrello,
  SiJira,
  SiConfluence,
} from "react-icons/si";
import {
  IconBrandReactNative,
  IconBrandFramerMotion,
  IconBrandSupabase,
  IconBrandOpenai,
  IconBrandDiscord,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBrandZoom,
  IconBrandSkype,
  IconTerminal2,
  IconCode,
  IconDatabase,
  IconCloud,
  IconDeviceMobile,
  IconWorld,
  IconBrandAndroid,
  IconBrandApple,
  IconApi,
  IconServer,
  IconBrandDocker,
} from "@tabler/icons-react";

const TechSkills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = {
    all: "All Technologies",
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Mobile",
    database: "Database",
    devops: "DevOps & Cloud",
    tools: "Tools & Others",
  };

  const skills = [
    // Frontend
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      category: "frontend",
      level: 95,
      description: "ES6+, Modern JS, Async/Await",
    },

    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
      category: "frontend",
      level: 90,
      description: "SSR, SSG, API Routes, App Router",
    },
    {
      name: "React Native",
      icon: IconBrandReactNative,
      color: "#61DAFB",
      category: "mobile",
      level: 95,
      description: "Cross-platform, Native Modules",
    },


    // Backend
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
      category: "backend",
      level: 90,
      description: "Express, Fastify, Microservices",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#000000",
      category: "backend",
      level: 90,
      description: "REST APIs, Middleware, Security",
    },
    {
      name: "Python",
      icon: SiPython,
      color: "#3776AB",
      category: "backend",
      level: 80,
      description: "-",
    },

    // Database
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#336791",
      category: "database",
      level: 85,
      description: "Advanced Queries, Indexing, JSONB",
    },

    {
      name: "Firebase",
      icon: SiFirebase,
      color: "#FFCA28",
      category: "database",
      level: 85,
      description: "Firestore, Auth, Real-time DB",
    },

    // DevOps & Cloud
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
      category: "devops",
      level: 85,
      description: "Containerization, Multi-stage",
    },

   

    {
      name: "OpenAI",
      icon: IconBrandOpenai,
      color: "#412991",
      category: "tools",
      level: 80,
      description: "GPT Integration, AI APIs",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20  text-white relative overflow-hidden" id="skills">
      {/* Background Effects */}
      {/* <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div> */}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-jetbrains">
            <IconCode
              className="inline-block mr-4 mb-2 text-green-400"
              size={60}
            />
            Tech{" "}
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies and frameworks I use to build scalable,
            high-performance applications that solve real-world problems.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.entries(skillCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                activeCategory === key
                  ? "bg-gradient-to-r from-green-500 to-blue-600 border-transparent text-white shadow-lg shadow-green-500/30"
                  : "border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-400/20 hover:scale-105">
                {/* Skill Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className="p-4 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${skill.color}15` }}
                  >
                    <skill.icon
                      size={40}
                      style={{ color: skill.color }}
                      className="drop-shadow-lg"
                    />
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-center mb-2 font-jetbrains group-hover:text-green-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Skill Level Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>

                {/* Skill Description */}
                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  {skill.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { label: "Technologies", value: "40+", icon: IconCode },
            { label: "Years Experience", value: "3+", icon: IconTerminal2 },
            { label: "Projects Built", value: "50+", icon: IconWorld },
            { label: "Lines of Code", value: "100K+", icon: IconDatabase },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300">
                <stat.icon className="mx-auto mb-3 text-green-400" size={32} />
                <div className="text-3xl font-bold text-white mb-2 font-jetbrains">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default TechSkills;
