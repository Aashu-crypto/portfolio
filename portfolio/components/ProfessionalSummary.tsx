"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Server,
  Award,
  Users,
  TrendingUp,
  Zap,
  Globe,
  CheckCircle,
  Star,
  Target,
  Briefcase,
} from "lucide-react";

const ProfessionalSummary = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "3+ Years Experience",
      description: "Full-stack mobile and web development",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30",
    },
    {
      icon: Smartphone,
      title: "10+ Mobile Apps",
      description: "Published on Google Play Store",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/30",
    },
    {
      icon: TrendingUp,
      title: "200% Performance",
      description: "Improvement in app optimization",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30",
    },
    {
      icon: Users,
      title: "100K+ Users",
      description: "Across deployed applications",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/30",
    },
  ];

  const coreSkills = [
    { name: "React Native", level: 95, color: "bg-cyan-500" },
    { name: "TypeScript", level: 90, color: "bg-blue-500" },
    { name: "Node.js", level: 90, color: "bg-green-500" },
    { name: "Next.js", level: 90, color: "bg-gray-300" },
    { name: "PostgreSQL", level: 85, color: "bg-blue-600" },
    { name: "AWS", level: 80, color: "bg-orange-500" },
  ];

  const achievements = [
    "Built real-time video consultation platform with WebRTC",
    "Developed complete ride-booking ecosystem from scratch",
    "Optimized mobile app performance by 200%",
    "Deployed scalable applications on AWS with Docker",
    "Integrated secure payment systems and authentication",
    "Led development of government-scale attendance application",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Developer Icons */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-400/10 text-3xl"
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1000),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 800),
            opacity: 0,
          }}
          animate={{
            y: [null, -200],
            opacity: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 8,
          }}
        >
          {["⚡", "🚀", "💻", "🔥", "⭐", "🎯", "💡", "🛠️"][i]}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white font-jetbrains"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Summary
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experienced Full-Stack Mobile Developer specializing in React
            Native, TypeScript, and Node.js. Proven track record of building
            scalable applications with real-time features and cloud deployment.
          </motion.p>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className={`bg-white/5 backdrop-blur-lg border ${highlight.borderColor} rounded-2xl p-6 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`w-16 h-16 ${highlight.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <highlight.icon className={`w-8 h-8 ${highlight.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-jetbrains">
                {highlight.title}
              </h3>
              <p className="text-gray-300">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills and Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Core Skills */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white font-jetbrains">
                Core Skills
              </h3>
            </div>

            <div className="space-y-6">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-200">
                      {skill.name}
                    </span>
                    <span className="text-gray-400 font-mono text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 1.4 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white font-jetbrains">
                Key Achievements
              </h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 font-jetbrains">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let&apos;s discuss how I can help bring your next project to life
              with cutting-edge technology and proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Target className="w-5 h-5" />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Globe className="w-5 h-5" />
                View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
