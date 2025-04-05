import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <section id="header">
      <div className="hero-container">
        <h1 className="hero-text">
          Welcome to <br />
          <span className="brand-name">Anurag Dubey</span>
        </h1>
        <p className="hero-subtext">
          I am a Data Analyst, Python Developer, and Full Stack Developer with expertise in Python, SQL, Power BI, and the MERN stack.
        </p>
        <NavLink to="/service" className="btn custom-btn">
          Get Started
        </NavLink>
      </div>
    </section>
  );
};

export default Home;
