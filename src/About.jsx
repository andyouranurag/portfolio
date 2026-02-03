import React from "react";
// import  "animate.css";

const About = () => {
  return (
    <>
      <div id="about-header" className="about-section animate__animated animate__fadeIn py-5">
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
    <b className="highlight-degree">MSc Artificial Intelligence And Data Analytics</b> – 
    <a 
      href="https://siesascs.edu.in" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="highlight-college"
    >
      Amity University, Noida
    </a><br />
    <span>2025 - 2027</span>
  </li>
  <li>
    <li>
    <b className="highlight-degree">BSc in Data Science</b> – 
    <a 
      href="https://siesascs.edu.in" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="highlight-college"
    >
      SIES College of Arts, Science and Commerce, Mumbai
    </a><br />
    <span>2022 - 2025</span>
  </li>
  <li>
    <b className="highlight-degree">HSC (Science)</b> – 
    <a 
      href="https://rjcollege.edu.in/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="highlight-college"
    >
      Ramniranjan Jhunjhunwala College
    </a><br />
    <span>2020 - 2022</span>
  </li>
  <li>
    <b className="highlight-degree">SSC</b> – 
    <a 
      href="/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="highlight-college"
    >
      Dr. Datta Samant Madhyamik Vidyalaya
    </a><br />
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
