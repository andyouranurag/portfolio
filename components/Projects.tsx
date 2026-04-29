"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const GITHUB_USERNAME = "andyouranurag"; // User should replace this with actual username

export default function Projects() {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fallback mock data if API fails or username is incorrect
        const mockData = [
          {
            id: 1,
            name: "Flood Prediction System",
            description: "Advanced ML/DL models (XGBoost, LSTM) integrated with real-time API telemetry for early flood warnings.",
            html_url: "#",
            homepage: "",
            topics: ["ml", "python", "streamlit"],
            stargazers_count: 12,
            forks_count: 4,
            language: "Python"
          },
          {
            id: 2,
            name: "E-Commerce Dashboard",
            description: "Full-stack MERN dashboard for managing products, orders, and viewing data analytics.",
            html_url: "#",
            homepage: "#",
            topics: ["react", "nodejs", "mongodb", "web"],
            stargazers_count: 5,
            forks_count: 1,
            language: "TypeScript"
          },
          {
            id: 3,
            name: "Sales Data Analysis",
            description: "Comprehensive Power BI dashboard analyzing global sales data to identify trends and KPIs.",
            html_url: "#",
            homepage: "",
            topics: ["data", "power-bi", "sql"],
            stargazers_count: 8,
            forks_count: 2,
            language: "SQL"
          }
        ];

        // Try fetching actual data
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        if (res.ok) {
          const data = await res.json();
          // Map API response to our mock structure format if needed, or use directly if valid
          if (data && data.length > 0) {
            setProjects(data);
          } else {
            setProjects(mockData as any);
          }
        } else {
          setProjects(mockData as any);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filters = ["All", "AI/ML", "Web", "Data"];

  const filteredProjects = projects.filter(project => {
    if (filter === "All") return true;
    const topics = project.topics?.join(" ").toLowerCase() || "";
    const lang = project.language?.toLowerCase() || "";
    const desc = project.description?.toLowerCase() || "";
    const searchString = `${topics} ${lang} ${desc}`;

    if (filter === "AI/ML") return searchString.includes("ml") || searchString.includes("ai") || searchString.includes("python");
    if (filter === "Web") return searchString.includes("react") || searchString.includes("web") || searchString.includes("node");
    if (filter === "Data") return searchString.includes("data") || searchString.includes("sql") || searchString.includes("power");
    return true;
  });

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">Work</span>
          </motion.h2>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 p-1 glass rounded-full w-fit"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f
                ? "bg-foreground text-background shadow-sm"
                : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
            >
              {f}
            </button>
          ))}
        </motion.div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-80 glass rounded-3xl"></div>
          ))}
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative h-full flex flex-col glass rounded-3xl overflow-hidden border border-glass-border hover:border-accent/30 transition-colors"
              >
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                      <Github className="w-6 h-6 text-foreground/80 group-hover:text-accent transition-colors" />
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground/60">
                      <span className="flex items-center gap-1"><Star size={14} /> {project.stargazers_count}</span>
                      <span className="flex items-center gap-1"><GitFork size={14} /> {project.forks_count}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-1">{project.name}</h3>
                  <p className="text-foreground/60 text-sm mb-6 flex-grow line-clamp-3">
                    {project.description || "No description provided."}
                  </p>

                  <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.topics && project.topics.slice(0, 3).map((topic, idx) => (
                        <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/70">
                          {topic}
                        </span>
                      ))}
                      {(!project.topics || project.topics.length === 0) && project.language && (
                        <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/70">
                          {project.language}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-accent flex items-center gap-1.5 transition-colors">
                        <Github size={16} /> Code
                      </a>
                      {project.homepage && (
                        <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-accent flex items-center gap-1.5 transition-colors">
                          <ExternalLink size={16} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
