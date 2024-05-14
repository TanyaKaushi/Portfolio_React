import React from "react";
import Card from "react-bootstrap/Card";
import image from "../assets/test.jpeg";
import p1 from "../assets/P1.png";
import p2 from "../assets/P2.png";
import react from "../assets/react.png";
import next from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import "../styles/Projects.css";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
    variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
    className="projects-main">
      <div className="main-title">LATESTS PROJECTS</div>
      <div className="card-set">
        {/* 1 card */}
        <div>
          <Card className="card">
            <img className="image" src={p1} width="350px"></img>
            {/* <div className="overlay">WEB DESIGN</div> */}
            <div>
              <div className="title">E-commerce Application</div>
              <div className="para">
                Here I have developed the user interface (UI) for the ecommerce
                application's website, ensuring a professional and visually
                appealing design.
              </div>
              <div className="button-set">
                <a
                  href="https://frontend-next-js-ecommerce.vercel.app/"
                  target="_blank"
                >
                  <button className="social-btn">
                    <i class="bi bi-laptop"></i>
                  </button>
                </a>
                <a
                  href="https://github.com/TanyaKaushi/Frontend_NextJs_Ecommerce"
                  target="_blank"
                >
                  <button className="social-btn">
                    <i class="bi bi-github"></i>
                  </button>
                </a>
              </div>
            </div>
          </Card>
          <Card className="language-card">
            <div className="image-set">
              <img className="image" src={react} width="30px"></img>
              <img className="image" src={next} width="30px"></img>
              <img className="image" src={tailwind} width="30px"></img>
            </div>
          </Card>
        </div>

        {/* 2 card */}
        <div>
          <Card className="card">
            <img className="image" src={p1} width="350px"></img>
            {/* <div className="overlay">WEB DESIGN</div> */}
            <div>
              <div className="title">E-commerce Application</div>
              <div className="para">
                Here I have developed the user interface (UI) for the ecommerce
                application's website, ensuring a professional and visually
                appealing design.
              </div>
              <div className="button-set">
                <a
                  href="https://frontend-next-js-ecommerce.vercel.app/"
                  target="_blank"
                >
                  <button className="social-btn">
                    <i class="bi bi-laptop"></i>
                  </button>
                </a>
                <a
                  href="https://github.com/TanyaKaushi/Frontend_NextJs_Ecommerce"
                  target="_blank"
                >
                  <button className="social-btn">
                    <i class="bi bi-github"></i>
                  </button>
                </a>
              </div>
            </div>
          </Card>
          <Card className="language-card">
            <div className="image-set">
              <img className="image" src={react} width="30px"></img>
              <img className="image" src={next} width="30px"></img>
              <img className="image" src={tailwind} width="30px"></img>
            </div>
          </Card>
        </div>

        {/* 3 card */}
        <div>
          <Card className="card">
            <img className="image" src={p1} width="350px"></img>
            {/* <div className="overlay">WEB DESIGN</div> */}
            <div>
              <div className="title">E-commerce Application</div>
              <div className="para">
                Here I have developed the user interface (UI) for the ecommerce
                application's website, ensuring a professional and visually
                appealing design.
              </div>
              <div className="button-set">
                <a
                  href="https://frontend-next-js-ecommerce.vercel.app/"
                  target="_blank"
                >
                  <button className="social-btn">
                    <i class="bi bi-laptop"></i>
                  </button>
                </a>
                <a
                  href="https://github.com/TanyaKaushi/Frontend_NextJs_Ecommerce"
                  target="_blank"
                >
                  <button className="social-btn">
                    <i class="bi bi-github"></i>
                  </button>
                </a>
              </div>
            </div>
          </Card>
          <Card className="language-card">
            <div className="image-set">
              <img className="image" src={react} width="30px"></img>
              <img className="image" src={next} width="30px"></img>
              <img className="image" src={tailwind} width="30px"></img>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
