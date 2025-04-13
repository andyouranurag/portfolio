// Home.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <section className="home-section">
      {/* Floating Tech Logos */}
      <div className="floating-logos">
        <i className="devicon-python-plain logo logo1"></i>
        <i className="devicon-mysql-plain logo logo2"></i>
        <i className="devicon-nodejs-plain logo logo3"></i>
        <i className="devicon-react-original logo logo4"></i>
        <i className="devicon-html5-plain logo logo5"></i>
        <i className="devicon-css3-plain logo logo6"></i>
        <i className="devicon-javascript-plain logo logo7"></i>
        <i className="devicon-mongodb-plain logo logo8"></i>
        <i className="devicon-git-plain logo logo9"></i>
        <i className="devicon-github-original logo logo10"></i>
        <i className="devicon-vscode-plain logo logo11"></i>
        <i className="devicon-linux-plain logo logo12"></i>
        <i className="devicon-docker-plain logo logo13"></i>
      </div>

      <div className="content">
        <h1 className="heading">
          Welcome to <br />
          <span className="highlight">Anurag Portfolio</span>
        </h1>
        <p className="subtext">
          I am a Data Analyst, Python Developer, and Full Stack Developer with expertise in Python, SQL, Power BI, and the MERN stack.
        </p>
        <NavLink to="/skills" className="start-button">
          Get Started
        </NavLink>
      </div>
    </section>
  );
};

export default Home;
