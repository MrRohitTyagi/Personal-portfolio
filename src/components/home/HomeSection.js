import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./home.css";
import { ConfigContext } from "App";
import { scrollToSection } from "utils";
import TypingEffect from "customComponents/typingeffect";

const HomeSection = () => {
  const { aboutMe } = useContext(ConfigContext);
  return (
    <motion.div id="home-section" className="home-container flex-box">
      <motion.div
        transition={{ duration: 1, type: "spring" }}
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.2, opacity: 0 }}
        className="white home-text"
      >
        <h1 className="single-line no-wrap ">
          Hello, I'm
          <span className="gold" style={{ marginLeft: "5px" }}>
            <TypingEffect text={aboutMe?.name} />
          </span>
        </h1>
        <h1 className="single-line no-wrap "> {aboutMe?.tagLine}</h1>
        <motion.h1
          whileHover={{
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          transition={{ duration: 0.2 }}
          className="w-m-w-button page-link"
          onClick={() => scrollToSection("about-section")}
        >
          About me <i className="fa-solid fa-arrow-right"></i>
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default HomeSection;
