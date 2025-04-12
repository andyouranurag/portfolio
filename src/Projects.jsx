import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/andyouranurag/repos');
        const data = await res.json();

        const validRepos = data.filter(repo => !repo.fork);

        const reposWithReadme = await Promise.all(
          validRepos.map(async repo => {
            const readmeRes = await fetch(`https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/main/README.md`);
            const readme = readmeRes.ok ? await readmeRes.text() : "No README found.";
            return { ...repo, readme };
          })
        );

        setRepos(reposWithReadme);
      } catch (error) {
        console.error("Error fetching GitHub data", error);
      }
    };

    fetchRepos();
  }, []);

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="projects-container">
      <h2 className="projects-heading">My GitHub Projects</h2>

      <input
        type="text"
        className="project-search"
        placeholder="Search by project name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="projects-grid">
        {filteredRepos.map((repo) => (
          <div key={repo.id} className="project-card">
            <h3>{repo.name}</h3>
            <div className="readme-preview">
              <ReactMarkdown>{repo.readme}</ReactMarkdown>
            </div>
            <a href={repo.html_url} target="_blank" rel="noreferrer" className="project-link">
              🔗 View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
