import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { LogoNodejs } from "@styled-icons/ionicons-solid/LogoNodejs";
import { Javascript } from "@styled-icons/fluentui-system-regular/Javascript";
import { Redux } from "@styled-icons/simple-icons/Redux";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Python } from "@styled-icons/fa-brands/Python";

import "./skills.css";
import { ConfigContext } from "App";
import { Express } from "styled-icons/simple-icons";

const Skills = () => {
  const { skillsBgColor, lightTextColor } = useContext(ConfigContext);

  return (
    <motion.div
      className="full main-skills"
      style={{ background: skillsBgColor, color: lightTextColor }}
    >
      <div className="section-heading-skills full-w align-c">
        <div className="border-bottom-text-skills">Skills & Experience</div>
      </div>

      <section className="skills-container">
        <div className="skills-section">
          <div className="skill-panel">
            <h2>Frontend Skills</h2>
            <div className="skill-icon-container">
              <div className="skill-box">
                <ReactLogo className="skill" />
                <h4 className="skill-text">React</h4>
              </div>
              <div className="skill-box">
                <Javascript className="skill" />
                <h4 className="skill-text">Javascript</h4>
              </div>
              <div className="skill-box">
                <Redux className="skill" />
                <h4 className="skill-text">Redux</h4>
              </div>
              <div className="skill-box">
                <Css3 className="skill" />
                <h4 className="skill-text">Css</h4>
              </div>
              <div className="skill-box">
                <Html5 className="skill" />
                <h4 className="skill-text">HTML</h4>
              </div>
              <div className="skill-box">
                <Bootstrap className="skill" />
                <h4 className="skill-text">Bootstrap</h4>
              </div>
            </div>
          </div>
          <div className="skill-panel">
            <h2>Backend Skills </h2>
            <div className="skill-icon-container">
              <div className="skill-box">
                <LogoNodejs className="skill" />
                <h4 className="skill-text">Node js</h4>
              </div>
              <div className="skill-box">
                <Express className="skill" />
                <h4 className="skill-text">Express Js</h4>
              </div>
              <div className="skill-box">
                <Mongodb className="skill" />
                <h4 className="skill-text">Mongo Db</h4>
              </div>
            </div>
          </div>
          <div className="skill-panel">
            <h2>Programming Languages</h2>
            <div className="skill-icon-container">
              <div className="skill-box">
                <Python className="skill" />
                <h4 className="skill-text">Python</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="exp-section">
          <div className="flex-col company-section">
            <h1 className="position">
              Associate Software Engineer
              <span className="date">{"10/2022 – Present"}</span>
            </h1>
            <h2 className="company-name">
              Thoughts2Binary Consulting & Solutions
            </h2>
            <ul className="role-in-company">
              <li>
                Spearheaded the development of the core product, contributing to
                its enhanced functionality and user experience.
              </li>
              <li>
                Collaborated closely with UX/UI designers to transform design
                mockups and wireframes into pixelperfect web interfaces,
                utilizing React.js and other frontend libraries.
              </li>
              <li>
                Established seamless communication between frontend and backend
                systems, ensuring data consistency and optimal user experiences.
              </li>
              <li>
                Utilized a tech stack including React.js, Redux, git, npm,
                Javascript, grommet, and Amazon Web Services (AWS).
              </li>
            </ul>
          </div>
          <div className="height-20px-box" />
          <div className="flex-col company-section">
            <h1 className="position">
              Web Developer Intern
              <span className="date">{"11/2021 – 05/2022"}</span>
            </h1>
            <h2 className="company-name">Pepcoding Education Pvt Ltd.</h2>
            <ul className="role-in-company">
              <li>
                Assisted in troubleshooting, debugging code, and enhancing
                website functionality.
              </li>
              <li>
                Gained practical experience with HTML, CSS, JavaScript, Node.js
                and data structures.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Skills;
