import React from "react";
import "./App.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="container">
        <h1 className="text-center">Contact Me</h1>
        <p className="text-center">Feel free to reach out for collaborations or inquiries!</p>

        <div className="contact-info">
              <h2>Get in Touch</h2>
              <p><strong>📍 Address:</strong> Mumbai, India</p>
              <p><strong>📞 Phone:</strong> +91-9152805940</p>
              <p><strong>📧 Email:</strong> andyouranurag@gmail.com</p>
              <p>
                <strong>💼 LinkedIn:</strong> 
                <a href="https://www.linkedin.com/in/6a57a7279" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/6a57a7279
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
