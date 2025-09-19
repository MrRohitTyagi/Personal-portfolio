import React, { useContext, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ConfigContext } from "App";
import { Code, Sparkles, Database, Cloud, Zap, Star, Cpu, Globe, Palette, Lock } from "lucide-react";

const skillCategoryIcons = {
  "Frontend Skills": Code,
  "Backend Skills": Database,
  "Amazon Web Services": Cloud,
  "Programming Languages": Sparkles,
  "DevOps & Tools": Cpu,
  "Design & UI/UX": Palette,
  "Mobile Development": Globe,
  "Security": Lock,
};

const SkillCard = ({ skill, index, categoryIcon: CategoryIcon, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="skill-card group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Skill Icon */}
      <motion.div
        className="relative w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <motion.img
          src={skill.image}
          alt={skill.name}
          className="w-8 h-8 object-contain"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />

        {/* Floating category icon */}
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0.7 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <CategoryIcon className="w-3 h-3 text-white" />
        </motion.div>
      </motion.div>

      {/* Skill Name */}
      <motion.h3
        className="text-white font-semibold text-center mb-3 text-sm group-hover:text-gradient-primary"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        {skill.name}
      </motion.h3>

      {/* Hover effect particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={false}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-400 rounded-full"
            style={{
              top: `${20 + i * 25}%`,
              right: `${10 + i * 10}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 blur-xl opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const SkillCategory = ({ category, index }) => {
  const CategoryIcon = skillCategoryIcons[category.heading] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Category Header */}
      <motion.div
        className="flex items-center gap-4 mb-8"
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <CategoryIcon className="w-6 h-6 text-primary-400" />
        </motion.div>

        <div>
          <motion.h3
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {category.heading}
          </motion.h3>
          <motion.div
            className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {category.skills?.map((skill, skillIndex) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={skillIndex}
            categoryIcon={CategoryIcon}
            isVisible={true}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { skillsSection } = useContext(ConfigContext);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills-section" className="relative section-padding bg-mesh">
      {/* Animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent-500/5 blur-3xl" />

        {/* Floating skill icons */}
        {[Code, Database, Cloud, Sparkles].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-white/5"
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: index * 1.5,
            }}
          >
            <Icon className="w-12 h-12" />
          </motion.div>
        ))}
      </motion.div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Zap className="w-4 h-4 text-accent-400" />
            <span className="text-white/80">Technical Expertise</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Skills & Technologies</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit of modern technologies and frameworks
            I use to build exceptional digital experiences
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          ref={skillsRef}
          className="space-y-16"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
        >
          {skillsSection?.map((category, index) => (
            <SkillCategory
              key={category.heading}
              category={category}
              index={index}
            />
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div
            className="glass-card p-8 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Star className="w-6 h-6 text-accent-400" />
              <h3 className="text-2xl font-bold text-white">Always Learning</h3>
              <Star className="w-6 h-6 text-accent-400" />
            </motion.div>

            <p className="text-white/70 text-lg leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools,
              frameworks, and best practices to stay at the forefront of web development.
              My passion for learning ensures that every project benefits from the latest innovations.
            </p>

            {/* Animated progress indicators */}
            <div className="flex justify-center gap-8 mt-8">
              {['React', 'Node.js', 'TypeScript', 'AWS'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-2 mx-auto"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <span className="text-primary-400 font-bold text-sm">{tech.charAt(0)}</span>
                  </motion.div>
                  <span className="text-white/60 text-xs">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
