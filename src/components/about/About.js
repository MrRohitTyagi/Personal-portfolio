import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./about.css";
import { ConfigContext, ThemeContext } from "App";
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
  const { aboutBgColor, lightTextColor } = useContext(ThemeContext);

  const { featureBox, aboutMe } = useContext(ConfigContext);

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
        <img src={aboutMe?.profile} alt="" className="profile-pic" />

        <div className="details">
          <h3 className="text-c description">{aboutMe?.summery}</h3>
          <div className="socials">
            <InsagramSvg />
            <LinkedlnSvg />
            <GithubSvg />
            <WhatsappSvg />
          </div>
        </div>
      </section>
      <div className="feature-container flex-row">
        {featureBox?.map((feature) => {
          return (
            <div className="feature-box" key={feature.heading}>
              <div className="hexagon-container">
                <motion.div
                  transition={{ duration: 0.5 }}
                  animate={controlsForFeatures}
                  initial={"hidden"}
                  variants={featureVariants}
                  className="hexagon"
                >
                  <img src={feature.image} alt="img" className="icon" />
                </motion.div>
              </div>
              <h3 className="">{feature.heading}</h3>
              <h4 className="text-c" ref={featuresRef}>
                {feature.description}
              </h4>
            </div>
          );
        })}
      </div>
      <div className="100pxbox" style={{ height: "100px" }}></div>
    </div>
  );
};

export default About;
