import React, { useState, useEffect, useContext, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConfigContext } from "App";
import { scrollToSection } from "utils";
import { Menu, X, Home, User, Code, Folder, Mail, Sun, Moon } from "lucide-react";
import { cn } from "utils/cn";

const NavItem = ({ icon: Icon, label, isActive, onClick, isMobile = false }) => (
  <motion.button
    onClick={onClick}
    className={cn(
      "relative flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300",
      "hover:bg-white/10 active:scale-95",
      isMobile ? "w-full justify-start text-base py-3" : "text-sm",
      isActive ? "text-white bg-white/10" : "text-white/70 hover:text-white"
    )}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* Background glow effect */}
    <motion.div
      className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0"
      whileHover={{ opacity: isActive ? 0.5 : 0.3 }}
      transition={{ duration: 0.2 }}
    />

    <Icon className={cn("w-4 h-4 flex-shrink-0", isMobile && "w-5 h-5")} />
    <span className="relative z-10">{label}</span>

  </motion.button>
);

const ThemeToggle = ({ isDark, toggle }) => (
  <motion.button
    onClick={toggle}
    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 180 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      </motion.div>
    </AnimatePresence>
  </motion.button>
);

const Navbar = () => {
  const { aboutMe } = useContext(ConfigContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home-section");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const navItems = useMemo(() => [
    { icon: Home, label: "Home", section: "home-section" },
    { icon: User, label: "About", section: "about-section" },
    { icon: Code, label: "Skills", section: "skills-section" },
    { icon: Folder, label: "Projects", section: "projects-section" },
    { icon: Mail, label: "Contact", section: "contact-section" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.section);
      const sectionElements = sections.map(section =>
        document.getElementById(section)
      ).filter(Boolean);

      let currentSection = sections[0];

      for (const element of sectionElements) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = element.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "backdrop-blur-xl bg-black/20 border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Logo/Brand */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {aboutMe?.name?.charAt(0) || "R"}
              </motion.div>

              <motion.span
                className="text-white font-bold text-xl hidden sm:block"
                whileHover={{ scale: 1.02 }}
              >
                {aboutMe?.name || "Portfolio"}
              </motion.span>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center gap-1 p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 30 }}
            >
              {navItems.map((item) => (
                <NavItem
                  key={item.section}
                  {...item}
                  isActive={activeSection === item.section}
                  onClick={() => handleNavClick(item.section)}
                />
              ))}
            </motion.div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <ThemeToggle isDark={isDarkTheme} toggle={toggleTheme} />

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'menu'}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-black/90 border-b border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.section}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavItem
                      {...item}
                      isActive={activeSection === item.section}
                      onClick={() => handleNavClick(item.section)}
                      isMobile
                    />
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  className="pt-4 mt-4 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 + 0.2 }}
                >
                  <button
                    onClick={() => handleNavClick("contact-section")}
                    className="w-full btn-primary text-sm"
                  >
                    Let's Work Together
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Enhanced Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50 shadow-lg"
        style={{
          scaleX: useScrollProgress(),
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Enhanced Floating Action Button for Mobile */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white md:hidden z-40 overflow-hidden"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleNavClick("contact-section")}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="relative z-10"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Mail className="w-6 h-6" />
        </motion.div>

        {/* Pulsing ring effect */}
        <motion.div
          className="absolute inset-0 border-2 border-white/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>
    </>
  );
};

// Custom hook for scroll progress
const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return scrollProgress;
};

export default Navbar;
