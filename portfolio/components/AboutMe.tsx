"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="py-16 px-4" id="about">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-jetbrains mb-6 text-center">
            About
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
            Full Stack Engineer with 4+ years of experience shipping production
            platforms across HealthTech, Ride-Hailing, and EV Mobility. I work
            across the stack — mobile apps, web dashboards, and backends — and
            care about shipping things that work in production.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
            <div className="flex items-center justify-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
              B.E. CSE, GCET Jammu · GPA 8.0
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-purple-400 shrink-0" />
              Meta certified · React & React Native
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
