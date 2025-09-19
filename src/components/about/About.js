import React, { useContext, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ConfigContext } from "App";
import { Award, Calendar, MapPin, Download, ExternalLink, Heart } from "lucide-react";
import RenderBoldText from "customComponents/RenderBoldText";
import CountUp from 'react-countup';

const StatCard = ({ icon: Icon, label, value, delay, isVisible }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isVisible && !startAnimation) {
      setTimeout(() => setStartAnimation(true), delay * 1000);
    }
  }, [isVisible, delay, startAnimation]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      viewport={{ once: false, threshold: 0.05, margin: "50px" }}
      className="glass-card p-6 text-center group hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-500 relative overflow-hidden"
      whileHover={{ scale: 1.05, y: -5 }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative z-10"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Icon className="w-7 h-7 text-blue-400" />
        </motion.div>
      </motion.div>

      <motion.div
        className="text-3xl font-bold text-white mb-2 relative z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
        viewport={{ once: false, threshold: 0.05, margin: "50px" }}
      >
        {startAnimation && typeof value === 'string' && value.includes('+') ? (
          <CountUp
            end={parseInt(value)}
            duration={2}
            suffix="+"
            preserveValue
          />
        ) : startAnimation && value.includes('%') ? (
          <CountUp
            end={parseInt(value)}
            duration={2}
            suffix="%"
            preserveValue
          />
        ) : (
          value
        )}
      </motion.div>
      <div className="text-white/70 text-sm font-medium relative z-10">{label}</div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        whileHover={{
          borderImage: "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899) 1",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: false, threshold: 0.05, margin: "50px" }}
      className="glass-card p-8 group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <motion.div
          className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <img
            src={feature.image}
            alt={feature.heading}
            className="w-8 h-8 filter brightness-0 invert opacity-80"
          />
        </motion.div>

        <motion.h3
          className="text-xl font-semibold text-white mb-4 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {feature.heading}
        </motion.h3>

        <p className="text-white/70 text-center leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        animate={{
          borderColor: isHovered
            ? ["rgba(102, 126, 234, 0.5)", "rgba(245, 87, 108, 0.5)", "rgba(102, 126, 234, 0.5)"]
            : "transparent"
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
    </motion.div>
  );
};

const About = () => {
  const { featureBox, aboutMe, experienceSection } = useContext(ConfigContext);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);

  const [profileRef, profileInView] = useInView({
    triggerOnce: false,
    threshold: 0.05,
    rootMargin: '100px 0px'
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const stats = [
    { icon: Calendar, label: "Years Experience", value: "3+", delay: 0 },
    { icon: Award, label: "Projects Completed", value: "50+", delay: 0.1 },
    { icon: Heart, label: "Happy Clients", value: "100%", delay: 0.2 },
    { icon: MapPin, label: "Countries Served", value: "5+", delay: 0.3 }
  ];

  return (
    <section id="about-section" className="relative section-padding bg-mesh">
      {/* Animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary-500/5 blur-2xl" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-accent-500/5 blur-2xl" />
      </motion.div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, threshold: 0.05, margin: "100px" }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: false, threshold: 0.05, margin: "100px" }}
          >
            <span className="gradient-text">About Me</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, threshold: 0.05, margin: "100px" }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Profile Section */}
          <motion.div
            ref={profileRef}
            variants={containerVariants}
            initial="hidden"
            animate={profileInView ? "visible" : "hidden"}
            className="order-2 lg:order-1 flex flex-col justify-center"
          >
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  className="relative w-80 h-80 mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {/* Animated border rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary-500/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-2 rounded-full border-2 border-accent-500/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Profile image */}
                  <motion.img
                    src={aboutMe?.profile}
                    alt="Profile"
                    className="absolute inset-2 w-full h-full object-cover rounded-full"
                    style={{ width: 'calc(100% - 16px)', height: 'calc(100% - 16px)' }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />

                  {/* Glow effect */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-xl" />
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-4"
                >
                  {stats.map((stat, index) => (
                    <StatCard key={stat.label} {...stat} isVisible={profileInView} />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={profileInView ? "visible" : "hidden"}
            className="order-1 lg:order-2 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-3xl font-bold text-white mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                Crafting Digital Excellence
              </motion.h3>

              <div className="text-lg text-white/80 leading-relaxed space-y-4">
                <RenderBoldText text={aboutMe?.summery} />
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                variants={itemVariants}
              >
                <motion.button
                  className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold overflow-hidden shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </span>
                </motion.button>

                <motion.button
                  className="group px-6 py-3 glass-button font-semibold flex items-center gap-2 hover:bg-white/20"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  View LinkedIn
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-2xl font-semibold text-white mb-6">Experience</h4>
              <div className="space-y-6">
                {experienceSection?.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-6 relative overflow-hidden group"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: false, threshold: 0.05, margin: "50px" }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <motion.h5
                        className="text-xl font-semibold text-white"
                        whileHover={{ color: "#667eea" }}
                        transition={{ duration: 0.2 }}
                      >
                        {exp.position}
                      </motion.h5>
                      <span className="text-accent-400 font-medium">{exp.date}</span>
                    </div>

                    <p className="text-primary-400 font-medium mb-4">{exp.companyName}</p>

                    <ul className="space-y-2 text-white/70">
                      {exp.role.map((role, roleIndex) => (
                        <motion.li
                          key={roleIndex}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: roleIndex * 0.1 }}
                          viewport={{ once: false, threshold: 0.05, margin: "50px" }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-2.5 flex-shrink-0" />
                          <RenderBoldText text={role} />
                        </motion.li>
                      ))}
                    </ul>

                    {/* Animated border on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-transparent"
                      whileHover={{
                        borderColor: "rgba(102, 126, 234, 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, threshold: 0.05, margin: "100px" }}
          className="mb-20"
        >
          <motion.h3
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, threshold: 0.05, margin: "100px" }}
          >
            <span className="gradient-text">What I Bring</span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureBox?.map((feature, index) => (
              <FeatureCard key={feature.heading} feature={feature} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
