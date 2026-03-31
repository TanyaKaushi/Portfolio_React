import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navigation.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navigation = () => {
  const [isNavActive, setNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }

      // Determine which section is currently active based on scroll position
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const projectsSection = document.getElementById("projects");
      const blogsSection = document.getElementById("blogs");
      const contactSection = document.getElementById("contact");

      const sections = [
        { section: aboutSection, name: "about" },
        { section: experienceSection, name: "experience" },
        { section: projectsSection, name: "projects" },
        { section: blogsSection, name: "blogs" },
        { section: contactSection, name: "contact" },
      ];

      let currentActiveSection = null;
      for (const { section, name } of sections) {
        if (section && section.offsetTop <= window.scrollY + 70) {
          currentActiveSection = name;
        }
      }
      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`navbar-main ${isNavActive ? "nav-active" : ""}`}
      collapseOnSelect
      expand="lg"
      sticky="top"
    >
      <Container>
        <Navbar.Brand
          className="title"
          as={Link}
          to="header"
          smooth={true}
          spy={true}
          offset={-70}
          duration={100}
        >
          TANYA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="d-flex align-items-center subtitle-set">
            <Nav.Link
              as={Link}
              to="about"
              smooth={true}
              spy={true}
              offset={-70}
              duration={100}
              className={`sub-title ${activeSection === "about" ? "active-link" : ""}`}
            >
              ABOUT ME
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="experience"
              smooth={true}
              spy={true}
              offset={-70}
              duration={100}
              className={`sub-title ${activeSection === "experience" ? "active-link" : ""}`}
            >
              MY EXPERIENCE
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="projects"
              smooth={true}
              spy={true}
              offset={-70}
              duration={100}
              className={`sub-title ${activeSection === "projects" ? "active-link" : ""}`}
            >
              LATEST PROJECTS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="blogs"
              smooth={true}
              spy={true}
              offset={-70}
              duration={100}
              className={`sub-title ${activeSection === "blogs" ? "active-link" : ""}`}
            >
              RECENT BLOGS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="contact"
              smooth={true}
              spy={true}
              offset={-70}
              duration={100}
            >
              <button className="btn">LET'S TALK</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
