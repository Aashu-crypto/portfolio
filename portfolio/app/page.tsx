import Image from "next/image";
import "./globals.css";
import {
  Linkedin,
  Twitter,
  Github,
  Smartphone,
  Code,
  Server,
  Database,
  Globe,
  Terminal,
  Zap,
  Palette,
  Cloud,
  GitBranch,
  Building,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Trophy,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";

import Form from "@/components/Form";
import MyGitHub from "@/components/MyGitHub";
import LeetCode from "@/components/LeetCode";
import CodeShowcase from "@/components/CodeShowcase";
import TerminalHero from "@/components/TerminalHero";
import TechSkills from "@/components/TechSkills";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  const experiences = [
    {
      company: "Ethereum Technologies",
      role: "React Native & Full Stack Developer",
      duration: "July 2023 - Present",
      location: "Jammu, India",
      icon: <Building className="w-6 h-6" />,
      details:
        "Developed and optimized mobile apps for All Cures (healthcare) and Saathi (elderly care) using React Native, Expo, Redux – achieving a 200% boost in app performance. Implemented real-time chat and video calls via WebRTC, Firebase, and WebSockets, enhancing user engagement. Built and deployed Igris's customer ride-booking app, enabling real-time ride booking and payments. Designed and built Igris's Admin Dashboard using React + shadcn UI to manage users, rides, and driver earnings. Integrated push notifications, geolocation, and secure authentication using Firebase and React Native libraries.",
    },
    {
      company: "Ministry of Education, Government of India",
      role: "Programmer",
      duration: "April 2022 - July 2023",
      location: "Jammu, India",
      icon: <GraduationCap className="w-6 h-6" />,
      details:
        "Contributed to the JK Attendance SED App frontend using React Native. Designed a Python curriculum for high school students to enhance their technical skills, creativity, and problem-solving abilities. Fostered an environment encouraging technical innovation and collaboration through project-based learning.",
    },
  ];

  const certifications = [
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
  ];

  // Enhanced Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      "@id": "https://aashutoshgandotra.dev/#person",
      name: "Aashutosh Gandotra",
      alternateName: "Aashu Gandotra",
      jobTitle: "Full-Stack Mobile Developer",
      description:
        "Full-Stack Mobile Developer with 3+ years of experience building scalable React Native apps, web apps using React and Next.js, and backend systems using Node.js, Express, PostgreSQL, and Prisma.",
      url: "https://aashutoshgandotra.dev",
      image: "https://aashutoshgandotra.dev/profile-image.jpg",
      sameAs: [
        "https://www.linkedin.com/in/aashutosh-gandotra/",
        "https://github.com/Aashu-crypto",
        "https://x.com/AashutoshGando3",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jammu",
        addressRegion: "Jammu and Kashmir",
        addressCountry: "IN",
      },
      email: "ashugandotra14@gmail.com",
      telephone: "+91-8825024304",
      knowsAbout: [
        {
          "@type": "Thing",
          name: "React Native",
          description: "Mobile app development framework",
        },
        {
          "@type": "Thing",
          name: "React",
          description: "JavaScript library for building user interfaces",
        },
        {
          "@type": "Thing",
          name: "Next.js",
          description: "React framework for production",
        },
        {
          "@type": "Thing",
          name: "Node.js",
          description: "JavaScript runtime",
        },
        {
          "@type": "Thing",
          name: "TypeScript",
          description: "Typed superset of JavaScript",
        },
        {
          "@type": "Thing",
          name: "PostgreSQL",
          description: "Relational database",
        },
        {
          "@type": "Thing",
          name: "Mobile App Development",
          description: "Building cross-platform mobile applications",
        },
        {
          "@type": "Thing",
          name: "Full Stack Development",
          description: "End-to-end application development",
        },
      ],
      knowsLanguage: ["en-US", "hi-IN"],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Government College of Engineering and Technology",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jammu",
          addressCountry: "IN",
        },
      },
      worksFor: {
        "@type": "Organization",
        name: "Ethereum Technologies",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jammu",
          addressCountry: "IN",
        },
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Full Stack Web Development",
          credentialCategory: "certificate",
          recognizedBy: {
            "@type": "Organization",
            name: "100xDev",
          },
          dateCreated: "2024-04",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "React Native",
          credentialCategory: "certificate",
          recognizedBy: {
            "@type": "Organization",
            name: "Meta",
          },
          dateCreated: "2023-08",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "React",
          credentialCategory: "certificate",
          recognizedBy: {
            "@type": "Organization",
            name: "Meta",
          },
          dateCreated: "2023-07",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Data Structures & Algorithms",
          credentialCategory: "certificate",
          recognizedBy: {
            "@type": "Organization",
            name: "Udemy",
          },
          dateCreated: "2022-08",
        },
      ],
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "React Native & Full Stack Developer",
          occupationLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jammu",
              addressCountry: "IN",
            },
          },
          estimatedSalary: {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
              "@type": "QuantitativeValue",
              minValue: 500000,
              maxValue: 1000000,
              unitText: "YEAR",
            },
          },
          skills:
            "React Native, React, Node.js, TypeScript, PostgreSQL, Firebase, WebRTC, Redux, Expo",
        },
      ],
      workExample: [
        {
          "@type": "CreativeWork",
          name: "All Cures Healthcare App",
          description:
            "Healthcare mobile application built with React Native and Expo",
          keywords: "React Native, Healthcare, Mobile App",
        },
        {
          "@type": "CreativeWork",
          name: "Saathi Elderly Care App",
          description:
            "Elderly care mobile application with real-time features",
          keywords: "React Native, Elderly Care, Firebase",
        },
        {
          "@type": "CreativeWork",
          name: "Igris Ride-Booking Platform",
          description:
            "Customer ride-booking app with real-time tracking and payments",
          keywords: "React Native, Ride Booking, Real-time",
        },
        {
          "@type": "CreativeWork",
          name: "Igris Admin Dashboard",
          description:
            "Admin dashboard for managing users, rides, and driver earnings",
          keywords: "React, Admin Dashboard, shadcn UI",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex flex-col font-sans">
        {/* Terminal Hero Section */}
        <TerminalHero />

        {/* Professional Summary - NEW */}
        {/* <div id="about">
          <ProfessionalSummary />
        </div> */}

        {/* Tech Skills Section */}

        {/* Code Showcase */}

        {/* Experience Section with improved design */}
        <section
          className=" text-white py-10"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h1
              id="experience-heading"
              className="text-4xl mb-12 text-center font-jetbrains font-bold"
            >
              My <span className="text-green-400 ml-2">Experience</span>
            </h1>
            <div className="space-y-8">
              {experiences.map((Exp, index) => {
                return (
                  <div
                    className="text-white border-2 border-gray-700 rounded-xl p-6 hover:border-green-400 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm"
                    key={index}
                  >
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div className="flex flex-row items-center gap-5">
                        <div className="text-green-400 p-2 bg-gray-700 rounded-lg">
                          {Exp.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-xl font-jetbrains">
                            {Exp.role}
                          </div>
                          <div className="text-green-400 font-medium">
                            {Exp.company}
                          </div>
                          <div className="text-gray-400 text-sm flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {Exp.location}
                          </div>
                        </div>
                      </div>
                      <div className="md:justify-end flex justify-center text-gray-300 mt-4 md:mt-0">
                        <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-lg">
                          <Calendar className="w-4 h-4" />
                          {Exp.duration}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-100 leading-relaxed font-sans">
                      {Exp.details}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Projects />
        <CodeShowcase />
        <TechSkills />
        {/* Education Section with improved design */}
        <section
          className="py-10  relative overflow-hidden"
          id="education"
          aria-labelledby="education-heading"
        >
          {/* Animated Background */}
          {/* <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div> */}

          <div className="max-w-6xl mx-auto px-2 relative z-10">
            {/* <div className="text-5xl md:text-6xl font-bold mb-16 text-center font-jetbrains">
              <GraduationCap
                className="inline-block mr-4 mb-2 text-blue-400"
                size={60}
              />
              Academic{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Journey
              </span>
            </div> */}

            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-600 rounded-full"></div>

              {/* Education Card */}
              <div className="relative mb-16">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Card */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 ml-8 lg:ml-16 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 group">
                  {/* Institution Header */}
                  <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
                    <div className="flex items-center gap-4 mb-4 lg:mb-0">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white font-jetbrains mb-2">
                          Bachelor of Engineering
                        </h3>
                        <p className="text-xl text-blue-300 font-medium">
                          Computer Science & Engineering
                        </p>
                        <p className="text-lg text-purple-300 mt-1">
                          Government College of Engineering and Technology
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl px-6 py-4 border border-blue-400/30">
                        <div className="text-white font-bold text-lg font-jetbrains">
                          August 2018 – October 2022
                        </div>
                        <div className="text-blue-300 text-sm mt-1">
                          4 Years Program
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Trophy className="w-5 h-5 text-yellow-400" />
                          <span className="text-yellow-300 font-bold">
                            GPA: 8.0/10
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Academic Highlights */}
                  {/* <div className="grid md:grid-cols-2 gap-6 mt-8">
             
                    <div className="bg-white/5 rounded-xl p-6 border border-blue-400/20">
                      <h4 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                        <Code className="w-6 h-6" />
                        Core Subjects
                      </h4>
                      <div className="space-y-3">
                        {[
                          {
                            subject: "Data Structures & Algorithms",
                            grade: "A+",
                          },
                          {
                            subject: "Object-Oriented Programming",
                            grade: "A+",
                          },
                          {
                            subject: "Database Management Systems",
                            grade: "A",
                          },
                          { subject: "Computer Networks", grade: "A" },
                          { subject: "Software Engineering", grade: "A+" },
                          { subject: "Operating Systems", grade: "A" },
                        ].map((item, index) => (
                          <div
                            key={item.subject}
                            className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                          >
                            <span className="text-gray-200">
                              {item.subject}
                            </span>
                            <span className="text-green-400 font-bold font-mono">
                              {item.grade}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-purple-400/20">
                      <h4 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                        <Award className="w-6 h-6" />
                        Achievements
                      </h4>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Dean's List",
                            description:
                              "Top 10% of class for 3 consecutive semesters",
                            icon: "🏆",
                          },
                          {
                            title: "Coding Competition",
                            description:
                              "1st place in college programming contest",
                            icon: "🥇",
                          },
                          {
                            title: "Final Year Project",
                            description:
                              "Developed AI-based recommendation system",
                            icon: "🚀",
                          },
                          {
                            title: "Technical Society",
                            description:
                              "President of Computer Science Society",
                            icon: "👨‍💼",
                          },
                        ].map((achievement, index) => (
                          <div
                            key={achievement.title}
                            className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                          >
                            <span className="text-2xl">{achievement.icon}</span>
                            <div>
                              <h5 className="text-white font-semibold">
                                {achievement.title}
                              </h5>
                              <p className="text-gray-300 text-sm">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div> */}

                  {/* Skills Developed */}
                  {/* <div className="mt-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-6 border border-blue-400/20">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Zap className="w-6 h-6 text-yellow-400" />
                      Skills Developed
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "C/C++",
                        "Java",
                        "Python",
                        "JavaScript",
                        "SQL",
                        "HTML/CSS",
                        "Data Structures",
                        "Algorithms",
                        "System Design",
                        "Database Design",
                        "Software Testing",
                        "Project Management",
                        "Team Leadership",
                        "Technical Writing",
                      ].map((skill, index) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white rounded-full text-sm font-medium border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div> */}

                  {/* Quote/Reflection */}
                  {/* <div className="mt-8 text-center">
                    <blockquote className="text-lg italic text-blue-200 border-l-4 border-blue-400 pl-6 py-4 bg-blue-900/20 rounded-r-xl">
                      &quot;My engineering journey laid the foundation for
                      logical thinking, problem-solving, and the systematic
                      approach that drives my passion for creating innovative
                      software solutions.&quot;
                    </blockquote>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section with improved design */}
        <section
          className="py-10"
          id="certifications"
          aria-labelledby="certifications-heading"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h1
              id="certifications-heading"
              className="text-4xl mb-12 text-center font-jetbrains font-bold text-white"
            >
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent ml-2">
                Certifications
              </span>
            </h1>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border border-purple-400/30 rounded-xl p-6 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-400/10 rounded-lg group-hover:bg-purple-400/20 transition-colors duration-300">
                      <Award className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-white font-jetbrains">
                        {cert.title}
                      </h3>
                      <p className="text-purple-400 font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-400 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MyGitHub />
        <LeetCode />

        <AboutMe />

        {/* Testimonials - NEW */}
        {/* <div id="testimonials">
          <Testimonials />
        </div> */}

        <Form />

        {/* Footer - NEW */}
        {/* <Footer /> */}
      </main>
    </>
  );
}
