import React from "react";
import { 
  HeartPulse, 
  Cpu, 
  Speedometer2, 
  Database,
  Award
} from "react-bootstrap-icons";

const About = () => {
  return (
    <section id="about" className="portfolio-section" style={{ background: "rgba(12, 18, 32, 0.4)" }}>
      <div className="section-container">
        <div className="section-badge">
          <Award size={14} /> Profile Overview
        </div>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Bridging cutting-edge Artificial Intelligence with domain-specific clinical systems and scientific radiation research.
        </p>

        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-narrative">
            <p>
              I am an <strong>AI/ML Engineer and Researcher</strong> currently pursuing my <strong>M.Sc. in Artificial Intelligence and Data Analytics</strong> at <strong>Amity University, Noida</strong> (2025 – 2027), holding a <strong>B.Sc. in Data Science</strong> from <strong>SIES College of Arts, Science and Commerce, Mumbai</strong> (2022 – 2025).
            </p>
            <p>
              At <strong>SaralPixel-AI Labs Pvt. Ltd. (Innovation under DIC-JMI)</strong>, I contribute to <strong>Stoma AI</strong>, engineering end-to-end LLM-powered clinical NLP pipelines. My work spans doctor–patient dialogue summarization, clinical entity extraction, prompt engineering, and <strong>Parameter-Efficient Fine-Tuning (PEFT/LoRA)</strong>, combined with model distillation and quantization for efficient clinical deployment.
            </p>
            <p>
              Prior to this, as a Research Intern at the <strong>Amity Institute of Nuclear Science and Technology (AINST)</strong>, I designed <strong>NUCLID</strong>, an AI-assisted gamma spectroscopy workstation for radioisotope identification and radiation analysis using scientific Python (SciPy) and Streamlit. This research contributed to our published work at the <strong>ICNPA 2026 conference</strong> at the University of Delhi.
            </p>
            <p>
              I bring a disciplined data-first mindset, having optimized database operations on 10,000+ records during my time at <strong>ET Edge (Times Group)</strong>, slashing query retrieval times by 25%.
            </p>
          </div>

          {/* 4 Core Pillars Grid — all 4 boxes properly wrapped */}
          <div className="about-highlights-grid">
            <div className="highlight-box">
              <div className="highlight-icon indigo">
                <HeartPulse />
              </div>
              <h3 className="highlight-title">Clinical NLP &amp; LLMs</h3>
              <p className="highlight-desc">
                Developing dialogue summarizers, medical entity extraction, and structured report synthesis for healthcare applications.
              </p>
            </div>

            <div className="highlight-box">
              <div className="highlight-icon cyan">
                <Cpu />
              </div>
              <h3 className="highlight-title">Nuclear &amp; Scientific AI</h3>
              <p className="highlight-desc">
                Engineering spectral preprocessing, Gaussian peak fitting, and nuclide identification algorithms in NUCLID.
              </p>
            </div>

            <div className="highlight-box">
              <div className="highlight-icon purple">
                <Speedometer2 />
              </div>
              <h3 className="highlight-title">PEFT &amp; Model Distillation</h3>
              <p className="highlight-desc">
                Fine-tuning open-source LLMs, knowledge distillation, INT4/INT8 quantization, and hardware-aware inference benchmarking.
              </p>
            </div>

            <div className="highlight-box">
              <div className="highlight-icon emerald">
                <Database />
              </div>
              <h3 className="highlight-title">Data Optimization &amp; ETL</h3>
              <p className="highlight-desc">
                Scaling database pipelines, SQL optimization, data structuring, and deduplication for robust data pipelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
