import React from "react";
import web from "../src/images/homepage2.png";
import { NavLink } from "react-router-dom";
import Common from "./common";

const About = () => {
  return (
    <>
      <div className="container-fluid about-details animate__animated animate__fadeIn">
        <div className="row">
          <div className="col-md-6">
            <h2 className="about-heading animate__animated animate__slideInLeft">
              About Me
            </h2>
            <p className="about-para animate__animated animate__slideInLeft animate__delay-1s animate__slow">
              I'm Anurag dubey, a student with a passion for Full Stack Developer.
              Currently at TYBSc DataScience from Sies college.
              I have a strong foundation in HTML, CSS, JavaScript, React, Node.js, MongoDB,
              and other technologies. I'm excited to learn and grow as a developer.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="social-links animate__animated animate__slideInRight">
              <li>
                <a
                  href="https://www.linkedin.com/in/anurag-dubey-6a57a7279"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a><b>LinkedIn</b>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/andyouranurag?igsh=MWlldjZmeTgxbW9lMg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a><b>Instagram</b>
              </li>
              <li>
                <a
                  href="https://github.com/andyouranurag"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a><b>GitHub</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;