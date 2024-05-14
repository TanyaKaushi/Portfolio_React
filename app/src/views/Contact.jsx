import React from "react";
import "../styles/Contact.css";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";

const Contact = () => {
  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="contact-main"
      >
        <div className="main-title">CONTACT ME</div>
        <div className="contact-btn-set">
          <div className="btn-div">
            <button className="social-btn">
              <a href="">
                <i class="bi bi-facebook"></i>
              </a>
            </button>
          </div>
          <div className="btn-div">
            <button className="social-btn">
              <a href="https://wa.me/0717890525?text=I%20like%20to%20know%20more%20about%20you">
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
                <i class="bi bi-envelope"></i>
              </a>
            </button>
          </div>
        </div>
      </motion.div>
      <div className="all-right-row">
        <div className="all-right">
          Copyright © 2024 by Tanya Gangegedara | All Right Reserved
        </div>
        <div onClick={goTop} className="social-btn">
          <i class="bi bi-arrow-up-circle-fill"></i>
        </div>
      </div>
    </>
  );
};

export default Contact;
