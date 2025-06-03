"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Globe, Github, Play, Zap, Mail } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "All Cures",
      description:
        "Developed a real-time doctor consultation & engagement platform using WebRTC, WebSockets, Redux. Achieved 20% faster performance and 200% improvement in core web vitals. Features include video consultations, chat, community articles, and secure payment integration (CCAvenue).",
      link: "https://apps.apple.com/us/app/all-cures/id1659590351",
      image: "/images/allcures.png",
      live: true,
    },
    {
      number: "02",
      title: "Igris - Customer App",
      description:
        "Developed the customer-facing mobile application for the Igris ride-booking platform. Built with React Native, featuring real-time ride tracking, Google Maps integration, secure payment processing, and seamless ride booking experience. Integrated with a scalable backend using WebSockets for real-time updates and Redis for performance optimization.",
      link: "https://github.com/Aashu-crypto/Driver-app",
      image: "/images/customerapp.png",
      live: true,
    },
    {
      number: "03",
      title: "Igris Pilot - Driver App",
      description:
        "Created the driver application for the Igris platform, enabling drivers to manage rides, track earnings, and navigate efficiently. Built with React Native, featuring real-time ride requests, optimized route navigation, earnings dashboard, and secure payment integration. Implemented advanced features like offline mode and background location tracking.",
      link: "https://github.com/Aashu-crypto/Driver-app",
      image: "/images/driverapp.png",
      live: true,
    },
    {
      number: "04",
      title: "Igris Admin Dashboard",
      description:
        "Developed a comprehensive admin dashboard for managing the Igris ride-booking platform. Built with React and shadcn UI, featuring real-time analytics, driver management, ride monitoring, and business operations tools. Implemented secure authentication, role-based access control, and Docker containerization for seamless AWS deployment.",
      link: "https://github.com/Aashu-crypto/Driver-app",
      image: "/images/dashboard.png",
      live: true,
    },
    {
      number: "05",
      title: "Saathi (Elderly Care)",
      description:
        "Built the React admin dashboard and React Native mobile application for elderly care platform. Integrated secure payments and user authentication, ensuring a seamless and secure user experience. Features comprehensive care management with real-time monitoring and family connectivity.",
      link: "https://play.google.com/store/apps/details?id=com.aashutoshgandotra14.saathi&hl=en",
      image: "/images/saathi.png",
      live: true,
    },
    {
      number: "06",
      title: "AI Partner Match Up",
      description:
        "AI-powered matchmaking app built with Next.js, powered by OpenAI APIs and Qdrant DB. Captures user context, asks dynamic follow-up questions, and matches based on profile compatibility. Currently in development with advanced AI algorithms for personality matching.",
      link: "#",
      image: "/images/AiMatchUp.png",
      live: false,
    },
  
    {
      number: "08",
      title: "JK Attendance SED",
      description:
        "Contributed to the UI/UX design of the JK Attendance app for the Ministry of Education. Helped monitor attendance with React Native, gaining expertise in government-scale application development.",
      link: "https://play.google.com/store/apps/details?id=com.attendance.dsek&hl=en_IN",
      image: "/images/attandance.png",
      live: true,
    },
  ];

  return (
    <div className=" py-10 relative overflow-hidden" id="projects">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Floating Project Icons */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/10 text-3xl"
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
              y: [null, -250],
              opacity: [0, 1, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          >
            {
              [
                "🚀",
                "💻",
                "📱",
                "⚡",
                "🔥",
                "💡",
                "🎯",
                "🌟",
                "🛠️",
                "📊",
                "🎨",
                "🔧",
              ][i]
            }
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 font-jetbrains text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Code className="inline-block mr-4 mb-2 text-green-400" size={60} />
            Featured{" "}
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of innovative applications and systems I&apos;ve built,
            from healthcare platforms to ride-booking ecosystems. Each project
            demonstrates my expertise in modern technologies and problem-solving
            capabilities.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              className="group"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            >
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group/image">
                    {/* Glowing Border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>

                    {/* Image Container */}
                    <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 group-hover:border-green-400/50 transition-all duration-500">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {project.live ? (
                                <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-green-400/30">
                                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                  <span className="text-green-400 text-sm font-medium">
                                    Live
                                  </span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-yellow-400/30">
                                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                  <span className="text-yellow-400 text-sm font-medium">
                                    In Development
                                  </span>
                                </div>
                              )}
                            </div>
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Globe className="w-5 h-5 text-white" />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-white font-bold text-lg font-mono">
                        {project.number}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <motion.div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                >
                  {/* Project Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-green-400 to-blue-500 rounded-full"></div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white font-jetbrains group-hover:text-green-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          {project.live ? (
                            <span className="text-green-400 text-sm font-medium">
                              Production Ready
                            </span>
                          ) : (
                            <span className="text-yellow-400 text-sm font-medium">
                              Under Development
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {/* Dynamic tech stack based on project */}
                      {(() => {
                        const techStacks = {
                          "All Cures": [
                            "React Native",
                            "WebRTC",
                            "Redux",
                            "Firebase",
                          ],
                          "Igris - Complete Ride Booking Ecosystem": [
                            "React Native",
                            "Node.js",
                            "PostgreSQL",
                            "Prisma",
                            "Docker",
                            "AWS",
                          ],
                          "Saathi (Elderly Care)": [
                            "React Native",
                            "React",
                            "Firebase",
                            "Node.js",
                          ],
                          "AI Partner Match Up": [
                            "Next.js",
                            "OpenAI",
                            "Qdrant",
                            "TypeScript",
                          ],
                          "GenZ Express": [
                            "React Native",
                            "MongoDB",
                            "Mongoose",
                            "Node.js",
                          ],
                          "JK Attendance SED": [
                            "React Native",
                            "Government APIs",
                          ],
                        };

                        const techs = techStacks[
                          project.title as keyof typeof techStacks
                        ] || ["React", "Node.js", "JavaScript"];

                        return techs.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full text-sm font-medium border border-gray-600 hover:border-green-400/50 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 1.0 + index * 0.2 + techIndex * 0.1,
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ));
                      })()}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {project.live ? (
                        <>
                          <Globe className="w-5 h-5" />
                          View Live
                        </>
                      ) : (
                        <>
                          <Github className="w-5 h-5" />
                          View Code
                        </>
                      )}
                    </motion.a>
                  </div>

                  {/* Project Stats */}
                  {/* <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 font-mono">
                        {project.live ? "100%" : "80%"}
                      </div>
                      <div className="text-gray-400 text-sm">Complete</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 font-mono">
                        {Math.floor(Math.random() * 50) + 20}K
                      </div>
                      <div className="text-gray-400 text-sm">Lines of Code</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 font-mono">
                        {Math.floor(Math.random() * 6) + 2}
                      </div>
                      <div className="text-gray-400 text-sm">Months</div>
                    </div>
                  </div> */}
                </motion.div>
              </div>

              {/* Separator */}
              {index < projects.length - 1 && (
                <motion.div
                  className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 + index * 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-jetbrains">
              Interested in collaborating?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to work on innovative projects that push
              the boundaries of technology and create meaningful impact.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
              Let&apos;s Build Something Amazing
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
