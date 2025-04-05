import React from "react";
// import  "animate.css";

const About = () => {
  return (
    <>
      <div id="about-header" className="about-section animate__animated animate__fadeIn py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Section - About Details */}
            <div className="col-md-12 text-center text-md-start">
              <h2 className="about-heading animate__animated animate__slideInLeft">
                <span className="highlight-heading">About Me</span>
              </h2>
              <p className="about-para animate__animated animate__slideInLeft animate__delay-1s" >
                I'm <span className="highlight-name">Anurag Dubey</span>, a proactive and goal-oriented  <span className="highlight-role">Full Stack Developer</span> 
                Appearing Bsc Data Science at <span className="highlight-college">SIES College of Arts, Science and Commerce</span>. With expertise in 
                <span className="highlight-skills"> HTML, CSS, JavaScript, React, Node.js, and MongoDB</span>, I have built and deployed multiple 
                web applications, including <span className="highlight-projects">Dzenith and Utkarsha</span>. A natural leader in public relations and hospitality, 
                I excel at multi-tasking, problem-solving, and adapting to new challenges. Passionate about continuous learning, 
                I aim to leverage data-driven insights and cutting-edge technologies to create impactful solutions.
              </p>

              {/* Education Section */}
              <h3 className="mt-5 animate__animated animate__fadeInUp">
                <span className="highlight-heading">Education</span>
              </h3>
              <ul className="education-list animate__animated animate__fadeInUp animate__delay-1s">
                <li>
                  <b className="highlight-degree">BSc in Data Science</b> – <span className="highlight-college">SIES College of Arts, Science and Commerce, Mumbai</span><br />
                  <span>2022 - 2025</span>
                </li>
                <li>
                  <b className="highlight-degree">HSC (Science)</b> – <span className="highlight-college">Ramniranjan Jhunjhunwala College</span><br />
                  <span>2020 - 2022</span>
                </li>
                <li>
                  <b className="highlight-degree">SSC</b> – <span className="highlight-college">Dr. Datta Samant Madhyamik Vidyalaya</span><br />
                  <span>2008 - 2020</span>
                </li>
              </ul>

              {/* Certification Section */}
              <h3 className="mt-5 animate__animated animate__fadeInUp">
                <span className="highlight-heading">Certifications</span>
              </h3>
              <ul className="education-list animate__animated animate__fadeInUp animate__delay-1s">
                <li>
                  <b className="highlight-degree">Cloud Computing Certification</b> – From IIT Kharagpur through NPTEL<br />
                  <span>Jul-Oct 2024</span> {/* Update year if needed */}
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>    
    </>
  );
};

export default About;
