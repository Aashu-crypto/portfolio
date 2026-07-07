"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aashutosh-gandotra/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/Aashu-crypto",
    icon: Github,
  },
  {
    name: "Email",
    url: "mailto:ashugandotra14@gmail.com",
    icon: Mail,
  },
  {
    name: "Twitter",
    url: "https://x.com/AashutoshGando3",
    icon: Twitter,
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 px-4"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <div className="flex items-center justify-center lg:justify-start gap-2 text-green-400 text-sm font-mono mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for hire
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-jetbrains mb-3">
            Aashutosh Gandotra
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-jetbrains mb-2">
            Full Stack Engineer
          </p>

          <p className="text-gray-400 flex items-center justify-center lg:justify-start gap-2 mb-6">
            <MapPin className="w-4 h-4 shrink-0" />
            Jammu, India
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            I build and ship production web and mobile apps end-to-end — React
            Native, React, Node.js, and TypeScript. Currently sole engineer at
            Zaptric Mobility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-green-400 text-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Projects
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-3 bg-gray-800/80 hover:bg-gray-700 rounded-lg border border-gray-700 hover:border-green-400/50 text-gray-300 hover:text-green-400 transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/40 to-blue-500/40 rounded-2xl blur" />
            <Image
              src="/images/me.jpg"
              alt="Aashutosh Gandotra"
              width={320}
              height={320}
              className="relative rounded-2xl border-2 border-gray-700 object-cover w-64 h-64 md:w-80 md:h-80"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
