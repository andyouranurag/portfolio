import React, { useState, useEffect, useRef } from "react";
import { List, X, Download, ArrowUpRight, Github, Linkedin, Envelope } from "react-bootstrap-icons";
import { personalInfo } from "./data/portfolioData";

const navItems = [
  { id: "home", label: "Home", emoji: "🏠" },
  { id: "about", label: "About Me", emoji: "👤" },
  { id: "experience", label: "Experience", emoji: "💼" },
  { id: "publications", label: "Publications", emoji: "📄" },
  { id: "projects", label: "Projects", emoji: "🚀" },
  { id: "skills", label: "Skills", emoji: "⚡" },
  { id: "education", label: "Education", emoji: "🎓" },
  { id: "resume", label: "Resume", emoji: "📋" },
  { id: "contact", label: "Contact", emoji: "✉️" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const scrollPosition = window.scrollY + 220;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close menu if click outside the drawer */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  /* Prevent body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = el.getBoundingClientRect().top + window.pageYOffset - 20;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <>
      {/* Floating Hamburger Button — only visible element in top-right */}
      <button
        className={`hamburger-fab ${menuOpen ? "open" : ""} ${scrolled ? "scrolled" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        title={menuOpen ? "Close" : "Menu"}
      >
        <span className="hamburger-icon-wrap">
          {menuOpen ? <X size={22} /> : <List size={22} />}
        </span>
        {!menuOpen && (
          <span className="hamburger-pulse-ring"></span>
        )}
      </button>

      {/* Full-screen overlay backdrop */}
      <div
        className={`nav-overlay-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-in Drawer */}
      <div
        ref={drawerRef}
        className={`nav-drawer ${menuOpen ? "open" : ""}`}
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-brand">
            <span className="drawer-brand-badge">AD</span>
            <div>
              <div className="drawer-brand-name">{personalInfo.name}</div>
              <div className="drawer-brand-role">AI/ML Engineer &amp; Researcher</div>
            </div>
          </div>
          <button
            className="drawer-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="drawer-nav">
          <div className="drawer-nav-label">Navigation</div>
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`drawer-nav-item ${activeSection === item.id ? "active" : ""}`}
              style={{ animationDelay: menuOpen ? `${idx * 0.04}s` : "0s" }}
            >
              <span className="drawer-nav-emoji">{item.emoji}</span>
              <span className="drawer-nav-label-text">{item.label}</span>
              {activeSection === item.id && (
                <span className="drawer-nav-active-dot"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="drawer-socials">
          <div className="drawer-nav-label" style={{ marginBottom: "0.75rem" }}>Connect</div>
          <div className="drawer-social-row">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="drawer-social-btn" title="GitHub">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="drawer-social-btn" title="LinkedIn">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="drawer-social-btn" title="Email">
              <Envelope size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="drawer-footer">
          <a
            href={personalInfo.resumeDriveDownload}
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-cv-btn"
          >
            <Download size={16} /> Download CV <ArrowUpRight size={14} />
          </a>
          <p className="drawer-footer-credit">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
