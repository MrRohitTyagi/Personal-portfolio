import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./skills.css";
import { ConfigContext, ThemeContext } from "App";
import RenderBoldText from "customComponents/RenderBoldText";
import { headingVariants } from "constants";

const skillsVarient = {
  hidden: {
    scale: [0],
    rotate: 0,
  },
  visible: {
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
    rotate: [0, 2, 0],
    scale: [0, 1.01, 1],
  },
};

const Skills = () => {
  const { skillsBgColor, lightTextColor } = useContext(ThemeContext);
  const { skillsSection, experienceSection } = useContext(ConfigContext);

  const skillScontrol = useAnimation();
  const skillOnlyScontrol = useAnimation();
  const { ref: skillsHeadingRef, inView: skillsHeadingInView } = useInView({
    triggerOnce: true,
  });
  const { ref: skillsOnlyRef, inView: skillsOnlyInView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (skillsHeadingInView) {
      skillScontrol.start("visible");
    }
    if (skillsOnlyInView) {
      skillOnlyScontrol.start("visible");
    }
    return () => {
      skillScontrol.stop();
    };
  }, [skillOnlyScontrol, skillScontrol, skillsHeadingInView, skillsOnlyInView]);

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={skillsHeadingRef}
      id="skills-section"
      className="full main-skills"
      style={{ background: skillsBgColor, color: lightTextColor }}
    >
      <motion.div
        variants={headingVariants}
        animate={skillScontrol}
        initial="hidden"
        className="section-heading-skills full-w align-c"
      >
        <div ref={skillsRef} className="border-bottom-text-skills">
          Skills & Experience
        </div>
      </motion.div>

      {skillsInView && (
        <section className="skills-container">
          <motion.div
            transition={{ duration: 2 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            ref={skillsOnlyRef}
            className="skills-section"
          >
            {skillsSection?.map((section) => {
              return (
                <motion.div
                  transition={{ duration: 2 }}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="skill-panel"
                  key={section.heading}
                >
                  <h2 className="skill-header">{section.heading}</h2>
                  <div className="skill-icon-container">
                    {section?.skills?.map((skill) => {
                      return (
                        <motion.div
                          key={skill.name}
                          variants={skillsVarient}
                          animate={skillOnlyScontrol}
                          initial="hidden"
                          className="skill-box"
                        >
                          <img src={skill.image} alt="node" className="skill" />
                          <h4 className="skill-text">{skill.name}</h4>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="divider" />
          <motion.div
            transition={{ duration: 2 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="exp-section"
          >
            {experienceSection?.map((exp) => {
              return (
                <div key={exp.position}>
                  <div className="flex-col company-section">
                    <h1 className="position">
                      {exp.position}
                      <span className="date">{exp.date}</span>
                    </h1>
                    <h2 className="company-name">{exp.companyName}</h2>
                    <ul className="role-in-company">
                      {exp.role.map((role, i) => {
                        return <RenderBoldText text={role} key={i} />;
                      })}
                    </ul>
                  </div>
                  <div className="height-20px-box" />
                </div>
              );
            })}
          </motion.div>
        </section>
      )}
    </div>
  );
};

export default Skills;
