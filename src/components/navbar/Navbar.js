import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "App";
import "./navbar.css";
import { scrollToSection } from "utils";

const Navbar = () => {
  const { navbarBgColor, skillsColor } = useContext(ThemeContext);

  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y:-50 }}
      style={{
        background: navbarBgColor,
        borderBottom: `2px solid ${skillsColor} `,
      }}
      className="navbar-container white"
    >
      <div className="flex-row nav-ele-box">
        <h3
          onClick={() => scrollToSection("home-section")}
          className="nav-item"
        >
          Home
        </h3>
        <h3
          onClick={() => scrollToSection("about-section")}
          className="nav-item"
        >
          About
        </h3>
        <h3
          onClick={() => scrollToSection("skills-section")}
          className="nav-item"
        >
          Skills
        </h3>
        <h3
          onClick={() => scrollToSection("projects-section")}
          className="nav-item"
        >
          Projects
        </h3>
        <h3
          onClick={() => scrollToSection("contact-section")}
          className="nav-item"
        >
          Contact
        </h3>
      </div>
    </motion.div>
  );
};

export default Navbar;
