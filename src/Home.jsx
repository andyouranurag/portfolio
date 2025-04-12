// Home.jsx
import React, { useEffect } from "react"; // ✅ Add useEffect here
import { NavLink } from "react-router-dom";
import "./App.css";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  
  return (
    <section className="home-section">
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
