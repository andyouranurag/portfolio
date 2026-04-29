"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useState, useEffect } from "react";

const roles = ["AI Engineer", "Data Scientist", "Full Stack Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-12">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-8"
      >
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-dark">
              Intelligent Systems
            </span>
            <br /> with AI & Data
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
            I'm <span className="font-semibold text-foreground">Anurag Dubey</span> — a passionate builder specializing in bridging the gap between complex data models and beautiful, functional web applications.
          </p>

          <div className="h-8 flex items-center text-xl font-medium text-foreground/80">
            <span className="mr-2">I am a</span>
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-accent font-semibold"
            >
              {roles[roleIndex]}
            </motion.span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background rounded-full font-medium overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light via-accent to-accent-dark opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </a>

          <a
            href="#resume"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border border-foreground/20 text-foreground rounded-full font-medium hover:bg-foreground/5 transition-all"
          >
            Resume
            <Download size={18} />
          </a>
        </div>
      </motion.div>

      {/* Right Image/Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 relative flex justify-center"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {/* Animated Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-light via-accent to-accent-dark rounded-full blur-3xl opacity-30 animate-pulse"></div>

          {/* Image Container */}
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-glass-border glass">
            {/* Place your image as 'profile.jpg' inside the 'public' folder */}
            <img
              src="/profile.png"
              alt="Anurag Dubey"
              className="w-full h-full object-cover z-10 relative"
              onError={(e) => {
                // Fallback if image is not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML += '<div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center"><span class="text-8xl font-black text-white/5">AD</span></div>';
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
