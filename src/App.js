import React, { createContext, useEffect, useState } from "react";
import HomeSection from "./components/home/HomeSection";
import About from "components/about/About";
import Navbar from "components/navbar/Navbar";

import profile from "assets/my.png";
import Skills from "components/skills/Skills";
import Projects from "components/projects/Projects";
import { BECONFIG } from "beconfig";
import CoverEffect from "customComponents/CoverEffect";
import Contact from "components/contact/contact";
const ThemeContext = createContext();
const ConfigContext = createContext();

const theme = {
  homeBgColor: "#252934",
  aboutBgColor: "#000000",
  navbarBgColor: "#000000",
  skillsColor: "#23c3c9",
  skillsBgColor: "#000000",
  lightTextColor: "rgb(228, 223, 214)",
  userProfile: profile,
  // userProfile:
  //   "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
};

const App = () => {
  const [config, setConfig] = useState({});
  useEffect(() => {
    (function fetchConfig() {
      setConfig(BECONFIG);
    })();
  });
  return (
    <ThemeContext.Provider value={theme}>
      <ConfigContext.Provider value={config}>
        <div className="main-container">
          <Navbar />
          <CoverEffect>
            <HomeSection />
          </CoverEffect>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </ConfigContext.Provider>
    </ThemeContext.Provider>
  );
};
export { ThemeContext };
export { ConfigContext };
export default App;
