import React, { useState } from "react";
import { 
  Envelope, 
  Telephone, 
  GeoAlt, 
  Linkedin, 
  Github, 
  Send, 
  Check2,
  ChatDots
} from "react-bootstrap-icons";
import { personalInfo } from "./data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="portfolio-section">
      <div className="section-container">
        <div className="section-badge">
          <ChatDots size={14} /> Direct Connect
        </div>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have an AI/ML opportunity, research idea, or project collaboration? Let's connect!
        </p>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-cards">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="glass-panel contact-channel-card"
            >
              <div className="channel-icon-wrap" style={{ background: "rgba(99, 102, 241, 0.15)", color: "#818cf8" }}>
                <Envelope />
              </div>
              <div>
                <div className="channel-title">Email Directly</div>
                <div className="channel-value">{personalInfo.email}</div>
              </div>
            </a>

            <a 
              href={`tel:${personalInfo.phone}`} 
              className="glass-panel contact-channel-card"
            >
              <div className="channel-icon-wrap" style={{ background: "rgba(6, 182, 212, 0.15)", color: "#22d3ee" }}>
                <Telephone />
              </div>
              <div>
                <div className="channel-title">Phone Call / WhatsApp</div>
                <div className="channel-value">{personalInfo.phone}</div>
              </div>
            </a>

            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-panel contact-channel-card"
            >
              <div className="channel-icon-wrap" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#34d399" }}>
                <Linkedin />
              </div>
              <div>
                <div className="channel-title">LinkedIn Network</div>
                <div className="channel-value">{personalInfo.linkedinHandle}</div>
              </div>
            </a>

            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-panel contact-channel-card"
            >
              <div className="channel-icon-wrap" style={{ background: "rgba(168, 85, 247, 0.15)", color: "#c084fc" }}>
                <Github />
              </div>
              <div>
                <div className="channel-title">GitHub Profile</div>
                <div className="channel-value">github.com/{personalInfo.githubUsername}</div>
              </div>
            </a>

            <div className="glass-panel contact-channel-card">
              <div className="channel-icon-wrap" style={{ background: "rgba(245, 158, 11, 0.15)", color: "#fbbf24" }}>
                <GeoAlt />
              </div>
              <div>
                <div className="channel-title">Current Locations</div>
                <div className="channel-value">{personalInfo.location} • {personalInfo.secondaryLocation}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="glass-panel contact-form-card">
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
              Send a Direct Message
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "1.5rem" }}>
              Fills an automated draft directly to {personalInfo.email}.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group-item">
                <label className="form-label-custom">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Dr. Alex Mercer"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control-dark"
                />
              </div>

              <div className="form-group-item">
                <label className="form-label-custom">Your Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="alex@organization.org"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control-dark"
                />
              </div>

              <div className="form-group-item">
                <label className="form-label-custom">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="AI/ML Collaboration / Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control-dark"
                />
              </div>

              <div className="form-group-item">
                <label className="form-label-custom">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Describe your inquiry, project scope, or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control-dark"
                />
              </div>

              <button
                type="submit"
                className="btn-primary-glow"
                style={{ width: "100%", justifyContent: "center", cursor: "pointer", marginTop: "0.5rem" }}
              >
                {submitted ? (
                  <>
                    <Check2 size={16} /> Opening Email Client...
                  </>
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
