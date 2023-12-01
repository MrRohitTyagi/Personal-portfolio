import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./home.css";
import { ConfigContext } from "App";

const HomeSection = () => {
  const config = useContext(ConfigContext);
  return (
    <motion.div
      style={{ background: config.homeBgColor }}
      className="home-container flex-box"
    >
      <motion.h1
        className="white home-text"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transiti={{ duration: 0.5 }}
      >
        <div className="single-line">
          Hello, I'm
          <div className="gold" style={{ marginLeft: "5px" }}>
            Rohit Tyagi.
          </div>
        </div>
        <div className="single-line"> i'm a MERN stack developer</div>
        <div class="w-m-w-button page-link">
          View my work <i class="fa-solid fa-arrow-right"></i>
        </div>
      </motion.h1>
    </motion.div>
  );
};

export default HomeSection;
