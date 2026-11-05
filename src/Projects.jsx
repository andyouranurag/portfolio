import React, { useState, useEffect } from "react";
import { 
  CodeSlash, 
  Github, 
  ArrowUpRight, 
  Search, 
  Book,
  ArrowRightCircle
} from "react-bootstrap-icons";
import { flagshipProjects, personalInfo } from "./data/portfolioData";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/andyouranurag/repos?sort=updated&per_page=12");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            const nonForks = data.filter((repo) => !repo.fork);
            setRepos(nonForks);
          }
        }
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
      } finally {
        setLoadingRepos(false);
      }
    };

    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (r.description && r.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="projects" className="portfolio-section">
      <div className="section-container">
        <div className="section-badge">
          <CodeSlash size={14} /> Selected Works
        </div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          End-to-end AI systems, scientific radiation analyzers, and open-source contributions.
        </p>

        {/* Flagship Projects Grid */}
        <div className="projects-featured-grid">
          {flagshipProjects.map((p) => (
            <div key={p.id} className="glass-panel project-flagship-card">
              <div className="project-top">
                <div className="project-header-meta">
                  <span className="project-cat-badge">{p.category}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--accent-indigo)", fontWeight: 600 }}>
                    ★ {p.badge}
                  </span>
                </div>

                <h3 className="project-title">{p.title}</h3>
                <p style={{ color: "var(--accent-cyan)", fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.75rem" }}>
                  {p.subtitle}
                </p>
                <p className="project-desc">{p.description}</p>

                <ul className="project-key-points">
                  {p.keyPoints.map((kp, kpIdx) => (
                    <li key={kpIdx}>{kp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="project-tech-tags">
                  {p.tech.map((t, tIdx) => (
                    <span key={tIdx} className="project-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links-row">
                  <a
                    href={p.docLink || personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-link"
                  >
                    <Github size={15} /> View Code
                  </a>

                  {p.id === "nuclid" && (
                    <a
                      href="#publications"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById("publications");
                        if (el) {
                          const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
                          window.scrollTo({ top, behavior: "smooth" });
                        }
                      }}
                      className="project-btn-link"
                      style={{ background: "rgba(6, 182, 212, 0.1)", borderColor: "rgba(6, 182, 212, 0.3)" }}
                    >
                      <Book size={14} /> Research Paper
                    </a>
                  )}

                  {p.id === "supplyshield" && p.viewMoreLink && (
                    <a
                      href={p.viewMoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn-link"
                      style={{ background: "rgba(99, 102, 241, 0.12)", borderColor: "rgba(99, 102, 241, 0.35)" }}
                    >
                      <ArrowRightCircle size={14} /> Workforce Attrition Analytics
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Explorer */}
        <div className="github-repos-header">
          <div>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 700, color: "#ffffff", margin: "0 0 0.4rem" }}>
              GitHub Repositories
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>
              Live public repositories from{" "}
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-cyan)" }}>
                @andyouranurag
              </a>
            </p>
          </div>

          <div style={{ position: "relative", width: "100%", maxWidth: "340px" }}>
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="github-search-input"
            />
            <Search
              size={14}
              style={{
                position: "absolute",
                right: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-muted)"
              }}
            />
          </div>
        </div>

        {loadingRepos ? (
          <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
            Loading GitHub repositories...
          </div>
        ) : filteredRepos.length > 0 ? (
          <div className="github-cards-grid">
            {filteredRepos.map((repo) => (
              <div key={repo.id} className="glass-panel repo-card">
                <div>
                  <div className="repo-name">
                    <CodeSlash size={16} style={{ color: "var(--accent-indigo)" }} />
                    <span style={{ wordBreak: "break-all" }}>{repo.name}</span>
                  </div>
                  <p className="repo-desc">
                    {repo.description || "Experimental repository exploring AI, data systems, and machine learning pipelines."}
                  </p>
                </div>

                <div className="repo-footer">
                  <span className="repo-lang">
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent-cyan)", display: "inline-block" }}></span>
                    {repo.language || "Python / ML"}
                  </span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-link"
                  >
                    View Repo <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "2rem", color: "var(--text-muted)" }}>
            No repositories found matching &quot;{searchTerm}&quot;.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
