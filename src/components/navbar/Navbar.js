import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ConfigContext } from "App";
import "./navbar.css";
import { scrollToSection } from "utils";

const Navbar = () => {
  const { navbarBgColor, skillsColor } = useContext(ConfigContext);

  return (
    <motion.div
      style={{
        background: navbarBgColor,
        borderBottom: `2px solid ${skillsColor} `,
      }}
      className="navbar-container white"
    >
      <div className="flex-row nav-ele-box">
        <motion.h3
          onClick={() => scrollToSection("home-section")}
          className="nav-item"
        >
          Home
        </motion.h3>
        <motion.h3
          onClick={() => scrollToSection("about-section")}
          className="nav-item"
        >
          About
        </motion.h3>
        <motion.h3
          onClick={() => scrollToSection("skills-section")}
          className="nav-item"
        >
          Skills
        </motion.h3>
        <motion.h3
          onClick={() => scrollToSection("projects-section")}
          className="nav-item"
        >
          Projects
        </motion.h3>
        <motion.h3
          onClick={() => scrollToSection("contact-section")}
          className="nav-item"
        >
          Contact
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default Navbar;
