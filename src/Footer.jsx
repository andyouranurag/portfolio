import React from "react";
import { ArrowUp, Github, Linkedin, Envelope } from "react-bootstrap-icons";
import { personalInfo } from "./data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer className="modern-footer">
        <div className="footer-content">
          <div>
            <p className="footer-text">
              © {new Date().getFullYear()} <strong style={{ color: "#f8fafc" }}>{personalInfo.name}</strong>. All rights reserved.
            </p>
            <p style={{ margin: "0.25rem 0 0", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              AI/ML Engineer & Researcher • Greater Noida & Mumbai, India
            </p>
          </div>

          <div className="footer-links">
            <a href="#home" className="footer-link-item">Home</a>
            <a href="#experience" className="footer-link-item">Experience</a>
            <a href="#projects" className="footer-link-item">Projects</a>
            <a href="#publications" className="footer-link-item">Publications</a>
            <a href="#resume" className="footer-link-item">Resume</a>
            <a href="#contact" className="footer-link-item">Contact</a>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-item"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-link-item"
              aria-label="Email"
            >
              <Envelope size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        className="back-to-top-btn"
        aria-label="Back to Top"
        title="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
};

export default Footer;
