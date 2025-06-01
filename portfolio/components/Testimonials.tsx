"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  User,
  Building,
  Award,
  Heart,
  MessageCircle,
  Repeat2,
  MoreHorizontal,
} from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "CTO",
      company: "All Cures Healthcare",
      username: "@rajeshkumar_cto",
      image: "/images/testimonial-1.jpg",
      rating: 5,
      testimonial:
        "Aashutosh delivered exceptional work on our healthcare platform. His expertise in React Native and real-time features like WebRTC helped us create a robust doctor consultation app. The 200% performance improvement he achieved was remarkable. 🚀",
      project: "Healthcare Consultation Platform",
      technologies: ["React Native", "WebRTC", "Redux", "Firebase"],
      likes: 156,
      retweets: 43,
      replies: 12,
      time: "2h",
      verified: true,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Product Manager",
      company: "Igris Technologies",
      username: "@priya_pm",
      image: "/images/testimonial-2.jpg",
      rating: 5,
      testimonial:
        "Working with Aashutosh on our ride-booking ecosystem was a game-changer. He built the entire platform from scratch - mobile apps, backend, and admin dashboard. His attention to detail and ability to handle complex real-time features made our vision a reality. 💯",
      project: "Complete Ride Booking Ecosystem",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      likes: 203,
      retweets: 67,
      replies: 28,
      time: "4h",
      verified: true,
    },
    {
      id: 3,
      name: "Amit Singh",
      role: "Senior Developer",
      company: "Ethereum Technologies",
      username: "@amit_dev",
      image: "/images/testimonial-3.jpg",
      rating: 5,
      testimonial:
        "Aashutosh is an outstanding developer with deep knowledge of mobile and web technologies. His work on the Saathi elderly care app showcased his ability to create user-friendly interfaces and secure payment integrations. A valuable team member! 👨‍💻",
      project: "Elderly Care Mobile Application",
      technologies: ["React Native", "React", "Payment Integration"],
      likes: 124,
      retweets: 31,
      replies: 15,
      time: "6h",
      verified: false,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Tech Lead",
      company: "Ministry of Education",
      username: "@sarah_govtech",
      image: "/images/testimonial-4.jpg",
      rating: 5,
      testimonial:
        "During his tenure as a Computer Science teacher and contributor to the JK Attendance app, Aashutosh demonstrated excellent technical skills and leadership. His ability to work on government-scale applications while mentoring students shows his versatility. 🎯",
      project: "JK Attendance SED Application",
      technologies: ["React Native", "Government Systems", "Education Tech"],
      likes: 189,
      retweets: 52,
      replies: 21,
      time: "8h",
      verified: true,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Social Icons */}
      {[...Array(6)].map((_, i) => (
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
          {["💬", "❤️", "🔄", "⭐", "👍", "🚀"][i]}
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
            Client{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            What clients and colleagues say about working with me
          </motion.p>
        </motion.div>

        {/* Twitter-like Testimonial Cards */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl"
            >
              {/* Twitter Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-white">
                        {currentData.name}
                      </h4>
                      {currentData.verified && (
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">
                      {currentData.role} at {currentData.company}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {currentData.username}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-sm">{currentData.time}</span>
                  <MoreHorizontal className="w-4 h-4" />
                </div>
              </div>

              {/* Tweet Content */}
              <div className="mb-4">
                <p className="text-gray-200 text-lg leading-relaxed mb-4">
                  {currentData.testimonial}
                </p>

                {/* Project Tag */}
                <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-3 mb-4">
                  <p className="text-blue-400 font-medium text-sm mb-2">
                    📋 Project: {currentData.project}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-gray-400 text-sm ml-2">
                    {currentData.rating}.0/5.0
                  </span>
                </div>
              </div>

              {/* Twitter Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{currentData.replies}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group">
                  <Repeat2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{currentData.retweets}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors group">
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{currentData.likes}</span>
                </button>
                <button className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-300" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-blue-500 w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {[
            {
              icon: Award,
              number: "15+",
              label: "Successful Projects",
              color: "text-blue-400",
              bgColor: "bg-blue-400/10",
              borderColor: "border-blue-400/30",
            },
            {
              icon: Heart,
              number: "100%",
              label: "Client Satisfaction",
              color: "text-red-400",
              bgColor: "bg-red-400/10",
              borderColor: "border-red-400/30",
            },
            {
              icon: Star,
              number: "5.0",
              label: "Average Rating",
              color: "text-yellow-400",
              bgColor: "bg-yellow-400/10",
              borderColor: "border-yellow-400/30",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`text-center p-6 bg-white/5 backdrop-blur-lg border ${stat.borderColor} rounded-2xl shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2 font-jetbrains">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
