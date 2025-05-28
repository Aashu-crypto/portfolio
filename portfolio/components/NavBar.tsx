"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Download, Menu, X, Code, Terminal, Zap } from "lucide-react";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // useEffect hook to track scroll position
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const navItems = [
    { name: "About", to: "about", icon: Code },
    { name: "Skills", to: "skills", icon: Code },
    { name: "Code", to: "code", icon: Terminal },
    { name: "Experience", to: "experience", icon: Zap },
    { name: "Projects", to: "projects", icon: Code },
    { name: "Testimonials", to: "testimonials", icon: Terminal },
    { name: "Contact", to: "contact", icon: Terminal },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 0
          ? "bg-black/90 backdrop-blur-xl border-b border-green-400/20 shadow-2xl shadow-green-400/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-green-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <NextLink href="/" className="flex items-center gap-4 group">
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>

                <Image
                  src={"/images/me.jpg"}
                  width={48}
                  height={48}
                  className="relative rounded-full border-2 border-gray-600 group-hover:border-green-400 transition-all duration-300 shadow-lg"
                  alt="Aashutosh Gandotra"
                />

                {/* Status indicator */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
              </div>

              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 font-jetbrains">
                  Aashutosh Gandotra
                </div>
                <div className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors duration-300 font-mono">
                  Full-Stack Developer
                </div>
              </div>
            </NextLink>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  className="relative group px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-4 h-4 group-hover:text-green-400 transition-colors duration-300" />
                    <span className="font-medium">{item.name}</span>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Active indicator */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-600 hover:border-green-400 transition-all duration-300"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-green-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <div className="relative group">
                {/* Animated background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-1000 animate-pulse"></div>

                <a
                  href="/api/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-600 hover:border-green-400 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <Download className="w-4 h-4 group-hover:text-green-400 transition-colors duration-300" />
                  <span className="group-hover:text-green-400 transition-colors duration-300">
                    Resume
                  </span>

                  {/* Animated arrow */}
                  <motion.div
                    className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-gray-700">
                <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 mx-4 shadow-2xl">
                  <div className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          to={item.to}
                          spy={true}
                          smooth={true}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 cursor-pointer group"
                          onClick={() => setOpen(false)}
                        >
                          <div className="p-2 bg-gray-800 group-hover:bg-green-400/20 rounded-lg transition-colors duration-300">
                            <item.icon className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
                          </div>
                          <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                            {item.name}
                          </span>
                          <motion.div
                            className="ml-auto text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Resume Button */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <a
                      href="/api/resume"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full p-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                      onClick={() => setOpen(false)}
                    >
                      <Download className="w-5 h-5" />
                      Download Resume
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
        style={{
          width: `${
            typeof window !== "undefined" && typeof document !== "undefined"
              ? Math.min(
                  (scrollY /
                    (document.documentElement.scrollHeight -
                      window.innerHeight)) *
                    100,
                  100
                )
              : 0
          }%`,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.nav>
  );
}

export default NavBar;
