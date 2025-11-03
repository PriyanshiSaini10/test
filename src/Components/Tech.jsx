import React from "react";
import { motion } from "framer-motion";
import {
  Atom,
  Server,
  Database,
  TerminalSquare,
  Zap,
  Layers,
  Globe,
  GitBranch,
} from "lucide-react";

export default function Tech() {
  const techItems = [
    { name: "React.js", icon: Atom, color: "text-sky-400" },
    { name: "Express.js", icon: Server, color: "text-green-400" },
    { name: "MongoDB", icon: Database, color: "text-emerald-400" },
    { name: "Node.js", icon: TerminalSquare, color: "text-lime-400" },
    { name: "JavaScript", icon: Zap, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: Layers, color: "text-cyan-400" },
    { name: "MySQL", icon: Globe, color: "text-teal-400" },
    { name: "Git", icon: GitBranch, color: "text-red-400" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Light version of your App.jsx background */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(130%_130%_at_50%_20%,#21004a_40%,#9b6cf7_100%)] opacity-90"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 
                   bg-clip-text text-transparent mb-14 text-center leading-[1.3] 
                   drop-shadow-[0_4px_25px_rgba(147,51,234,0.6)] z-10"
      >
        Technology Stack
      </motion.h1>

      {/* Animated Cards */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 z-10">
        {techItems.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{
                opacity: 1,
                scale: [1, 1.05, 1],
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.12,
                rotateX: 6,
                rotateY: -6,
                boxShadow:
                  "0 0 35px rgba(147,197,253,0.6), 0 0 60px rgba(192,132,252,0.5)",
                transition: { duration: 0.4 },
              }}
              className="relative flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl 
                         rounded-3xl p-6 border border-purple-300/40 shadow-[0_0_25px_rgba(168,85,247,0.4)] 
                         transition-all duration-300"
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                className="relative z-10"
              >
                <Icon
                  size={52}
                  className={`${tech.color} drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]`}
                />
              </motion.div>

              <motion.p
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                className="mt-5 text-gray-100 font-semibold text-lg md:text-xl tracking-wide select-none z-10"
              >
                {tech.name}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
