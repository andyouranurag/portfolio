import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Briefcase } from "react-bootstrap-icons";

const MyNavbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // Track navbar toggle state

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  // Close navbar on link click (only in mobile mode)
  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      className={`navbar fixed-top ${scrolled ? "navbar-scrolled" : ""}`}
      expanded={expanded} // Controlled state for toggler
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <Briefcase style={{ marginRight: "8px", color: "#ffcc00" }} />
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)} // Toggle navbar state
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className={isActive("/") ? "active-link" : ""} onClick={closeNavbar}>Home</Nav.Link>
            <Nav.Link as={Link} to="/skills" className={isActive("/skills") ? "active-link" : ""} onClick={closeNavbar}>Skills</Nav.Link>
            <Nav.Link as={Link} to="/resume" className={isActive("/resume") ? "active-link" : ""} onClick={closeNavbar}>Resume</Nav.Link>
            <Nav.Link as={Link} to="/about" className={isActive("/about") ? "active-link" : ""} onClick={closeNavbar}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={isActive("/contact") ? "active-link" : ""} onClick={closeNavbar}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
