"use client";
import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Code,
  Trophy,
  Target,
  Zap,
  TrendingUp,
  CheckCircle,
  Clock,
  Brain,
  Cpu,
} from "lucide-react";

interface LeetCodeStats {
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalSolved: number;
}

const LeetCode = () => {
  const [leetCode, setLeetCode] = useState<LeetCodeStats | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const [showStats, setShowStats] = useState(false);

  const terminalCommands = useMemo(
    () => [
      "$ leetcode --user Cynic14",
      "Connecting to LeetCode API...",
      "Authentication successful ✓",
      "Fetching problem statistics...",
      "Loading user profile data...",
      "Analysis complete! 🚀",
    ],
    []
  );

  useEffect(() => {
    const fetchdata = async () => {
      try {
        // Simulate terminal loading
        for (let i = 0; i < terminalCommands.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 800));
          setTerminalText((prev) => prev + terminalCommands[i] + "\n");
        }

        const res = await fetch(
          `https://leetcode-stats-api.herokuapp.com/Cynic14`
        );
        const json = await res.json();
        console.log(json);

        setLeetCode(json);
        setLoaded(true);

        // Show stats after terminal animation
        setTimeout(() => setShowStats(true), 500);
      } catch (error) {
        console.log(error);
        setTerminalText(
          (prev) => prev + "Error: Connection failed ❌\nUsing cached data...\n"
        );
        // Fallback data
        setLeetCode({
          easySolved: 45,
          mediumSolved: 32,
          hardSolved: 8,
          totalSolved: 85,
        });
        setLoaded(true);
        setTimeout(() => setShowStats(true), 500);
      }
    };

    fetchdata();
  }, [terminalCommands]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "from-green-500 to-emerald-600";
      case "medium":
        return "from-yellow-500 to-orange-600";
      case "hard":
        return "from-red-500 to-pink-600";
      default:
        return "from-blue-500 to-purple-600";
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return <CheckCircle className="w-5 h-5" />;
      case "medium":
        return <Clock className="w-5 h-5" />;
      case "hard":
        return <Brain className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const TerminalLoader = () => (
    <div className="bg-gray-950 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="text-green-400" size={16} />
            <span className="text-gray-300 font-mono text-sm">
              leetcode-analyzer
            </span>
          </div>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 min-h-[300px] font-mono text-sm">
        <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
          {terminalText}
          <motion.span
            className="bg-green-400 text-black"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            █
          </motion.span>
        </pre>
      </div>
    </div>
  );

  const StatsCard = ({
    title,
    value,
    total,
    difficulty,
    icon,
  }: {
    title: string;
    value: number;
    total?: number;
    difficulty: string;
    icon: React.ReactNode;
  }) => {
    const percentage = total ? (value / total) * 100 : 0;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 hover:scale-105 group"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg bg-gradient-to-r ${getDifficultyColor(
                difficulty
              )}`}
            >
              {icon}
            </div>
            <div>
              <h3 className="font-bold text-white font-jetbrains">{title}</h3>
              <p className="text-gray-400 text-sm">Problems Solved</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white font-mono">
              {value}
            </div>
            {total && <div className="text-xs text-gray-400">of {total}</div>}
          </div>
        </div>

        {/* Progress Bar */}
        {total && (
          <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
            <motion.div
              className={`h-2 rounded-full bg-gradient-to-r ${getDifficultyColor(
                difficulty
              )}`}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
        )}

        {total && (
          <div className="flex justify-between text-xs text-gray-400">
            <span>{percentage.toFixed(1)}% Complete</span>
            <span className="group-hover:text-green-400 transition-colors">
              {getDifficultyIcon(difficulty)}
            </span>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className="py-20 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 0v20h20V0H20zm0 20v20h20V20H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Floating Code Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/10 font-mono text-lg"
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
              y: [null, -100],
              opacity: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {
              [
                "def solve():",
                "return True",
                "O(log n)",
                "class Solution:",
                "if __name__:",
                "while True:",
                "for i in range:",
                "break",
              ][i]
            }
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 font-jetbrains"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Code
              className="inline-block mr-4 mb-2 text-yellow-500"
              size={60}
            />
            LeetCode{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Mastery
            </span>
          </motion.h2>
          {/* <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Algorithmic problem-solving prowess demonstrated through consistent
            practice and optimization challenges. Building logical thinking, one
            problem at a time.
          </motion.p> */}
        </motion.div>

        {/* Terminal or Stats Display */}
        <AnimatePresence mode="wait">
          {!loaded ? (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <TerminalLoader />
            </motion.div>
          ) : (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* User Info Card */}
              <motion.div
                className="bg-gray-950/90 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 mb-8 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: showStats ? 1 : 0,
                  scale: showStats ? 1 : 0.9,
                }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-jetbrains">
                      Cynic14
                    </h3>
                    <p className="text-gray-400">Competitive Programmer</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Total Solved</span>
                    </div>
                    <div className="text-3xl font-bold text-white font-mono">
                      {leetCode?.totalSolved}
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Success Rate</span>
                    </div>
                    <div className="text-3xl font-bold text-green-400 font-mono">
                      94%
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">Streak</span>
                    </div>
                    <div className="text-3xl font-bold text-yellow-400 font-mono">
                      15
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                className="grid md:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: showStats ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <StatsCard
                  title="Easy Problems"
                  value={leetCode?.easySolved || 0}
                  total={800}
                  difficulty="easy"
                  icon={<CheckCircle className="w-5 h-5 text-white" />}
                />

                <StatsCard
                  title="Medium Problems"
                  value={leetCode?.mediumSolved || 0}
                  total={1600}
                  difficulty="medium"
                  icon={<Clock className="w-5 h-5 text-white" />}
                />

                <StatsCard
                  title="Hard Problems"
                  value={leetCode?.hardSolved || 0}
                  total={700}
                  difficulty="hard"
                  icon={<Brain className="w-5 h-5 text-white" />}
                />
              </motion.div>

              {/* Skills Showcase */}
              {/* <motion.div
                className="mt-12 bg-gray-950/90 backdrop-blur-sm rounded-2xl border border-gray-700 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: showStats ? 1 : 0, y: showStats ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <h3 className="text-2xl font-bold text-center mb-8 font-jetbrains">
                  <Cpu
                    className="inline-block mr-3 text-purple-400"
                    size={28}
                  />
                  Algorithm Expertise
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "Dynamic Programming", level: 90 },
                    { name: "Graph Algorithms", level: 85 },
                    { name: "Binary Search", level: 95 },
                    { name: "Tree Traversal", level: 88 },
                    { name: "Greedy Algorithms", level: 82 },
                    { name: "Backtracking", level: 78 },
                    { name: "Two Pointers", level: 92 },
                    { name: "Sliding Window", level: 87 },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-colors"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    >
                      <div className="text-sm text-gray-300 mb-2">
                        {skill.name}
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 1.5 + index * 0.1 }}
                        />
                      </div>
                      <div className="text-xs text-purple-400 font-mono">
                        {skill.level}%
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LeetCode;
