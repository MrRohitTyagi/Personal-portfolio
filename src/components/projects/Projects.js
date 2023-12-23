import React, { useContext } from "react";
import { motion } from "framer-motion";

import { ConfigContext, ThemeContext } from "App";
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
  const { projectsSection } = useContext(ConfigContext);
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
        {projectsSection?.map((project) => {
          return (
            <CustomIframe
              src={project.src}
              image={project.image}
              desc={project.description}
              name={project.title}
              tech={project.tech}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
