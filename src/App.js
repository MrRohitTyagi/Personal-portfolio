import React, { createContext } from "react";
import HomeSection from "./components/home/HomeSection";
import About from "components/about/About";
import Navbar from "components/navbar/Navbar";

import Skills from "components/skills/Skills";
import Projects from "components/projects/Projects";
import { BECONFIG } from "beconfig";
import CoverEffect from "customComponents/CoverEffect";
import Contact from "components/contact/contact";
import Chatbot from "components/chatbot/Chatbot";

import { theme } from "./theme";

import { ReactLenis } from "lenis/react";

const ThemeContext = createContext();
const ConfigContext = createContext();

const App = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <ConfigContext.Provider value={BECONFIG}>
        <ReactLenis root>
          <div className="main-container">
            <Navbar />
            <CoverEffect>
              <HomeSection />
            </CoverEffect>
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Chatbot />
          </div>
        </ReactLenis>
      </ConfigContext.Provider>
    </ThemeContext.Provider>
  );
};
export { ThemeContext };
export { ConfigContext };
export default App;
