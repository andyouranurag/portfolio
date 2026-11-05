import React from "react";
import { Briefcase, Calendar3, GeoAlt } from "react-bootstrap-icons";
import { experience } from "./data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="portfolio-section">
      <div className="section-container">
        <div className="section-badge">
          <Briefcase size={14} /> Career & Research
        </div>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          Proven experience delivering specialized AI solutions, clinical NLP workflows, scientific computing tools, and high-performance data systems.
        </p>

        <div className="timeline-container">
          {experience.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot-inner"></span>
              </div>

              <div className="glass-panel timeline-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{item.role}</h3>
                    <div className="exp-company">
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
                    <span className="exp-duration-badge">
                      <Calendar3 size={13} style={{ color: "var(--accent-indigo)" }} />
                      {item.period}
                    </span>
                    <span className="exp-duration-badge">
                      <GeoAlt size={13} style={{ color: "var(--accent-cyan)" }} />
                      {item.location}
                    </span>
                  </div>
                </div>

                <ul className="exp-bullets">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {item.tech.map((t, tIdx) => (
                    <span key={tIdx} className="exp-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
