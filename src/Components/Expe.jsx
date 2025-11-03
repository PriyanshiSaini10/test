import React from "react";
import { motion } from "framer-motion";
import { Building2, CalendarDays, Briefcase, FileText } from "lucide-react";

export default function Expe() {
  const data = [
    {
      logo: "https://instagram.fixc8-2.fna.fbcdn.net/v/t51.2885-19/462373605_1095361545343636_443638259218936484_n.jpg",
      companyName: "Sqilco",
      startDate: "12-March-2024",
      endDate: "27-Feb-2025",
      posti: "Internship — MERN Stack Developer",
      des: "Worked on full-stack web development using MongoDB, Express, React, and Node.js. Contributed to project design, API development, and deployment.",
    },
    {
      logo: "https://res.cloudinary.com/dnpn8ljki/image/upload/v1750770016/Hartron_Logo1_ryz9yl.png",
      companyName: "Hartron Advance Skill Centre",
      startDate: "04-June-2025",
      endDate: "Present",
      posti: "Cyber Secured Web Development Associate",
      des: "Responsible for developing and maintaining secure web applications with a focus on cybersecurity best practices and penetration testing.",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 text-white overflow-hidden">
      {/* Background same as App.jsx */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(130%_130%_at_50%_20%,#12002b_40%,#8b5cf6_100%)]"></div>

      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 drop-shadow-[0_0_25px_rgba(147,51,234,0.6)]"
      >
        Work Experience
      </motion.h1>

      {/* Cards Animation */}
      <div className="grid gap-10 w-full max-w-5xl">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
            whileHover={{
              y: -10,
              rotateY: 5,
              scale: 1.05,
              boxShadow: "0 10px 45px rgba(139,92,246,0.6)",
              transition: { type: "spring", stiffness: 250, damping: 15 },
            }}
            className="relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(139,92,246,0.25)] transition-all duration-300 ease-out hover:bg-white/15 cursor-pointer"
          >
            {/* Logo with glow & hover pulse */}
            <motion.img
              src={item.logo}
              alt={item.companyName}
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-24 h-24 rounded-full object-cover border-4 border-indigo-400 shadow-[0_0_35px_rgba(139,92,246,0.6)]"
            />

            {/* Text Section */}
            <div className="text-center md:text-left space-y-3">
              <h2 className="flex items-center justify-center md:justify-start gap-2 text-2xl font-semibold text-indigo-300">
                <Building2 size={22} className="text-indigo-400" />
                {item.companyName}
              </h2>

              <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300">
                <CalendarDays size={18} className="text-pink-400" />
                {item.startDate} — {item.endDate}
              </p>

              <h3 className="flex items-center justify-center md:justify-start gap-2 text-lg font-medium text-pink-400">
                <Briefcase size={20} className="text-indigo-300" />
                {item.posti}
              </h3>

              <p className="flex items-start justify-center md:justify-start gap-2 text-gray-200 max-w-2xl mx-auto md:mx-0">
                <FileText size={18} className="mt-1 text-indigo-400" />
                {item.des}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
