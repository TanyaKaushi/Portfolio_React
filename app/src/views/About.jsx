import React, { useEffect, useRef, useState } from "react";
import "../styles/About.css";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="about-main"
    >
      <h3 className="main-title">ABOUT ME</h3>
      <p className="para">
        With over three years of experience as a front-end developer, I
        specialize in creating stunning and user-friendly digital interfaces. My
        expertise in technology and design empowers me to convert complex
        concepts into eye-catching web-based solutions that perfectly achieve a
        balance between functionality and appearance. From design to execution,
        I work collaboratively with cross-functional teams to create a unified
        goal and am dedicated to remaining up-to-date on the latest developments
        and technologies to deliver outstanding customer service and achieve
        organizational achievement.
      </p>
    </motion.div>
  );
};

export default About;
