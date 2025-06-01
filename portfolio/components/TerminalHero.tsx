"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Play,
  Square,
  Minimize2,
  Maximize2,
  X,
  Github,
  Linkedin,
  Mail,
  Download,
  Coffee,
  Zap,
  Twitter,
} from "lucide-react";

const TerminalHero = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const commands = useMemo(
    () => [
      {
        input: "whoami",
        output: "aashutosh-gandotra: Full-Stack Mobile Developer",
      },
      {
        input: "cat skills.txt",
        output: `React Native ████████████████████ 95%
TypeScript ████████████████████ 90%
Node.js    ████████████████████ 90%
Next.js    ████████████████████ 90%
AWS        ████████████████████ 80%`,
      },
      {
        input: "ls projects/",
        output: `all-cures/          Igris/           saathi/
ai-matchup/         genz-express/      jk-attendance/`,
      },
      {
        input: "git log --oneline",
        output: `a1b2c3d feat: implemented real-time video chat with WebRTC
e4f5g6h fix: optimized app performance by 200%
i7j8k9l feat: built scalable ride-booking backend
m1n2o3p feat: integrated AI-powered matchmaking`,
      },
      {
        input: "npm run deploy",
        output: `✓ Building production bundle...
✓ Optimizing assets...
✓ Deploying to AWS...
🚀 Deployment successful!`,
      },
    ],
    []
  );

  useEffect(() => {
    if (!isTyping) return;

    const command = commands[currentCommand];
    const fullText = `$ ${command.input}\n${command.output}`;
    let animationFrameId: number;
    let lastUpdateTime = 0;
    const updateInterval = 50; // 50ms between updates

    const animate = (timestamp: number) => {
      if (timestamp - lastUpdateTime >= updateInterval) {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
          lastUpdateTime = timestamp;
        } else {
          // Wait 2 seconds before moving to next command
          setTimeout(() => {
            setCurrentCommand((prev) => (prev + 1) % commands.length);
            setDisplayText("");
          }, 2000);
          return;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [displayText, currentCommand, isTyping, commands]);

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Aashu-crypto",
      color: "hover:text-green-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/aashutosh-gandotra/",
      color: "hover:text-blue-400",
    },
    {
      name: "X",
      icon: Twitter,
      url: "https://x.com/aashutosh3006",
      color: "hover:text-purple-400",
    },
  ];

  // Optimize floating code elements
  const floatingElements = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      x:
        Math.random() *
        (typeof window !== "undefined" ? window.innerWidth : 1200),
      y:
        Math.random() *
        (typeof window !== "undefined" ? window.innerHeight : 800),
      symbol: ["{ }", "< />", "( )", "[ ]", "=>", "&&", "||", "==="][
        Math.floor(Math.random() * 8)
      ],
    }));
  }, []);

  // Set visibility after initial render to prevent hydration issues
  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <section className="min-h-screen b text-green-400 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        {/* <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff00' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div> */}
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Terminal className="ml-3 text-gray-400" size={16} />
                <span className="text-gray-300 text-sm font-mono">
                  aashutosh@portfolio:~
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Minimize2
                  size={14}
                  className="hover:text-white cursor-pointer"
                />
                <Maximize2
                  size={14}
                  className="hover:text-white cursor-pointer"
                />
                <X size={14} className="hover:text-red-400 cursor-pointer" />
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 h-80 overflow-hidden">
              <div className="font-mono text-sm leading-relaxed">
                <div className="text-gray-400 mb-4">
                  Welcome to Aashutosh&apos;s Portfolio Terminal v3.0.0
                </div>
                <pre className="text-green-400 whitespace-pre-wrap">
                  {displayText}
                  <span className="animate-pulse">█</span>
                </pre>
              </div>
            </div>
          </div>

          {/* Terminal Controls */}
          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={() => setIsTyping(!isTyping)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-600"
            >
              {isTyping ? <Square size={16} /> : <Play size={16} />}
              <span className="text-sm">{isTyping ? "Pause" : "Resume"}</span>
            </button>
            <div className="text-gray-400 text-sm font-mono">
              Process: {currentCommand + 1}/{commands.length}
            </div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-green-400 font-mono text-lg mb-2"
            >
              console.log(&quot;Hello, World! 👋&quot;);
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4 font-jetbrains"
            >
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Aashutosh
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-3xl text-gray-300 mb-6 font-jetbrains"
            >
              Full-Stack Developer
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl"
            >
              Crafting scalable applications and backend systems with{" "}
              <span className="text-green-400 font-mono">React Native</span>,{" "}
              <span className="text-blue-400 font-mono">TypeScript</span>,{" "}
              <span className="text-blue-400 font-mono">PostgreSQL</span>, and{" "}
              <span className="text-purple-400 font-mono">Node.js</span>.
              Passionate about clean code, performance optimization, and solving
              real-world problems.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a href="#projects" className="group">
              <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Zap className="inline-block mr-2" size={20} />
                View My Work
              </button>
            </a>

            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <button className="w-full sm:w-auto border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <Download className="inline-block mr-2" size={20} />
                Download Resume
              </button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex justify-center lg:justify-start gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-110 ${link.color} border border-gray-600 hover:border-current`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for hire</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee size={16} />
              <span>Fueled by coffee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute text-green-400/20 font-mono text-xs"
            initial={{
              x: element.x,
              y: element.y,
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {element.symbol}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TerminalHero;
