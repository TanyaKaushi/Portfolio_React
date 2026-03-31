import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import "../styles/Experience.css";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="experience-main"
      >
        <div className="main-title">EXPERIENCE AND EXPERTISE</div>
        <div className="card-set">
          <Card className="card">
            <div className="title">Associate Software Engineer</div>
            <div className="company">Mooflife (Pvt) Ltd</div>
            <div className="time-period">2023 June - Present </div>
            <div className="para">
              Involved in the development and enhancement of functionalities
              within a social media platform named as “Mooflife”. Its a platform
              for those interested in history to explore and learn about
              important historical events.
              <br></br>
              Visit Website :{" "}
              <a
                className="link"
                href="https://www.mooflife.com/"
                target="_blank"
              >
                mooflife.com
              </a>
              <li>
                - Hands-on expertise in MERN stack development, including Redux
              </li>
              <li>
                - Developed frontend part from scratch based on Figma designs,
                ensuring user-friendly interfaces.
              </li>
              <li>
                - Managed the design, creation, and maintenance of important
                features by adding logical aspects as required.
              </li>
              <li>- Experienced in agile methodology.</li>
            </div>
          </Card>
          <Card className="card">
            <div className="title">Trainee Software Engineer</div>
            <div className="company">99x Technology</div>
            <div className="time-period">2022 March - 2023 May</div>
            <div className="para">
              Involved in the development and optimization of enterprise-level
              application
              <li>
                - Engaged in developing and bug-fixing tasks using Angular and
                TypeScript to ensure seamless functionality and optimal
                performance within the application.
              </li>
              <li>
                - Contributed to enhancing user experience by implementing new
                features aligned with UI/UX designs and client specifications,
                thereby modernizing websites.
              </li>
              <li>- Experienced in agile methodology.</li>
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
