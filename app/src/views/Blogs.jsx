import React from "react";
import Card from "react-bootstrap/Card";
import image from "../assets/test.jpeg";
import b1 from "../assets/b1.webp";
import b2 from "../assets/b2.webp";
import react from "../assets/react.png";
import next from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import "../styles/Projects.css";
import "../styles/Blogs.css";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="projects-main blogs-main"
    >
      <div className="main-title">RECENT BLOGS</div>
      <div className="card-set">
        {/* 1 card */}
        <div>
          <Card className="card">
            <img className="image" src={b1} width="300px"></img>
            <div className="overlay">
              <a
                href="https://medium.com/@tanyakaushi/deploying-your-react-application-on-vercel-a-quick-guide-ea99283ff26b"
                target="_blank"
              >
                <button className="social-btn">
                  <i class="bi bi-bookmark-heart-fill"></i>
                </button>
              </a>
            </div>
            <div>
              <div className="title">
                Deploying your React application on Vercel: A Quick Guide
              </div>
              <div className="para">
                Learn how to launch your React apps on Vercel to unlock the
                potential of showing your creativity to the world. In this
                complete guide, I share my recent deployment experience and
                thoughts, sharing step-by-step instructions and important ideas
                for improving your application's performance and visibility.
              </div>
            </div>
          </Card>
        </div>

        {/* 2 card */}
        <div>
          <Card className="card">
            <img className="image" src={b2} width="300px"></img>
            <div className="overlay">
              <a
                href="https://medium.com/@tanyakaushi/unlocking-redux-simplifying-state-management-in-javascript-ef945dfcc0b4"
                target="_blank"
              >
                <button className="social-btn">
                  <i class="bi bi-bookmark-heart-fill"></i>
                </button>
              </a>
            </div>
            <div>
              <div className="title">
                Explore Redux: A Journey into Core Concepts
              </div>
              <div className="para">
                This article provides an overview of Redux, the leading state
                management solution in the industry. It offers information about
                the core concepts of Redux and its essential principles. Whether
                you need a refresher or are new to Redux, this article will
                provide you with essential insights that will assist you deal
                with challenging state management scenarios.
              </div>
            </div>
          </Card>
        </div>

        {/* 3 card */}
      </div>
    </motion.div>
  );
};

export default Blogs;