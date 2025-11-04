import React from "react";
import { motion } from "framer-motion";
import { Github, Globe, Calendar, Code, Info } from "lucide-react";

export default function Project() {
  const ProjectData = [
    {
      projectName: "PortFolio",
      img: "https://assets.justinmind.com/wp-content/uploads/2021/11/web-design-portfolio-768x492.png",
      des: "A personal portfolio showcasing my web development and cybersecurity journey with a responsive layout and animated UI.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      startDate: "02-Oct-2025",
      endDate: "31-Oct-2025",
      info: "Frontend Project",
      githubLink: "https://github.com/priyanshi-dev/Portfolio",
      deploymentLink: "https://priyanshi-portfolio.netlify.app/",
    },
    {
      projectName: "E-Book",
      img: "https://findstack.com/cdn-cgi/image/format=auto,fit=contain/https://cms.findstack.com/wp-content/uploads/2022/08/Untitled-design-800x450.png",
      des: "An online reading platform built with the MERN stack that allows users to read, upload, and manage e-books securely.",
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Cloudinary",
      ],
      startDate: "05-Nov-2025",
      endDate: "07-Apr-2026",
      info: "MERN Stack Project",
      githubLink: "https://github.com/priyanshi-dev/E-Book",
      deploymentLink: "https://ebook-platform.netlify.app/",
    },
    {
      projectName: "Messenger App",
      img: "https://www.elegantthemes.com/blog/wp-content/uploads/2017/10/Featured-Image-Add-Facebook-Messenger-to-WordPress.png",
      des: "A real-time chat application using Socket.io and MongoDB for secure messaging, media sharing, and smooth UI.",
      tech: [
        "React",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "Socket.io",
        "Cloudinary",
      ],
      startDate: "02-May-2026",
      endDate: "19-Sep-2026",
      info: "MERN Stack Project",
      githubLink: "https://github.com/priyanshi-dev/Messenger-App",
      deploymentLink: "https://messenger-app.netlify.app/",
    },
  ];

  return (
    <section
      className="min-h-screen w-full px-6 md:px-12 py-16 text-white flex flex-col items-center"
      style={{
        background:
          "linear-gradient(180deg, #1a0b2e 0%, #2b1052 40%, #4a1d7a 90%)",
      }}
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-[#b693ff] via-[#f48fb1] to-[#b983ff] bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,255,255,0.2)] tracking-wider leading-[1.4]"
        initial={{ opacity: 0, y: -30 }}
        animate={{
          opacity: 1,
          y: 0,
          textShadow: "0px 0px 8px rgba(255,255,255,0.3)",
        }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
        {ProjectData.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-2xl overflow-hidden bg-white/10 border border-white/10 shadow-lg backdrop-blur-xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-3 relative"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{
              y: [0, index % 2 === 0 ? -8 : 8, 0],
              rotate: [0, index % 2 === 0 ? 1 : -1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          >
            {/* Image */}
            <motion.div
              className="relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={item.img}
                alt={item.projectName}
                className="rounded-t-2xl w-full h-44 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* Card Body */}
            <div className="p-5 flex flex-col justify-between h-[380px]">
              <div>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-1 flex items-center gap-2">
                  <Code size={20} className="text-pink-400" />{" "}
                  {item.projectName}
                </h2>

                <p className="flex items-center gap-2 text-sm text-pink-400 mb-2 font-medium tracking-wide">
                  <Info size={15} /> {item.info}
                </p>

                <p className="text-gray-300 text-sm mb-3 leading-relaxed line-clamp-3">
                  {item.des}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 text-gray-200 px-3 py-1 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-gray-400 text-xs mb-3 gap-2">
                  <Calendar size={14} className="text-purple-400" />{" "}
                  {item.startDate} → {item.endDate}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between gap-4 mt-3">
                <motion.a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 bg-gradient-to-r from-purple-700 to-indigo-700 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <Github size={18} /> Code
                </motion.a>
                <motion.a
                  href={item.deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-700 to-purple-700 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <Globe size={18} /> Live
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
