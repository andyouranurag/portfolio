import React, { useEffect } from "react";
import "./App.css";

const Contact = () => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <section className="contact-container">
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
        <h1 className="text-center">Contact Me</h1>
        <p className="text-center1">Feel free to reach out for collaborations or inquiries!</p>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>📍 Address:</strong> Mumbai, India</p>
          <p><strong>📞 Phone:</strong> +91-9152805940</p>
          <p><strong>📧 Email:</strong> andyouranurag@gmail.com</p>
          <p>
            <strong>💼 LinkedIn:</strong> 
            <a href="https://www.linkedin.com/in/andyouranurag" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/andyouranurag
            </a>
          </p>
          <p>
            <strong>👨‍💻 GitHub:</strong> 
            <a href="https://github.com/andyouranurag" target="_blank" rel="noopener noreferrer">
              github.com/andyouranurag
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
