import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, MessageCircle, Phone, Send, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    mobile: "",
  });

  const ContactData = [
    {
      Name: "Name",
      placeholder: "Enter your name",
      type: "text",
      icon: <User className="text-indigo-400" />,
      KeyName: "name",
    },
    {
      Name: "Email",
      placeholder: "Enter your email",
      type: "email",
      icon: <Mail className="text-indigo-400" />,
      KeyName: "email",
    },
    {
      Name: "Message",
      placeholder: "Enter your message",
      type: "text",
      icon: <MessageCircle className="text-indigo-400" />,
      KeyName: "message",
    },
    {
      Name: "Mobile",
      placeholder: "Enter your number",
      type: "number",
      icon: <Phone className="text-indigo-400" />,
      KeyName: "mobile",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-20 text-white relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 140% at 50% 20%, #150b2d 30%, #4b1f77 65%, #9d7efc 100%)",
      }}
    >
      {/* soft overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 z-10">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-8"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[2.5rem] md:text-[3rem] font-extrabold mb-4 tracking-tight bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text text-transparent"
              style={{
                lineHeight: "1.2", // fixes g-tail cutoff
                paddingBottom: "0.1em", // gives space below g
                display: "inline-block",
              }}
            >
              Let’s Work Together 🤝
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-200 text-lg leading-relaxed max-w-md"
            >
              Have an idea, project, or just want to say hi?  
              Let’s collaborate and bring your vision to life with creativity, technology, and security.
            </motion.p>
          </div>

          <div className="flex gap-6 mt-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.15, y: -4 }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <Github size={26} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.15, y: -4 }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <Linkedin size={26} />
            </motion.a>
            <motion.a
              href="mailto:example@mail.com"
              whileHover={{ scale: 1.15, y: -4 }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <Mail size={26} />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT FORM SECTION */}
        <motion.form
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="w-full rounded-2xl shadow-2xl border border-white/10 p-8 md:p-10 space-y-6 backdrop-blur-md"
          style={{
            background:
              "linear-gradient(135deg, rgba(18,0,43,0.85), rgba(139,92,246,0.25))",
          }}
        >
          {ContactData.map((item, index) => (
            <motion.div key={index} variants={fadeUp} className="flex flex-col gap-2">
              <label
                htmlFor={item.KeyName}
                className="flex items-center gap-2 text-lg font-medium text-indigo-300"
              >
                {item.icon} {item.Name}
              </label>
              <input
                type={item.type}
                id={item.KeyName}
                placeholder={item.placeholder}
                value={data[item.KeyName]}
                onChange={(e) =>
                  setData({ ...data, [item.KeyName]: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition-all duration-300"
              />
            </motion.div>
          ))}

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(to right, #7c3aed, #ec4899)",
              boxShadow: "0 0 20px rgba(139,92,246,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            <Send size={20} /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
