import React, { useContext } from "react";
import { motion } from "framer-motion";

import { ThemeContext } from "App";
import useIntersectionObserver from "utils/useIntersectionObserver";

import "./projects.css";
import CustomIframe from "customComponents/CustomIframe";
import granitestack from "assets/granitestaclk.png";

const headingVariants = {
  hidden: { x: "-1100px" },
  visible: { x: 0 },
};
const Projects = () => {
  const { control, ref } = useIntersectionObserver();
  const { skillsBgColor, lightTextColor } = useContext(ThemeContext);
  return (
    <div
      ref={ref}
      id="projects-section"
      className="full main-project"
      style={{ background: skillsBgColor, color: lightTextColor }}
    >
      <div className="section-heading-project full-w align-c">
        <motion.div
          className="border-bottom-text-project"
          initial="hidden"
          animate={control}
          variants={headingVariants}
        >
          Projects
        </motion.div>
      </div>
      <section className="projects-container">
        <CustomIframe src={"https://granitestack.com/"} image={granitestack} />
      </section>
    </div>
  );
};

export default Projects;
