import React from "react";
import Card from "react-bootstrap/Card";
import image from "../assets/test.jpeg";
import b1 from "../assets/b1.webp";
import b2 from "../assets/b2.webp";
import b3 from "../assets/B3.png";
import react from "../assets/react.png";
import next from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import "../styles/Projects.css";
import "../styles/Blogs.css";
import { fadeIn } from "../../src/variants.jsx";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <section id="blogs">
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
              <img className="blog-image" src={b1} width="300px"></img>
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
                  thoughts, sharing step-by-step instructions and important
                  ideas for improving your application's performance and
                  visibility.
                </div>
              </div>
            </Card>
          </div>

          {/* 2 card */}
          <div>
            <Card className="card">
              <img className="blog-image" src={b2} width="300px"></img>
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
                  management solution in the industry. It offers information
                  about the core concepts of Redux and its essential principles.
                  Whether you need a refresher or are new to Redux, this article
                  will provide you with essential insights that will assist you
                  deal with challenging state management scenarios.
                </div>
              </div>
            </Card>
          </div>

          {/* 3 card */}
          <div>
            <Card className="card">
              <img className="blog-image" src={b3} width="300px"></img>
              <div className="overlay">
                <a
                  href="https://medium.com/@tanyakaushi/props-make-it-easy-a-simple-guide-to-using-props-in-react-components-ae317a458f36"
                  target="_blank"
                >
                  <button className="social-btn">
                    <i class="bi bi-bookmark-heart-fill"></i>
                  </button>
                </a>
              </div>
              <div>
                <div className="title">
                  Props Make it Easy: A Simple Guide to Using Props in React
                  Components
                </div>
                <div className="para">
                  Ever wondered how React components seamlessly communicate with
                  each other? Say hello to props – the magic wand behind the
                  scenes! In this article, we'll unveil the power of props,
                  understand how they easily enable communication between
                  components and a few examples with real-world scenarios. Let's
                  dive in and boost your React skills!
                </div>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Blogs;
