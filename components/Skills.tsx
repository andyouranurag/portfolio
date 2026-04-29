"use client";

import { motion } from "framer-motion";
import { BrainCircuit, LineChart, Code2, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit className="w-6 h-6 text-accent" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "Computer Vision"],
    description: "Building intelligent predictive models and deep learning architectures.",
  },
  {
    title: "Data Analytics",
    icon: <LineChart className="w-6 h-6 text-accent-light" />,
    skills: ["Python", "R", "SQL", "Power BI", "Weka"],
    description: "Extracting actionable insights from complex datasets.",
  },
  {
    title: "Full Stack Development",
    icon: <Code2 className="w-6 h-6 text-accent-dark" />,
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Express"],
    description: "Creating scalable and responsive web applications.",
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6 text-foreground/70" />,
    skills: ["Git", "Docker", "AWS", "Figma", "Jira"],
    description: "Utilizing modern tools for efficient development workflows.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">Expertise</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/70 max-w-2xl mx-auto text-lg"
        >
          A comprehensive toolkit spanning from deep learning architectures to modern web frameworks.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="glass rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-foreground/60 text-sm">{category.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/5 border border-foreground/10 text-foreground/80 group-hover:border-accent/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
