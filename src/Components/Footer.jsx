import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Code,
  Coffee,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  ArrowUp,
  Copyright,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:yourmail@example.com",
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: Mail, text: "priyanshi@example.com", href: "mailto:priyanshi@example.com" },
    { icon: MapPin, text: "India", href: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-[#181828] border-t border-gray-700 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <Code className="w-7 h-7 text-purple-500" />
              <span className="text-2xl font-bold text-white tracking-wide">
                Priyanshi
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend & Web Developer passionate about building creative, secure, and
              user-friendly web experiences. Let’s create something awesome together!
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.15,
                    y: -4,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  className={`p-2 bg-[#1b1b2b]/50 rounded-lg border border-gray-700 text-gray-400 ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-blue-400" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-400" />
              Contact Info
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((contact) => (
                <motion.li
                  key={contact.text}
                  variants={itemVariants}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <contact.icon className="w-4 h-4 flex-shrink-0" />
                  <a href={contact.href} className="text-sm">
                    {contact.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Built With */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Coffee className="w-5 h-5 text-amber-400" />
              Built With
            </h3>
            <div className="space-y-2">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-gray-400">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm">Passion & Dedication</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-gray-400">
                <Code className="w-4 h-4 text-purple-500" />
                <span className="text-sm">Modern Tech Stack</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-gray-400">
                <Coffee className="w-4 h-4 text-amber-500" />
                <span className="text-sm">Fueled by Coffee</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Copyright className="w-4 h-4" />
            <span>{currentYear} Priyanshi. All rights reserved.</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(139, 92, 246, 0.15)",
            }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-[#1b1b2b]/50 rounded-xl border border-gray-700 text-gray-400 hover:text-white transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
}
