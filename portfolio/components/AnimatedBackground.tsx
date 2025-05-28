"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const codeSymbols = [
    "{ }",
    "< >",
    "( )",
    "[ ]",
    "=>",
    "++",
    "--",
    "&&",
    "||",
    "===",
    "!==",
    "??",
    "?.",
    "<-",
    "->",
    "!=",
    "<=",
    ">=",
    "fn",
    "var",
    "let",
    "const",
    "if",
    "else",
    "for",
    "while",
    "async",
    "await",
    "import",
    "export",
    "class",
    "interface",
    "type",
    "enum",
    "null",
    "undefined",
    "true",
    "false",
    "return",
    "break",
    "continue",
    "try",
    "catch",
    "finally",
    "throw",
    "new",
    "this",
    "super",
    "extends",
    "implements",
  ];

  const binaryDigits = Array.from({ length: 50 }, () =>
    Math.random() > 0.5 ? "1" : "0"
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Code Symbols */}
      {codeSymbols.map((symbol, index) => (
        <motion.div
          key={`symbol-${index}`}
          className="absolute text-gray-200/8 font-mono text-xs md:text-sm select-none"
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1200),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 800),
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: [null, -100, -200],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        >
          {symbol}
        </motion.div>
      ))}

      {/* Binary Rain Effect */}
      {binaryDigits.map((digit, index) => (
        <motion.div
          key={`binary-${index}`}
          className="absolute text-green-400/10 font-mono text-xs select-none"
          initial={{
            x:
              (index * 25) %
              (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: -20,
            opacity: 0,
          }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 20 : 820,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {digit}
        </motion.div>
      ))}

      {/* Grid Pattern with Animation */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "30px 30px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Gradient Orbs with Enhanced Animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-600/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/15 to-blue-600/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 0.8, 1.2],
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"
        animate={{
          scale: [0.8, 1.4, 0.8],
          x: [0, -120, 0],
          y: [0, 80, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Particle System */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-green-400/20 rounded-full"
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1200),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 800),
          }}
          animate={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1200),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 800),
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Circuit Board Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M10,10 L90,10 L90,50 L50,50 L50,90"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="3"
              fill="rgba(34, 197, 94, 0.4)"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Scanning Line Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/50 to-transparent"
        animate={{
          y: [0, typeof window !== "undefined" ? window.innerHeight : 800],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
