import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-md">
      {/* Left Section */}
      <h1 className="text-2xl font-bold tracking-widest cursor-pointer hover:text-blue-400 transition new-rocker">
        PS
      </h1>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 px-4 py-2 rounded-lg font-semibold text-white hover:bg-blue-700 transition-all duration-200"
        >
          Download Resume
        </a>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:yourmail@example.com"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
}
