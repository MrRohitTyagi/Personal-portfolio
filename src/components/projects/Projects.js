import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./projects.css";
import { ConfigContext } from "App";

const Projects = () => {
  const { skillsBgColor, lightTextColor } = useContext(ConfigContext);
  return (
    <div
      id="projects-section"
      className="full main-project"
      style={{ background: skillsBgColor, color: lightTextColor }}
    >
      <div className="section-heading-project full-w align-c">
        <div className="border-bottom-text-project">Projects</div>
      </div>
      <section className="projects-container">TO be continued</section>
    </div>
  );
};

export default Projects;
