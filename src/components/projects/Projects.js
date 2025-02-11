import React, { useContext } from "react";
import { motion } from "framer-motion";

import { ConfigContext, ThemeContext } from "App";
import useIntersectionObserver from "utils/useIntersectionObserver";

import "./projects.css";
import ImageCrosole from "customComponents/ImageCrosole";
import { useInView } from "react-intersection-observer";

const headingVariants = {
  hidden: { x: "-1100px" },
  visible: { x: 0 },
};
const Projects = () => {
  const { control, ref } = useIntersectionObserver();
  const { skillsBgColor, lightTextColor } = useContext(ThemeContext);
  const { projectsSection } = useContext(ConfigContext);
  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      id="projects-section"
      className="full main-project"
      style={{ background: skillsBgColor, color: lightTextColor }}
    >
      <div className="section-heading-project full-w align-c">
        <motion.div
          ref={projectRef}
          className="border-bottom-text-project"
          initial="hidden"
          animate={control}
          variants={headingVariants}
        >
          Projects
        </motion.div>
      </div>
      {projectInView && (
        <motion.section
          transition={{ duration: 2 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="projects-container"
        >
          {projectsSection?.map((project) => {
            return (
              <ImageCrosole
                key={project.title}
                src={project.src}
                images={project.images}
                desc={project.description}
                name={project.title}
                tech={project.tech}
              />
            );
          })}
        </motion.section>
      )}
    </div>
  );
};

export default Projects;
