"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Code2,
  Database,
  Smartphone,
  Server,
  Globe,
  GitBranch,
  Play,
  Copy,
  Check,
  Zap,
  Cpu,
  Monitor,
  Layers,
} from "lucide-react";

const CodeShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [typedCode, setTypedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const codeExamples = [
    {
      title: "GenAI with LangChain",
      icon: <Cpu className="w-5 h-5" />,
      language: "python",
      gradient: "from-purple-500 to-pink-600",
      code: `from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

# Initialize LLM
llm = OpenAI(temperature=0.7)

# Create prompt template
template = """
You are an expert AI assistant. Help me with the following task:
{task}

Provide a detailed response with examples.
"""

prompt = PromptTemplate(
    input_variables=["task"],
    template=template
)

# Create chain
chain = LLMChain(llm=llm, prompt=prompt)

# Run chain
response = chain.run("Explain quantum computing")
print(response)`,
    },
    {
      title: "Next.js with TypeScript",
      icon: <Globe className="w-5 h-5" />,
      language: "typescript",
      gradient: "from-blue-500 to-cyan-600",
      code: `// AI-powered content generation
'use client';
import { OpenAI } from 'openai';

const ContentGenerator = () => {
  const generateContent = async (prompt: string) => {
    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">AI Content Generator</h2>
      {/* Content generation interface */}
    </div>
  );
};`,
    },
    {
      title: "Docker & DevOps",
      icon: <Terminal className="w-5 h-5" />,
      language: "dockerfile",
      gradient: "from-orange-500 to-red-600",
      code: `# Multi-stage Docker build for AI application
FROM python:3.9-slim AS builder

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

# Production stage
FROM python:3.9-slim

WORKDIR /app
COPY --from=builder /app /app

# Run application
CMD ["python", "app.py"]`,
    },
  ];

  const currentCode = codeExamples[activeTab].code;

  useEffect(() => {
    if (!isPlaying) return;

    if (currentIndex < currentCode.length) {
      const timeout = setTimeout(() => {
        setTypedCode(currentCode.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentCode, isPlaying]);

  useEffect(() => {
    setTypedCode("");
    setCurrentIndex(0);
  }, [activeTab]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-10  text-white relative overflow-hidden" id="code">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 font-jetbrains"
            variants={itemVariants}
          >
            <Code2
              className="inline-block mr-4 mb-2 text-green-400"
              size={60}
            />
            Code{" "}
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Showcase
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Real production code from my applications. From mobile apps to
            backend systems, here&apos;s how I solve complex problems with
            clean, scalable architecture.
          </motion.p>
        </motion.div>

        {/* Code Tabs */}
        <motion.div
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {codeExamples.map((example, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 border-2 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${example.gradient} border-transparent text-white shadow-lg shadow-current/30`
                    : "border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400 bg-gray-800/50"
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {example.icon}
                {example.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Code Display */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-950/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-800/80 backdrop-blur-sm border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Terminal className="text-gray-400" size={16} />
                  <span className="text-gray-300 font-mono text-sm">
                    {codeExamples[activeTab].title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}
                    .{codeExamples[activeTab].language}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  onClick={togglePlayback}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm text-gray-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <Zap className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                  {isPlaying ? "Live" : "Paused"}
                </motion.button>

                <motion.button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm text-gray-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex items-center gap-1"
                      >
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex items-center gap-1"
                      >
                        <Copy className="w-4 h-4" />
                        Copy
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-8 overflow-x-auto min-h-[400px]">
              <pre className="font-code text-sm text-gray-100 leading-relaxed">
                <motion.code
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {typedCode}
                  {isPlaying && (
                    <motion.span
                      className="bg-green-400 text-black"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      █
                    </motion.span>
                  )}
                </motion.code>
              </pre>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-gray-800">
              <motion.div
                className={`h-full bg-gradient-to-r ${codeExamples[activeTab].gradient}`}
                initial={{ width: 0 }}
                animate={{
                  width: `${(currentIndex / currentCode.length) * 100}%`,
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-6 font-jetbrains text-gray-300 flex items-center justify-center gap-3">
            <Layers className="text-green-400" size={24} />
            Technologies Used
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "TypeScript", color: "from-blue-500 to-blue-600" },
              { name: "React Native", color: "from-cyan-500 to-cyan-600" },
              { name: "Node.js", color: "from-green-500 to-green-600" },
              { name: "Prisma", color: "from-indigo-500 to-indigo-600" },
              { name: "PostgreSQL", color: "from-blue-600 to-blue-700" },
              { name: "Redis", color: "from-red-500 to-red-600" },
              { name: "WebRTC", color: "from-purple-500 to-purple-600" },
              { name: "Socket.io", color: "from-gray-600 to-gray-700" },
              { name: "Docker", color: "from-blue-500 to-blue-600" },
              { name: "AWS", color: "from-orange-500 to-orange-600" },
              { name: "Next.js", color: "from-gray-700 to-gray-800" },
              { name: "OpenAI", color: "from-purple-600 to-purple-700" },
            ].map((tech, index) => (
              <motion.span
                key={tech.name}
                className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-full text-sm font-mono font-medium shadow-lg`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/Aashu-crypto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-xl transition-all duration-300 font-semibold text-lg border border-gray-600 hover:border-green-400 shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitBranch className="w-6 h-6 text-green-400" />
            View Full Code on GitHub
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default CodeShowcase;
