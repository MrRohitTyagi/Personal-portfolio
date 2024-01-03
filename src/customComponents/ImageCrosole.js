import React, { useCallback, useContext, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "App";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageCrosole = ({ src, images, desc, name, tech }) => {
  const [layer, setLayer] = useState(false);
  const [showBaner, setshowBaner] = useState(false);
  const closeLayer = useCallback((e) => {
    e.stopPropagation();
    setLayer(false);
  }, []);
  return (
    <motion.div
      // variants={projectvarients}
      animate={{ y: 0 }}
      initial={{ y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="project"
        onMouseEnter={() => setshowBaner(true)}
        onMouseLeave={() => setshowBaner(false)}
      >
        <img
          className="project-image"
          src={images?.[0]}
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
              <h1>{name}</h1>
              <h4 style={{ color: "#23c3c9" }}>{tech}</h4>
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
        <Layer closeLayer={closeLayer} heading={name} desc={desc} src={src}>
          <ImgSlider images={images} />
        </Layer>
      )}
    </motion.div>
  );
};
const ImgSlider = ({ images }) => {
  return (
    <motion.div className="image-slider-cont">
      <Carousel>
        {images.map((i, ind) => {
          return <img src={i} key={ind} alt="img" />;
        })}
      </Carousel>
    </motion.div>
  );
};
export const Layer = ({ closeLayer, children, desc, sub, heading, src }) => {
  const { aboutBgColor } = useContext(ThemeContext);
  return (
    <div className="layer">
      <motion.div
        animate={{ top: "50%" }}
        initial={{ top: "-100%" }}
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
              <a href={src} without rel="noreferrer" target="_blank">
                VISIT SITE
              </a>
            </motion.a>
            <i onClick={closeLayer} class="s13 fa-solid fa-xmark"></i>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageCrosole;
