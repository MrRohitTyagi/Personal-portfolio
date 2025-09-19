import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { scrollToSection } from "utils";
import { Sparkles, Code, Zap, Rocket } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

const FloatingIcons = () => {
  const icons = [
    { Icon: Code, x: "8%", y: "15%", color: "text-blue-400", size: "w-12 h-12" },
    { Icon: Sparkles, x: "85%", y: "12%", color: "text-purple-400", size: "w-10 h-10" },
    { Icon: Zap, x: "12%", y: "75%", color: "text-yellow-400", size: "w-10 h-10" },
    { Icon: Rocket, x: "88%", y: "78%", color: "text-green-400", size: "w-12 h-12" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {icons.map(({ Icon, x, y, color, size }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}`}
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            delay: index * 2,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className={`${size} drop-shadow-lg`} />
        </motion.div>
      ))}
    </div>
  );
};


const HomeSection = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

        mouseX.set(x * 50);
        mouseY.set(y * 50);
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={ref}
      id="home-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0 bg-mesh opacity-60" />

      {/* Additional Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-2/3 left-1/6 w-24 h-24 bg-gradient-to-r from-cyan-500/15 to-green-500/15 rounded-full blur-lg"
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-1/5 right-1/5 w-16 h-16 border-2 border-white/20 rotate-45 rounded-lg"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/8 w-12 h-12 border border-purple-400/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Multiple Mouse-following gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl"
        style={{ x: mouseX, y: mouseY }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-pink-500/20 to-orange-500/20 blur-2xl"
        style={{
          x: useTransform(mouseX, [0, 100], [0, -50]),
          y: useTransform(mouseY, [0, 100], [0, 80])
        }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/25 to-green-500/25 blur-3xl"
        style={{
          x: useTransform(mouseX, [0, 100], [0, 30]),
          y: useTransform(mouseY, [0, 100], [0, -40])
        }}
      />

      {/* Floating Icons */}
      <FloatingIcons />

      {/* Main Content */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 300], [0, -50]) }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom text-center z-20 relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="space-y-8 max-w-6xl mx-auto">
          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <div className="mb-12">
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                  Hello, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    <TypeAnimation
                      sequence={[
                        'Rohit Tyagi',
                        3000,
                        'a Developer',
                        2000,
                        'a Creator',
                        2000,
                        'an Innovator',
                        2000,
                      ]}
                      wrapper="span"
                      speed={40}
                      style={{ display: 'inline-block' }}
                      repeat={Infinity}
                    />
                  </span>
                </h1>
              </motion.div>

              <motion.div
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/80 leading-relaxed"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              >
                Full Stack Developer
              </motion.div>
            </div>

            {/* Simplified Subtitle */}
            <motion.div
              className="mt-8 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed mb-8">
                Crafting exceptional digital experiences with{" "}
                <span className="text-blue-400 font-semibold">modern technologies</span>{" "}
                and{" "}
                <span className="text-purple-400 font-semibold">innovative solutions</span>
              </p>

              {/* Technology highlights */}
              <div className="flex flex-wrap justify-center gap-3">
                {['React', 'Node.js', 'TypeScript', 'Next.js', 'Python'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.3, ease: "easeOut" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
          >
            <button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection("about-section")}
            >
              <span className="flex items-center gap-2">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                Discover My Journey
              </span>
            </button>

            <button
              className="px-6 sm:px-8 py-3 sm:py-4 glass-button text-base sm:text-lg font-semibold flex items-center gap-2 hover:bg-white/15 transition-all duration-300"
              onClick={() => scrollToSection("projects-section")}
            >
              <Code className="w-4 h-4 sm:w-5 sm:h-5" />
              View My Work
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center glass-card px-3 sm:px-6 py-3 sm:py-4 rounded-xl hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-white/60 text-xs sm:text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6, ease: "easeOut" }}
          >
            <div
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => scrollToSection("about-section")}
            >
              <span className="text-xs sm:text-sm mb-2 sm:mb-3 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                Scroll to explore
              </span>

              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/50 transition-colors duration-300">
                <motion.div
                  className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2"
                  animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />

      {/* Subtle Ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-50" />

    </section>
  );
};

export default HomeSection;
