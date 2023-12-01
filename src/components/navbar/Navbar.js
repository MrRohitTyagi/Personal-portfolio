import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ConfigContext } from "App";
import "./navbar.css";

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
        <motion.h3 className="nav-item">Home</motion.h3>
        <motion.h3 className="nav-item">About</motion.h3>
        <motion.h3 className="nav-item">Skills</motion.h3>
        <motion.h3 className="nav-item">Projects</motion.h3>
        <motion.h3 className="nav-item">Contact</motion.h3>
      </div>
    </motion.div>
  );
};

export default Navbar;
