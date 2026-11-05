import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Envelope, 
  Cpu, 
  Terminal, 
  GeoAlt
} from "react-bootstrap-icons";
import { personalInfo, stats } from "./data/portfolioData";

const Home = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 20;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="hero-section" style={{ paddingTop: "5rem" }}>
      <div className="section-container" style={{ width: "100%" }}>
        <div className="hero-grid">
          {/* Left Column: Intro & Call to Action */}
          <div>
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              {personalInfo.statusBadge}
            </div>

            <h1 className="hero-headline">
              Engineering Intelligent Systems <br />
              <span className="gradient-name">{personalInfo.name}</span>
            </h1>

            {/* Rotating Subtitle */}
            <div style={{ minHeight: "36px", marginBottom: "1rem" }}>
              <div 
                style={{ 
                  color: "var(--accent-cyan)", 
                  fontFamily: "var(--font-mono)", 
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                <Cpu size={18} style={{ color: "var(--accent-indigo)" }} />
                <span>{personalInfo.subtitles[subtitleIndex]}</span>
              </div>
            </div>

            <div className="hero-roles">
              <span className="role-tag featured">AI/ML Engineer</span>
              <span className="role-tag">LLM Workflows & PEFT</span>
              <span className="role-tag">Clinical NLP</span>
              <span className="role-tag">Nuclear Spectroscopy AI</span>
              <span className="role-tag">M.Sc. AI Scholar</span>
            </div>

            <p className="hero-bio">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <button 
                onClick={() => scrollTo("experience")} 
                className="btn-primary-glow"
                style={{ cursor: "pointer" }}
              >
                Explore Experience <ArrowRight size={16} />
              </button>

              <button 
                onClick={() => scrollTo("resume")} 
                className="btn-secondary-glass"
                style={{ cursor: "pointer" }}
              >
                <Download size={16} /> View Resume
              </button>

              <button 
                onClick={() => scrollTo("contact")} 
                className="btn-secondary-glass"
                style={{ cursor: "pointer" }}
              >
                <Envelope size={16} /> Get in Touch
              </button>
            </div>

            {/* Quick Contacts / Social Icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <GeoAlt size={15} style={{ color: "var(--accent-cyan)" }} />
                <span>{personalInfo.location}</span>
              </div>
              <div style={{ display: "flex", gap: "0.85rem", alignItems: "center" }}>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: "var(--text-secondary)", fontSize: "1.2rem", transition: "color 0.2s" }}
                  aria-label="GitHub Profile"
                >
                  <Github />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: "var(--text-secondary)", fontSize: "1.2rem", transition: "color 0.2s" }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  style={{ color: "var(--text-secondary)", fontSize: "1.2rem", transition: "color 0.2s" }}
                  aria-label="Send Email"
                >
                  <Envelope />
                </a>
              </div>
            </div>

            {/* Key Stats Counter Row */}
            <div className="hero-stats-grid">
              {stats.map((s, idx) => (
                <div key={idx} className="stat-item">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code / AI Workstation Card */}
          <div>
            <div className="hero-terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="terminal-title">anurag_dubey_ai_agent.py</div>
                <Terminal size={14} style={{ color: "var(--text-muted)" }} />
              </div>

              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="t-comment"># AI/ML Engineering & Research Stack</span>
                </div>
                <div className="terminal-line">
                  <span className="t-prompt">&gt;&gt;&gt; </span>
                  <span className="t-cmd">import</span> torch, transformers, peft, scipy
                </div>
                <div className="terminal-line">
                  <span className="t-prompt">&gt;&gt;&gt; </span>
                  <span className="t-cmd">from</span> stoma_ai <span className="t-cmd">import</span> ClinicalNLPWorkflow
                </div>
                <div className="terminal-line">
                  <span className="t-prompt">&gt;&gt;&gt; </span>
                  <span className="t-cmd">from</span> nuclid <span className="t-cmd">import</span> GammaSpectroscopyAnalyzer
                </div>
                <div className="terminal-line" style={{ marginTop: "0.75rem" }}>
                  <span className="t-key">engineer</span> = &#123;
                </div>
                <div className="terminal-line" style={{ paddingLeft: "1.25rem" }}>
                  <span className="t-key">"name"</span>: <span className="t-string">"{personalInfo.name}"</span>,
                </div>
                <div className="terminal-line" style={{ paddingLeft: "1.25rem" }}>
                  <span className="t-key">"education"</span>: <span className="t-string">"M.Sc. AI & Data Analytics (Amity)"</span>,
                </div>
                <div className="terminal-line" style={{ paddingLeft: "1.25rem" }}>
                  <span className="t-key">"current_role"</span>: <span className="t-string">"AI/ML Intern @ SaralPixel Labs"</span>,
                </div>
                <div className="terminal-line" style={{ paddingLeft: "1.25rem" }}>
                  <span className="t-key">"focus_domains"</span>: [
                </div>
                <div className="terminal-line" style={{ paddingLeft: "2.5rem" }}>
                  <span className="t-string">"LLM Fine-Tuning (PEFT, QLoRA)"</span>,
                </div>
                <div className="terminal-line" style={{ paddingLeft: "2.5rem" }}>
                  <span className="t-string">"Clinical NLP & Dialogue Summarization"</span>,
                </div>
                <div className="terminal-line" style={{ paddingLeft: "2.5rem" }}>
                  <span className="t-string">"Nuclear Isotope Spectroscopy (NUCLID)"</span>,
                </div>
                <div className="terminal-line" style={{ paddingLeft: "2.5rem" }}>
                  <span className="t-string">"Inference Benchmarking & Quantization"</span>
                </div>
                <div className="terminal-line" style={{ paddingLeft: "1.25rem" }}>
                  ],
                </div>
                <div className="terminal-line" style={{ paddingLeft: "1.25rem" }}>
                  <span className="t-key">"publications"</span>: <span className="t-num">1</span>, <span className="t-comment"># ICNPA 2026 DU</span>
                </div>
                <div className="terminal-line">
                  &#125;
                </div>
                <div className="terminal-line" style={{ marginTop: "0.75rem" }}>
                  <span className="t-prompt">&gt;&gt;&gt; </span>
                  <span className="t-cmd">engineer</span>.status()
                </div>
                <div className="terminal-line" style={{ color: "#34d399" }}>
                  =&gt; Ready for High-Impact AI & ML Challenges
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
