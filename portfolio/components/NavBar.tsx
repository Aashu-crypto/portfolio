"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Download, Menu, X, User, Briefcase, FolderOpen, Wrench, MessageCircle } from "lucide-react";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", to: "about", icon: User },
    { name: "Experience", to: "experience", icon: Briefcase },
    { name: "Projects", to: "projects", icon: FolderOpen },
    { name: "Skills", to: "skills", icon: Wrench },
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
          <NextLink href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/me.jpg"
              width={40}
              height={40}
              className="rounded-full border-2 border-gray-600 group-hover:border-green-400 transition-colors"
              alt="Aashutosh Gandotra"
            />
            <div className="hidden sm:block">
              <div className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                Aashutosh Gandotra
              </div>
              <div className="text-sm text-gray-400">Full Stack Engineer</div>
            </div>
          </NextLink>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all cursor-pointer"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 rounded-lg bg-gray-800/80 border border-gray-600"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
            >
              {open ? (
                <X className="w-5 h-5 text-green-400" />
              ) : (
                <Menu className="w-5 h-5 text-gray-300" />
              )}
            </button>

            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-gray-700">
                <div className="bg-gray-900/95 rounded-xl border border-gray-700 p-4 mx-4 space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 cursor-pointer"
                      onClick={() => setOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default NavBar;
