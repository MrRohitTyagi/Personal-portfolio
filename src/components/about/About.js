import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// assets
import rocket from "assets/rocket.svg";
import devices from "assets/devices.svg";
import bulb from "assets/bulb.svg";
import speed from "assets/speed.svg";

import "./about.css";
import { ConfigContext } from "App";
import InsagramSvg from "assets/insagram.svg";
import LinkedlnSvg from "assets/Linkedln.svg";
import GithubSvg from "assets/Github.svg";
import WhatsappSvg from "assets/Whatsapp.svg";

const featureVariants = {
  hidden: { filter: "blur(10px)" },
  visible: { filter: "blur(0px)" },
};
const variants = {
  hidden: { x: "-1100px" },
  visible: { x: 0 },
};

const About = () => {
  const { aboutBgColor, lightTextColor, userProfile } =
    useContext(ConfigContext);

  const controls = useAnimation();
  const controlsForFeatures = useAnimation();

  const { ref, inView } = useInView({ triggerOnce: true });
  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (featuresInView) {
      controlsForFeatures.start("visible");
    }
    return () => {
      controls.stop();
      controlsForFeatures.stop();
    };
  }, [controls, controlsForFeatures, featuresInView, inView]);

  return (
    <div
      id="about-section"
      className="full main-about"
      style={{ background: aboutBgColor, color: lightTextColor }}
    >
      <div className="section-heading full-w align-c" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="border-bottom-text"
        >
          About
        </motion.div>
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
          <div className="socials">
            <InsagramSvg />
            <LinkedlnSvg />
            <GithubSvg />
            <WhatsappSvg />
          </div>
        </div>
      </section>
      <div className="feature-container flex-row">
        <div className="feature-box">
          <div className="hexagon-container">
            <motion.div
              animate={controlsForFeatures}
              initial={"hidden"}
              variants={featureVariants}
              className="hexagon"
            >
              <img src={speed} alt="" className="icon" />
            </motion.div>
          </div>
          <h3 className="">Fast</h3>
          <h4 className="text-c" ref={featuresRef}>
            Fast load times and lag free interaction, my highest priority.
          </h4>
        </div>
        <div className="feature-box">
          <div className="hexagon-container">
            <motion.div
              animate={controlsForFeatures}
              initial={"hidden"}
              variants={featureVariants}
              className="hexagon"
            >
              <img src={devices} alt="" className="icon" />
            </motion.div>
          </div>
          <h3 className="">Responsive</h3>
          <h4 className="text-c">
            My layouts will work on any device, big or small.
          </h4>
        </div>
        <div className="feature-box">
          <div className="hexagon-container">
            <motion.div
              animate={controlsForFeatures}
              initial={"hidden"}
              variants={featureVariants}
              className="hexagon"
            >
              <img src={bulb} alt="" className="icon" />
            </motion.div>
          </div>
          <h3 className="">Intuitive</h3>
          <h4 className="text-c">
            Strong preference for easy to use, intuitive UX/UI.
          </h4>
        </div>
        <div className="feature-box">
          <div className="hexagon-container">
            <motion.div
              animate={controlsForFeatures}
              initial={"hidden"}
              variants={featureVariants}
              className="hexagon"
            >
              <img src={rocket} alt="" className="icon" />
            </motion.div>
          </div>
          <h3 className="">Dynamic</h3>
          <h4 className="text-c">
            I love bringing websites to life with dynamic, animated pages.
          </h4>
        </div>
      </div>
      <div className="100pxbox" style={{ height: "100px" }}></div>
    </div>
  );
};

export default About;
