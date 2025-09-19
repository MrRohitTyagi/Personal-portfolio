import React, { createContext, Suspense, lazy } from "react";
import { ReactLenis } from "lenis/react";
import { BECONFIG } from "beconfig";
import { theme } from "./theme";

// Lazy load components for better performance
const HomeSection = lazy(() => import("./components/home/HomeSection"));
const About = lazy(() => import("components/about/About"));
const Navbar = lazy(() => import("components/navbar/Navbar"));
const Skills = lazy(() => import("components/skills/Skills"));
const Projects = lazy(() => import("components/projects/Projects"));
const Contact = lazy(() => import("components/contact/contact"));
const Chatbot = lazy(() => import("components/chatbot/Chatbot"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
      <div
        className="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-t-purple-600 animate-spin"
        style={{ animationDelay: "0.1s" }}
      ></div>
    </div>
  </div>
);

const ThemeContext = createContext();
const ConfigContext = createContext();

const App = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <ConfigContext.Provider value={BECONFIG}>
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
          }}
        >
          <div className="main-container">
            <Suspense fallback={<LoadingSpinner />}>
              <Navbar />
              <Suspense
                fallback={
                  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800" />
                }
              >
                <HomeSection />
              </Suspense>
              <Suspense fallback={<div className="py-20 bg-transparent" />}>
                <About />
              </Suspense>
              <Suspense fallback={<div className="py-20 bg-transparent" />}>
                <Skills />
              </Suspense>
              <Suspense fallback={<div className="py-20 bg-transparent" />}>
                <Projects />
              </Suspense>
              <Suspense fallback={<div className="py-20 bg-transparent" />}>
                <Contact />
              </Suspense>
              <Suspense fallback={null}>
                <Chatbot />
              </Suspense>
            </Suspense>
          </div>
        </ReactLenis>
      </ConfigContext.Provider>
    </ThemeContext.Provider>
  );
};
export { ThemeContext };
export { ConfigContext };
export default App;
