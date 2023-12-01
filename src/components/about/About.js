import React, { useContext } from "react";
import { motion } from "framer-motion";

import rocket from "assets/rocket.svg";
import devices from "assets/devices.svg";
import bulb from "assets/bulb.svg";
import speed from "assets/speed.svg";

import "./about.css";
import { ConfigContext } from "App";

const About = () => {
  const { aboutBgColor, lightTextColor, userProfile } =
    useContext(ConfigContext);

  return (
    <motion.div
      className="full main-about"
      style={{ background: aboutBgColor, color: lightTextColor }}
    >
      <div className="section-heading full-w align-c">
        <div className="border-bottom-text">About</div>
      </div>
      <section id="intro" className="full-w intro-section">
        <img src={userProfile} alt="" className="profile-pic" />
        <div className="details">
          <h3 className="text-c description">
            MERN Stack Developer with 1 year of experience in designing and
            maintaining web applications. Proficient in MongoDB, Express.js,
            React.js, and Node.js. Skilled in front-end and back-end
            development, RESTful API integration, and database management.
            Strong troubleshooter and optimizer, committed to staying updated on
            the latest technologies. Passionate about delivering cutting-edge
            solutions and continuous learning.
          </h3>
        </div>
      </section>
      <div className="feature-container flex-row">
        <div className="feature-box">
          <div class="hexagon-container">
            <div class="hexagon">
              <img src={speed} alt="" className="icon" />
            </div>
          </div>
          <h3 className="">Fast</h3>
          <h4 className="text-c">
            Fast load times and lag free interaction, my highest priority.
          </h4>
        </div>
        <div className="feature-box">
          <div class="hexagon-container">
            <div class="hexagon">
              <img src={devices} alt="" className="icon" />
            </div>
          </div>
          <h3 className="">Responsive</h3>
          <h4 className="text-c">
            My layouts will work on any device, big or small.
          </h4>
        </div>
        <div className="feature-box">
          <div class="hexagon-container">
            <div class="hexagon">
              <img src={bulb} alt="" className="icon" />
            </div>
          </div>
          <h3 className="">Intuitive</h3>
          <h4 className="text-c">
            Strong preference for easy to use, intuitive UX/UI.
          </h4>
        </div>
        <div className="feature-box">
          <div class="hexagon-container">
            <div class="hexagon">
              <img src={rocket} alt="" className="icon" />
            </div>
          </div>
          <h3 className="">Dynamic</h3>
          <h4 className="text-c">
            Websites don't have to be static, I love making pages come to life.
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
