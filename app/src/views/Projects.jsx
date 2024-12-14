import React from "react";
import Card from "react-bootstrap/Card";
import image from "../assets/test.jpeg";
import p1 from "../assets/P1.png";
import p2 from "../assets/P2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/P4.png";
import react from "../assets/react.png";
import next from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
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
          {/* 3 card */}
          <div>
            <Card className="card">
              <img className="image" src={p4} width="350px"></img>
              {/* <div className="overlay">WEB DESIGN</div> */}
              <div>
                <div className="title">WORLD NEWS - News Application</div>
                <div className="para">
                  An innovative news application designed to keep users informed
                  with real-time updates, detailed reports, and expert analysis
                  across a broad spectrum of topics, including global events,
                  politics, science, sports, and entertainment, all presented
                  through an intuitive and user-friendly interface.
                </div>
                <div className="button-set">
                  <a href="https://world-news-woad.vercel.app/" target="_blank">
                    <button className="social-btn">
                      <i class="bi bi-laptop"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/TanyaKaushi/news_application"
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
                <img className="lan-image" src={js} width="20px"></img>
                <img className="lan-image" src={css} width="20px"></img>
                <img className="lan-image" src={bootstrap} width="30px"></img>
              </div>
            </Card>
          </div>

          {/* 3 card */}
          <div>
            <Card className="card">
              <img className="image" src={p2} width="350px"></img>
              {/* <div className="overlay">WEB DESIGN</div> */}
              <div>
                <div className="title">TRIPCO - Travel Agent Application</div>
                <div className="para">
                  An advanced web application designed to provide extensive
                  information on distinctive travel destinations, comprehensive
                  tour details, and a wide array of accommodation options.
                </div>
                <div className="button-set">
                  <a href="https://tripco-travel.vercel.app/" target="_blank">
                    <button className="social-btn">
                      <i class="bi bi-laptop"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/TanyaKaushi/travel_app"
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
                <img className="lan-image" src={js} width="20px"></img>
                <img className="lan-image" src={css} width="20px"></img>
                <img className="lan-image" src={bootstrap} width="30px"></img>
              </div>
            </Card>
          </div>

          {/* 1 card */}
          <div>
            <Card className="card">
              <img className="image" src={p1} width="350px"></img>
              {/* <div className="overlay">WEB DESIGN</div> */}
              <div>
                <div className="title">NIKE - E-commerce Application</div>
                <div className="para">
                  The user interface (UI) for the ecommerce application's
                  website was developed with a focus on sleek and modern design,
                  aimed at enhancing usability and captivating users.
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
                <div className="title">THE BLOG - Blog Application</div>
                <div className="para">
                  Created a complete blog application with basic CRUD (Create,
                  Read, Update, Delete) functions and a strong filtering system,
                  demonstrating skills in full-stack web development.
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
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
