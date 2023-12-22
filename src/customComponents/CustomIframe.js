import React, { useCallback, useContext, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "App";

const CustomIframe = ({ src, image }) => {
  const [layer, setLayer] = useState(false);
  const [showBaner, setshowBaner] = useState(false);
  const closeLayer = useCallback((e) => {
    e.stopPropagation();
    setLayer(false);
  }, []);
  return (
    <div>
      <div
        className="project"
        onMouseEnter={() => setshowBaner(true)}
        onMouseLeave={() => setshowBaner(false)}
      >
        <img
          className="project-image"
          src={image}
          alt="img"
          height="100%"
          width="100%"
        />
        {showBaner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="img-banner"
          >
            <motion.div
              initial={{ y: "-200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              style={{ alignItems: "center", textAlign: "center" }}
            >
              <h1>GraniteStack</h1>
              <h4 style={{ color: "#23c3c9" }}>React js</h4>
            </motion.div>
            <div style={{ minHeight: "50px" }}></div>
            <motion.button
              onClick={() => setLayer(!layer)}
              whileHover={{
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              initial={{ y: "200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-m-w-button page-link button-highlight"
            >
              Learn More
            </motion.button>
          </motion.div>
        )}
      </div>
      {layer && (
        <Layer
          closeLayer={closeLayer}
          heading={"GraniteStack"}
          desc={
            "GraniteStack enables effortless creation of Minimum Viable Products (MVPs) without code, enabling a low-cost approach to validate ideas while preparing for scale."
          }
        >
          <iframe
            height="100%"
            width="100%"
            title="gstack"
            src={src}
            frameborder="0"
          />
        </Layer>
      )}
    </div>
  );
};
export const Layer = ({ closeLayer, children, desc, sub, heading }) => {
  const { aboutBgColor } = useContext(ThemeContext);
  return (
    <div className="layer">
      <motion.div
        animate={{ height: "80%" }}
        initial={{ height: 0 }}
        className="modal-content"
        style={{ background: aboutBgColor }}
      >
        <div className="model-iframe">{children}</div>
        <div className="h20"></div>
        <div className="modal-footer">
          <div className="modal-heading">
            <h2>{heading}</h2>
            {sub && <h3>{sub}</h3>}
          </div>
          <div className="modal-desc">{desc}</div>
          <div className="modal-buttons">
            <motion.a
              whileHover={{
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              transition={{ duration: 0.1 }}
              className="w-m-w-button page-link button-highlight"
            >
              VISIT SITE
            </motion.a>
            <i onClick={closeLayer} class="s13 fa-solid fa-xmark"></i>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomIframe;
