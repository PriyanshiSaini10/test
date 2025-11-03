import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Code } from "lucide-react";

export default function Profile() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10 py-20 bg-cover bg-center bg-no-repeat"
      style={{
        background:
          "radial-gradient(130% 130% at 50% 20%, #12002b 40%, #8b5cf6 100%)",
      }}
    >
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 250% 250%;
          animation: gradientFlow 6s ease infinite;
        }
        img, .group {
          background: transparent !important;
        }
      `}</style>

      {/* Left Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.25 },
          },
        }}
        className="md:w-1/2 text-center md:text-left space-y-6"
      >
        {/* Name — Y visible fix */}
        <motion.p
          variants={fadeUp}
          className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent animate-gradient tracking-tight leading-[1.1]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #6366F1 5%, #7C3AED 40%, #EC4899 85%, #F9A8D4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "250% 250%",
            paddingBottom: "0.25em",
            lineHeight: "1.15",
          }}
        >
          Hi, I’m Priyanshi
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-2xl text-gray-200 font-semibold flex items-center justify-center md:justify-start gap-2"
        >
          <ShieldCheck className="text-indigo-400" /> Cybersecurity
          <span className="text-gray-400 mx-2">|</span>
          <Code className="text-pink-400" /> Web Developer
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-lg text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed"
        >
          I’m passionate about creating secure and beautiful digital experiences.
          I combine technology and creativity to build modern, safe, and powerful web solutions.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 18px rgba(99,102,241,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg"
          >
            Know More
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgb(99,102,241)",
              color: "white",
              boxShadow: "0 0 18px rgba(99,102,241,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-indigo-600 text-indigo-400 px-8 py-3 rounded-xl font-medium transition-all duration-300"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Section (Photo with glow + entrance animation) */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="md:w-1/2 flex justify-center mt-12 md:mt-0"
      >
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative group bg-transparent"
        >
          {/* Glowing Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition duration-500"></div>

          {/* Floating Image */}
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { type: "spring", stiffness: 200 },
            }}
            src="https://wallpapers.com/images/featured/cute-profile-picture-s52z1uggme5sj92d.jpg"
            alt="Profile"
            className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white bg-transparent"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
