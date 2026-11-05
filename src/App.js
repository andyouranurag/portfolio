import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Publications from "./Publications";
import Projects from "./Projects";
import Skills from "./skills";
import Education from "./Education";
import Resume from "./resume";
import Contact from "./Contact";
import Loader from "./Loader";

import { initGA, logPageView } from "./utils/analytics";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    try {
      initGA();
    } catch (e) {
      console.warn("Analytics init skipped", e);
    }
  }, []);

  useEffect(() => {
    try {
      logPageView(location.pathname + location.search);
    } catch (e) {
      // ignore
    }

    const path = location.pathname.replace(/^\//, "");
    if (path) {
      setTimeout(() => {
        const el = document.getElementById(path);
        if (el) {
          const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 20;
          window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      }, 300);
    }
  }, [location]);

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <div className="app-container">
          {/* ── Background: Particle Canvas + Ambient Orbs ── */}
          <div className="bg-ambient-layer">
            <div className="ambient-orb ambient-orb-1"></div>
            <div className="ambient-orb ambient-orb-2"></div>
            <div className="ambient-orb ambient-orb-3"></div>
            {/* Static geometric grid overlay */}
            <div className="bg-grid-overlay"></div>
            {/* Floating particle dots (CSS-only) */}
            <div className="particle-field">
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} className={`particle p${i + 1}`}></span>
              ))}
            </div>
          </div>

          {/* Floating hamburger nav — no traditional header */}
          <Navbar />

          <main className="main-content" style={{ padding: 0, paddingTop: 0 }}>
            <Home />
            <About />
            <Experience />
            <Publications />
            <Projects />
            <Skills />
            <Education />
            <Resume />
            <Contact />
          </main>

          {/* Minimal inline footer (no separate Footer component) */}
          <footer className="minimal-footer">
            <span>© {new Date().getFullYear()} Anurag Dubey · AI/ML Engineer &amp; Researcher · Greater Noida, India</span>
          </footer>
        </div>
      )}
    </>
  );
};

export default App;
