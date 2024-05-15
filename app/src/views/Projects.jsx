import React from "react";
import Card from "react-bootstrap/Card";
import image from "../assets/test.jpeg";
import p1 from "../assets/P1.png";
import p2 from "../assets/P2.png";
import p3 from "../assets/p3.png";
import react from "../assets/react.png";
import next from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongo from "../assets/mongodb.png";
import "../styles/Projects.css";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="projects-main"
      >
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
                  Here I have developed the user interface (UI) for the
                  ecommerce application's website, ensuring a professional and
                  visually appealing design.
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
                <img className="lan-image" src={react} width="30px"></img>
                <img className="lan-image" src={next} width="30px"></img>
                <img className="lan-image" src={tailwind} width="30px"></img>
              </div>
            </Card>
          </div>

          {/* 2 card */}
          <div>
            <Card className="card">
              <img className="image" src={p3} width="350px"></img>
              {/* <div className="overlay">WEB DESIGN</div> */}
              <div>
                <div className="title">The Blog - Blog Application</div>
                <div className="para">
                  Develop an entire blog application that includes each
                  essential CRUD (Create, Read, Update, Delete) functions along with filtering function.
                </div>
                <div className="button-set">
                  <a
                    href="https://drive.google.com/file/d/1Ct1JwFxst02FWDG5I-9gYUpj4pqCkmBe/view"
                    target="_blank"
                  >
                    <button className="social-btn">
                      <i class="bi bi-laptop"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/TanyaKaushi/MERN_Blog_Application"
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
                <img className="lan-image" src={react} width="30px"></img>
                <img className="lan-image" src={redux} width="30px"></img>
                <img className="lan-image" src={node} width="30px"></img>
                <img className="lan-image" src={express} width="30px"></img>
                <img className="lan-image" src={mongo} width="30px"></img>
              </div>
            </Card>
          </div>

          {/* 3 card */}
          <div>
            <Card className="card">
              <img className="image" src={p2} width="350px"></img>
              {/* <div className="overlay">WEB DESIGN</div> */}
              <div>
                <div className="title">Hotely - Hotel Landing Page</div>
                <div className="para">
                  The hotel's landing page design highlights modern technology,
                  fluid animations, and the newest advancements in web
                  development.
                </div>
                <div className="button-set">
                  <a
                    href="https://hotel-landing-page-psi.vercel.app/"
                    target="_blank"
                  >
                    <button className="social-btn">
                      <i class="bi bi-laptop"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/TanyaKaushi/Hotel_Landing_Page"
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
                <img className="lan-image" src={react} width="30px"></img>
                <img className="lan-image" src={next} width="30px"></img>
                <img className="lan-image" src={tailwind} width="30px"></img>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
