import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navigation.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isNavActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
    >
      <Navbar
        className={`navbar-main ${isNavActive ? "nav-active" : ""}`}
        collapseOnSelect
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Brand className="title">TANYA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="d-flex align-items-center subtitle-set">
              <Nav.Link eventKey={2} href="#memes" className="sub-title">
                About Me
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="sub-title">
                Experience
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="sub-title">
                My Work
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="sub-title">
                Blogs
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <button className="btn">Let's Talk</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;
