import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Briefcase } from "react-bootstrap-icons"; // Optional icon

const MyNavbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expand="lg"
      className={`navbar fixed-top ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="container">
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <Briefcase style={{ marginRight: "8px", color: "#ffcc00" }} />
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className={isActive("/") ? "active-link" : ""}>Home</Nav.Link>
            <Nav.Link as={Link} to="/skills" className={isActive("/skills") ? "active-link" : ""}>Skills</Nav.Link>
            <Nav.Link as={Link} to="/resume" className={isActive("/resume") ? "active-link" : ""}>Resume</Nav.Link>
            <Nav.Link as={Link} to="/about" className={isActive("/about") ? "active-link" : ""}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={isActive("/contact") ? "active-link" : ""}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
