"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Smartphone, Mail, Phone, MapPin, Zap } from "lucide-react";

const AboutMe = () => {
  return (
    <div
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden"
      id="about"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Floating Developer Icons */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/10 text-4xl"
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
            {["⚡", "🚀", "💻", "🔥", "⭐", "🎯", "💡", "🛠️", "📱", "🌟"][i]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center font-jetbrains text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Main Image Container */}
              <div className="relative bg-gray-900 rounded-2xl p-4">
                <Image
                  src="/images/AboutMe.png"
                  alt="About Me"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full"
                />

                {/* Overlay Stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-2xl font-bold text-white">3+</div>
                        <div className="text-xs text-gray-300">Years Exp</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-2xl font-bold text-white">50+</div>
                        <div className="text-xs text-gray-300">Projects</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-2xl font-bold text-white">
                          100K+
                        </div>
                        <div className="text-xs text-gray-300">Lines Code</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tech Stack */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4 shadow-2xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-4 shadow-2xl">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Developer Profile Card */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AG</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-jetbrains">
                    Aashutosh Gandotra
                  </h3>
                  <p className="text-blue-400 font-medium">
                    Full-Stack Mobile Developer
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">
                      Available for hire
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I&apos;m a passionate Full-Stack Mobile Developer with{" "}
                  <span className="text-blue-400 font-semibold">3+ years</span>{" "}
                  of professional experience, specializing in{" "}
                  <span className="text-green-400 font-semibold">
                    React Native
                  </span>{" "}
                  development, modern web technologies, and scalable backend
                  systems.
                </p>

                <p>
                  My expertise spans the entire development lifecycle, from
                  concept to deployment, with a strong focus on
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    performance optimization
                  </span>{" "}
                  and
                  <span className="text-yellow-400 font-semibold">
                    {" "}
                    user experience
                  </span>
                  . I excel in building complex solutions with real-time
                  communication features using WebRTC and WebSockets.
                </p>

                <p>
                  With certifications from{" "}
                  <span className="text-blue-400 font-semibold">Meta</span> in
                  React and React Native, I bring both technical depth and
                  practical experience to every project. I&apos;m passionate
                  about creating innovative mobile applications that solve
                  real-world problems.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold text-blue-400 font-mono mb-2">
                  200%
                </div>
                <div className="text-gray-300 text-sm">Performance Boost</div>
                <div className="text-xs text-gray-400 mt-1">
                  App Optimization
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold text-green-400 font-mono mb-2">
                  95%
                </div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
                <div className="text-xs text-gray-400 mt-1">
                  Project Success
                </div>
              </motion.div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-blue-400" />
                Let&apos;s Connect
              </h4>

              <div className="grid gap-3">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91-8825024304",
                    color: "text-green-400",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "ashugandotra14@gmail.com",
                    color: "text-blue-400",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Jammu, India",
                    color: "text-purple-400",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 group-hover:from-gray-600 group-hover:to-gray-500 transition-all duration-300`}
                    >
                      <contact.icon className={`w-5 h-5 ${contact.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-400 text-sm">
                        {contact.label}
                      </div>
                      <div className="text-white font-mono text-sm">
                        {contact.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <motion.div
              className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Fun Facts
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">☕</span>
                  <span className="text-gray-300">Coffee enthusiast</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌙</span>
                  <span className="text-gray-300">Night owl coder</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎮</span>
                  <span className="text-gray-300">Gaming in free time</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  <span className="text-gray-300">Continuous learner</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
