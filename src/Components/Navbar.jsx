import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navVariant = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 14 },
    },
  };

  const iconVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: [0, -6, 6, 0],
      opacity: 1,
      transition: {
        delay: i * 0.22 + 0.3,
        duration: 1.1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };

  return (
    <motion.nav
      variants={navVariant}
      initial="hidden"
      animate="visible"
      style={{
        background: "linear-gradient(90deg, #0f0c29 0%, #1b1a3a 50%, #302b63 100%)",
      }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between 
                 px-6 md:px-10 py-3 text-white shadow-lg border-b border-purple-400/30 
                 rounded-b-2xl backdrop-blur-md bg-opacity-90"
    >
      {/* Left Section */}
      <motion.h1
        whileHover={{
          scale: 1.12,
          textShadow: "0 0 10px rgba(139,92,246,0.6)",
        }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-2xl font-bold tracking-widest cursor-pointer new-rocker"
      >
        PS
      </motion.h1>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="focus:outline-none hover:scale-110 transition-transform"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Right Section */}
      <div
        className={`flex-col md:flex-row items-center md:static absolute md:top-auto top-16 
                    left-0 w-full md:w-auto md:flex md:space-x-6 bg-[#1b1a3a]/90 md:bg-transparent 
                    backdrop-blur-md md:backdrop-blur-none transition-all duration-300 
                    ${open ? "flex" : "hidden"}`}
      >
        {/* Resume Button with Icon */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 18px rgba(147,197,253,0.5)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
          className="relative flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-white 
                     bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 
                     hover:shadow-[0_0_25px_rgba(147,197,253,0.4)] 
                     transition-all duration-300 border border-blue-400/40 my-3 md:my-0"
        >
          <Download size={18} className="text-white" />
          <span className="relative z-10">Download Resume</span>
          <span className="absolute inset-0 bg-white/10 blur-md opacity-30"></span>
        </motion.a>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-4 pb-3 md:pb-0">
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <motion.a
              key={i}
              custom={i}
              variants={iconVariant}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.25,
                rotate: [0, 6, -6, 0],
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
              }}
              transition={{ duration: 0.35 }}
              href={
                i === 0
                  ? "https://github.com/yourusername"
                  : i === 1
                  ? "https://linkedin.com/in/yourusername"
                  : "mailto:yourmail@example.com"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform"
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
