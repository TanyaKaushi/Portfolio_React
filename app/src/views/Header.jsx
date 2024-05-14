import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import image from "../assets/me.png";
import hello from "../assets/hello.gif";
import "../styles/Header.css";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
    >
      <Card className="text-center header-main">
        <div className="header-content">
          <img className="image" src={image} width="200px" alt="image"></img>
          <div className="social-btn-set">
            <div className="btn-div">
              <button className="social-btn">
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
              </button>
            </div>
            <div className="btn-div">
              <button className="social-btn">
                <a href="">
                  <i class="bi bi-whatsapp"></i>
                </a>
              </button>
            </div>
            <div className="btn-div">
              <button className="social-btn">
                <a
                  href="https://www.linkedin.com/in/tanya-gangegedara-64b253204/"
                  target="_blank"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </button>
            </div>
            <div className="btn-div">
              <button className="social-btn">
                <a href="https://medium.com/@tanyakaushi" target="_blank">
                  <i class="bi bi-medium"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="title">Hey There , I'm Tanya Gangegedara</div>
          <div className="sub-title">
            Welcome to my portfolio, where creativity and coding merge to turn
            digital dreams into reality. As a developer from Sri Lanka, I'm
            passionate about innovation and crafting solutions that inspire.
            Let's explore the world of technology together, discovering its
            endless possibilities with each step.
          </div>

          <button className="btn">Download CV</button>
        </div>
      </Card>
    </motion.div>
  );
};

export default Header;
