import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import image from "../assets/me.png";
import hello from "../assets/hello.gif";
import "../styles/Header.css";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";

const Header = () => {
  const onButtonClick = () => {
    const pdfUrl = "cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="header">
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
                  <a
                    href="https://www.facebook.com/tanya.gangegedara"
                    target="_blank"
                  >
                    <i class="bi bi-facebook"></i>
                  </a>
                </button>
              </div>
              <div className="btn-div">
                <button className="social-btn">
                  <a
                    href="https://wa.me/+94717890525?text=Hi%2C%0AI%20would%20like%20to%20know%20more%20about%20you%21"
                    target="_blank"
                  >
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

            <button className="btn" onClick={onButtonClick}>
              Download CV
            </button>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default Header;
