import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./home.css";
import { ConfigContext, ThemeContext } from "App";
import { scrollToSection } from "utils";

const HomeSection = () => {
  const theme = useContext(ThemeContext);
  const { aboutMe } = useContext(ConfigContext);
  return (
    <div
      id="home-section"
      style={{ background: theme.homeBgColor }}
      className="home-container flex-box"
    >
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="white home-text"
      >
        <h1 className="single-line">
          Hello, I'm
          <span className="gold" style={{ marginLeft: "5px" }}>
            {aboutMe?.name}
          </span>
        </h1>
        <h1 className="single-line"> {aboutMe?.tagLine}</h1>
        <motion.h1
          whileHover={{
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          transition={{ duration: 0.2 }}
          className="w-m-w-button page-link"
          onClick={() => scrollToSection("about-section")}
        >
          View my work <i className="fa-solid fa-arrow-right"></i>
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default HomeSection;
