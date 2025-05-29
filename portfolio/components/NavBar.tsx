"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Download,
  Menu,
  X,
  Code,
  Terminal,
  Zap,
  User,
  Briefcase,
  FolderOpen,
  MessageCircle,
} from "lucide-react";
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
    { name: "About", to: "about", icon: User },
  
    { name: "Experience", to: "experience", icon: Briefcase },
    { name: "Projects", to: "projects", icon: FolderOpen },
    // { name: "Testimonials", to: "testimonials", icon: Terminal },
    { name: "Contact", to: "contact", icon: MessageCircle },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 0
          ? "bg-black/95 backdrop-blur-md border-b border-gray-700/50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <NextLink href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src={"/images/me.jpg"}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-gray-600 group-hover:border-green-400 transition-colors duration-300"
                  alt="Aashutosh Gandotra"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
              </div>

              <div className="hidden sm:block">
                <div className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                  Aashutosh Gandotra
                </div>
                <div className="text-sm text-gray-400">
                  Full-Stack Developer
                </div>
              </div>
            </NextLink>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center space-x-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg bg-gray-800/80 border border-gray-600 hover:border-green-400 transition-all duration-300"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
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
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <a
                href="/api/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Resume</span>
              </a>
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
                <div className="bg-gray-900/95 backdrop-blur-md rounded-xl border border-gray-700 p-4 mx-4">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          to={item.to}
                          spy={true}
                          smooth={true}
                          className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
                          onClick={() => setOpen(false)}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Resume Button */}
                  <motion.div
                    className="mt-4 pt-4 border-t border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <a
                      href="/api/resume"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full p-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300"
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

      {/* Simple Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-green-500"
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
