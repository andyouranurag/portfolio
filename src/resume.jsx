import React, { useState } from "react";
import { 
  FileEarmarkText, 
  Download, 
  BoxArrowUpRight, 
  Printer,
  Check2, 
  Clipboard,
  Eye,
  FilePdf
} from "react-bootstrap-icons";
import { 
  personalInfo, 
  education, 
  experience, 
  publications, 
  volunteering 
} from "./data/portfolioData";

const Resume = () => {
  const [viewMode, setViewMode] = useState("structured"); // "structured" | "embed"
  const [copied, setCopied] = useState(false);

  const copyContact = () => {
    const text = `${personalInfo.name} | ${personalInfo.phone} | ${personalInfo.email} | ${personalInfo.linkedin}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="portfolio-section" style={{ background: "rgba(12, 18, 32, 0.4)" }}>
      <div className="section-container">
        <div className="section-badge">
          <FileEarmarkText size={14} /> Curriculum Vitae
        </div>
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">
          Updated academic background, internships, publications, and technical skills.
        </p>

        {/* Action Bar */}
        <div className="resume-action-bar">
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button
              onClick={() => setViewMode("structured")}
              className={`skill-tab-btn ${viewMode === "structured" ? "active" : ""}`}
            >
              <Eye size={14} style={{ marginRight: 6 }} /> Interactive Digital Resume
            </button>
            <button
              onClick={() => setViewMode("embed")}
              className={`skill-tab-btn ${viewMode === "embed" ? "active" : ""}`}
            >
              <FilePdf size={14} style={{ marginRight: 6 }} /> Document PDF Preview
            </button>
          </div>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
            <button
              onClick={copyContact}
              className="btn-secondary-glass"
              style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
            >
              {copied ? <Check2 size={15} style={{ color: "#34d399" }} /> : <Clipboard size={14} />}
              {copied ? "Copied Info!" : "Copy Contact"}
            </button>

            <button
              onClick={handlePrint}
              className="btn-secondary-glass"
              style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
            >
              <Printer size={14} /> Print / Save
            </button>

            <a
              href={personalInfo.resumeDriveDownload}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow"
              style={{ padding: "0.55rem 1.25rem", fontSize: "0.88rem" }}
            >
              <Download size={15} /> Download PDF
            </a>

            <a
              href={personalInfo.resumeDriveView}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-glass"
              style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
            >
              <BoxArrowUpRight size={14} /> Open in Drive
            </a>
          </div>
        </div>

        {/* View Mode 1: High-Fidelity Structured Digital Resume (matching PDF) */}
        {viewMode === "structured" ? (
          <div className="resume-paper-view">
            {/* Header */}
            <div className="resume-paper-header">
              <h1 className="resume-paper-name">{personalInfo.name.toUpperCase()}</h1>
              <div className="resume-paper-contacts">
                <span>{personalInfo.phone}</span>
                <span>•</span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                <span>•</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <span>•</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
                <span>•</span>
                <a href={personalInfo.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
              </div>
              <div style={{ marginTop: "0.35rem", fontSize: "0.88rem", color: "#6b7280" }}>
                {personalInfo.location}
              </div>
            </div>

            {/* Education */}
            <div className="resume-paper-section">
              <h2 className="resume-paper-section-title">EDUCATION</h2>
              {education.map((edu, idx) => (
                <div key={idx} className="resume-paper-item">
                  <div className="resume-paper-item-header">
                    <span className="resume-paper-item-title">{edu.institution}</span>
                    <span className="resume-paper-item-date">{edu.duration}</span>
                  </div>
                  <div className="resume-paper-item-header">
                    <span className="resume-paper-item-org">{edu.degree}</span>
                    <span className="resume-paper-item-date">{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="resume-paper-section">
              <h2 className="resume-paper-section-title">EXPERIENCE</h2>
              {experience.map((exp, idx) => (
                <div key={idx} className="resume-paper-item">
                  <div className="resume-paper-item-header">
                    <span className="resume-paper-item-title">{exp.role}</span>
                    <span className="resume-paper-item-date">{exp.period}</span>
                  </div>
                  <div className="resume-paper-item-header">
                    <span className="resume-paper-item-org">{exp.company}</span>
                    <span className="resume-paper-item-date">{exp.location}</span>
                  </div>
                  <ul className="resume-paper-bullets">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Research Publications */}
            <div className="resume-paper-section">
              <h2 className="resume-paper-section-title">RESEARCH PUBLICATIONS</h2>
              {publications.map((pub, idx) => (
                <div key={idx} className="resume-paper-item">
                  <div className="resume-paper-item-header">
                    <span className="resume-paper-item-title">{pub.title}</span>
                    <span className="resume-paper-item-date">{pub.date}</span>
                  </div>
                  <div style={{ fontSize: "0.92rem", color: "#4b5563", fontStyle: "italic", marginBottom: "0.2rem" }}>
                    {pub.authors}
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#374151" }}>
                    {pub.venue}
                  </div>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="resume-paper-section">
              <h2 className="resume-paper-section-title">PROJECTS</h2>
              <div className="resume-paper-item">
                <div className="resume-paper-item-header">
                  <span className="resume-paper-item-title">
                    NUCLID – AI-Based Gamma Spectroscopy Analyzer
                  </span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: "0.85rem", color: "#2563eb", textDecoration: "none", fontWeight: 600 }}
                  >
                    Documentation
                  </a>
                </div>
                <ul className="resume-paper-bullets">
                  <li>
                    Engineered an AI/ML-driven gamma spectroscopy pipeline integrating spectral feature extraction, peak fitting, energy calibration, and automated nuclide identification from experimental detector data.
                  </li>
                  <li>
                    Designed an ML-assisted classification framework leveraging peak energies, intensities, and FWHM features with nuclear reference libraries to support data-driven isotope recognition and spectral analysis.
                  </li>
                  <li>
                    Applied scientific computing and machine learning techniques to develop a modular, data-driven solution for nuclear spectroscopy, with applications in radiation monitoring, nuclear security, and environmental analysis.
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="resume-paper-section">
              <h2 className="resume-paper-section-title">TECHNICAL SKILLS</h2>
              <div style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.7 }}>
                <p style={{ margin: "0 0 0.35rem" }}>
                  <strong>Programming: </strong> Python, Java, SQL, R
                </p>
                <p style={{ margin: "0 0 0.35rem" }}>
                  <strong>AI/ML: </strong> Machine Learning, Deep Learning, NLP, LLMs, Fine-Tuning, Model Distillation, RAG, Prompt Engineering
                </p>
                <p style={{ margin: "0 0 0.35rem" }}>
                  <strong>Data & Databases: </strong> Pandas, NumPy, SciPy, Scikit-learn, MySQL, PostgreSQL, MongoDB, Power BI
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Tools & Deployment: </strong> Git, Linux, VS Code, Streamlit, Hugging Face Spaces
                </p>
              </div>
            </div>

            {/* Leadership & Volunteering */}
            <div className="resume-paper-section">
              <h2 className="resume-paper-section-title">LEADERSHIP & VOLUNTEERING</h2>
              <div className="resume-paper-item">
                <div className="resume-paper-item-header">
                  <span className="resume-paper-item-title">Volunteer – {volunteering.organization}</span>
                  <span className="resume-paper-item-date">{volunteering.period}</span>
                </div>
                <p style={{ margin: "0.25rem 0 0", fontSize: "0.9rem", color: "#374151" }}>
                  {volunteering.description}
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="resume-paper-section" style={{ marginBottom: 0 }}>
              <h2 className="resume-paper-section-title">CERTIFICATIONS</h2>
              <div style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.6 }}>
                <span>Cloud Computing – NPTEL, IIT Kharagpur</span> • <span>Data Analytics Essentials – Cisco</span> • <span>Find Insights with AI – Cisco</span> • <span>Introduction to Modern AI – Cisco</span> • <span>Korea Business Culture (KBC) Training Program – KOSME-AU, Amity University (16+ Hours, Aug 2026)</span>
              </div>
            </div>
          </div>
        ) : (
          /* View Mode 2: Google Drive Embedded Preview */
          <div
            className="glass-panel"
            style={{
              width: "100%",
              maxWidth: "880px",
              height: "920px",
              margin: "0 auto",
              overflow: "hidden",
              borderRadius: "16px",
              padding: "0.5rem"
            }}
          >
            <iframe
              title="Anurag Dubey Resume Document"
              src={personalInfo.resumeDrivePreview}
              width="100%"
              height="100%"
              style={{ border: "none", borderRadius: "12px" }}
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
