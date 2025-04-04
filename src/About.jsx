import React from "react";
import web from "../src/images/homepage2.png";

import Common from "./common";
import "animate.css";

const About = () => {
  return (
    <>
      <div className="container about-section animate__animated animate__fadeIn">
        <div className="row align-items-center">
          {/* Left Section - About Details */}
          <div className="col-md-6 text-center text-md-start">
            <h2 className="about-heading animate__animated animate__slideInLeft">
              About Me
            </h2>
            <p className="about-para animate__animated animate__slideInLeft animate__delay-1s">
              I'm <b>Anurag Dubey</b>, a passionate Full Stack Developer currently pursuing 
              TYBSc Data Science from <b>SIES College</b>. I have a strong foundation in 
              <b> HTML, CSS, JavaScript, React, Node.js, and MongoDB</b>. I'm always eager 
              to learn and grow as a developer!
            </p>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="col-md-6 text-center animate__animated animate__slideInRight">
            <h3 className="social-heading">Connect with me</h3>
            <ul className="social-links">
              <li>
                <a
                  href="https://www.linkedin.com/in/anurag-dubey-6a57a7279"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-2x"></i> <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/andyouranurag"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-2x"></i> <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/andyouranurag"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x"></i> <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Common Section with Image */}
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
