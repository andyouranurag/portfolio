import React, { useState } from "react";
import { 
  Cpu, 
  CodeSlash, 
  Database, 
  Terminal, 
  Search,
  CheckCircle
} from "react-bootstrap-icons";
import { technicalSkills } from "./data/portfolioData";

const deviconMap = {
  "Python": "devicon-python-plain colored",
  "Java": "devicon-java-plain colored",
  "SQL": "devicon-mysql-plain colored",
  "R": "devicon-r-plain colored",
  "JavaScript": "devicon-javascript-plain colored",
  "Pandas": "devicon-pandas-plain colored",
  "NumPy": "devicon-numpy-plain colored",
  "SciPy": "devicon-python-plain colored",
  "Scikit-learn": "devicon-scikitlearn-plain colored",
  "MySQL": "devicon-mysql-plain colored",
  "PostgreSQL": "devicon-postgresql-plain colored",
  "MongoDB": "devicon-mongodb-plain colored",
  "Git": "devicon-git-plain colored",
  "Linux": "devicon-linux-plain colored",
  "VS Code": "devicon-vscode-plain colored",
  "Streamlit": "devicon-streamlit-plain colored",
  "Docker": "devicon-docker-plain colored"
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...technicalSkills.map((c) => c.category)];

  const filteredCategories = technicalSkills
    .filter((cat) => selectedCategory === "All" || cat.category === selectedCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
    }))
    .filter((cat) => cat.skills.length > 0);

  const getCategoryIcon = (icon) => {
    switch (icon) {
      case "cpu":
        return <Cpu size={20} style={{ color: "var(--accent-indigo)" }} />;
      case "code-slash":
        return <CodeSlash size={20} style={{ color: "var(--accent-cyan)" }} />;
      case "database":
        return <Database size={20} style={{ color: "var(--accent-emerald)" }} />;
      case "terminal":
        return <Terminal size={20} style={{ color: "var(--accent-violet)" }} />;
      default:
        return <Cpu size={20} />;
    }
  };

  return (
    <section id="skills" className="portfolio-section" style={{ background: "rgba(12, 18, 32, 0.4)" }}>
      <div className="section-container">
        <div className="section-badge">
          <Cpu size={14} /> Core Competencies
        </div>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Specialized expertise across machine learning, large language models, data engineering, and scientific computing.
        </p>

        {/* Filter Controls */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <div className="skills-nav-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`skill-tab-btn ${selectedCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ position: "relative", width: "100%", maxWidth: "280px" }}>
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="github-search-input"
              style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
            />
            <Search
              size={13}
              style={{
                position: "absolute",
                right: "0.85rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-muted)"
              }}
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-category-grid">
          {filteredCategories.map((cat, idx) => (
            <div key={idx} className="glass-panel skill-category-card">
              <h3 className="skill-cat-title">
                {getCategoryIcon(cat.icon)}
                <span>{cat.category}</span>
              </h3>

              <div className="skills-pills-wrap">
                {cat.skills.map((skill, sIdx) => {
                  const deviconClass = deviconMap[skill];
                  return (
                    <div key={sIdx} className="skill-pill">
                      {deviconClass ? (
                        <i className={deviconClass}></i>
                      ) : (
                        <CheckCircle size={14} style={{ color: "var(--accent-cyan)" }} />
                      )}
                      <span>{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
