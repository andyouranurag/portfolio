"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-16 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/70 max-w-2xl mx-auto"
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 md:p-12 rounded-3xl border border-glass-border shadow-xl relative overflow-hidden"
      >
        {/* Subtle glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">

          {/* Location */}
          <div className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground/60 mb-1">Location</p>
              <p className="font-semibold text-lg text-foreground">Noida, India</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-accent-light group-hover:scale-110 group-hover:bg-accent-light group-hover:text-white transition-all shadow-sm">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground/60 mb-1">Phone</p>
              <p className="font-semibold text-lg text-foreground">+91 91528 05940</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-accent-dark group-hover:scale-110 group-hover:bg-accent-dark group-hover:text-white transition-all shadow-sm">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground/60 mb-1">Email</p>
              <a href="mailto:anuragdubey23004@gmail.com" className="font-semibold text-lg text-foreground hover:text-accent-dark transition-colors">
                anuragdubey23004@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Social Links */}
        <div className="mt-12 pt-10 border-t border-foreground/10 flex justify-center gap-6 relative z-10">
          <a
            href="github.com/andyouranurag"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all hover:scale-110 hover:-translate-y-1 shadow-sm"
          >
            <Github size={24} />
          </a>
          <a
            href="linkedin.com/in/andyouranurag"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass flex items-center justify-center text-foreground hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all hover:scale-110 hover:-translate-y-1 shadow-sm border-transparent"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
