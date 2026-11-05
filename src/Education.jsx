import React from "react";
import { 
  Mortarboard, 
  Heart, 
  Calendar3, 
  GeoAlt, 
  PatchCheck
} from "react-bootstrap-icons";
import { education, certifications, volunteering } from "./data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="portfolio-section">
      <div className="section-container">
        <div className="section-badge">
          <Mortarboard size={14} /> Academic Background
        </div>
        <h2 className="section-title">Education & Certifications</h2>
        <p className="section-subtitle">
          Strong academic foundations in AI and Data Science backed by industry certifications and leadership initiatives.
        </p>

        <div className="edu-cert-grid">
          {/* Education Column */}
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Mortarboard style={{ color: "var(--accent-indigo)" }} /> Degrees & Academia
            </h3>

            {education.map((edu, idx) => (
              <div key={idx} className="glass-panel edu-card-item">
                <h4 className="edu-degree">{edu.degree}</h4>
                <div className="edu-school">{edu.institution}</div>
                <div className="edu-year-loc" style={{ marginBottom: "0.75rem" }}>
                  <span>
                    <Calendar3 size={12} style={{ marginRight: 4 }} /> {edu.duration}
                  </span>
                  <span style={{ margin: "0 0.5rem" }}>•</span>
                  <span>
                    <GeoAlt size={12} style={{ marginRight: 4 }} /> {edu.location}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                  {edu.highlights}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <PatchCheck style={{ color: "var(--accent-cyan)" }} /> Professional Certifications
            </h3>

            <div className="cert-card-grid">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-chip">
                  <div>
                    <div className="cert-name">{cert.title}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.5rem", fontFamily: "var(--font-mono)" }}>
                    {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Volunteering Card */}
        <div className="volunteering-card">
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", flexWrap: "wrap" }}>
            <div 
              style={{ 
                width: 48, 
                height: 48, 
                borderRadius: 12, 
                background: "rgba(244, 63, 94, 0.15)", 
                color: "#fb7185", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                fontSize: "1.4rem" 
              }}
            >
              <Heart />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.25rem" }}>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                  {volunteering.role} – {volunteering.organization}
                </h4>
                <span className="exp-duration-badge" style={{ color: "#fb7185", borderColor: "rgba(244, 63, 94, 0.3)" }}>
                  {volunteering.period}
                </span>
              </div>
              <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                {volunteering.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
