import React, { useContext, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ConfigContext } from "App";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play, Folder, Zap, Heart, Eye } from "lucide-react";
import { cn } from "utils/cn";

const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [viewCount] = useState(Math.floor(Math.random() * 1000) + 100);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const techStack = project.tech.split(' / ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="project-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      {/* Image Carousel Section */}
      <div className="relative overflow-hidden rounded-t-2xl h-64 bg-gradient-to-br from-primary-500/10 to-accent-500/10">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Image Navigation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={prevImage}
            className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={nextImage}
            className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {project.images.map((_, imgIndex) => (
            <motion.button
              key={imgIndex}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                imgIndex === currentImageIndex ? "bg-white" : "bg-white/40"
              )}
              onClick={() => setCurrentImageIndex(imgIndex)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Project type badge */}
        <motion.div
          className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        >
          <Folder className="w-3 h-3 inline mr-1" />
          Web App
        </motion.div>

        {/* Stats overlay */}
        <motion.div
          className="absolute top-4 right-4 flex flex-col gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
        >
          <motion.div
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs"
            whileHover={{ scale: 1.05 }}
          >
            <Eye className="w-3 h-3" />
            <span>{viewCount}</span>
          </motion.div>

          <motion.button
            className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-full backdrop-blur-sm text-xs transition-colors",
              isLiked ? "bg-red-500/80 text-white" : "bg-black/50 text-white"
            )}
            onClick={() => setIsLiked(!isLiked)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ scale: isLiked ? [1, 1.3, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Heart className={cn("w-3 h-3", isLiked && "fill-current")} />
            </motion.div>
            <span>{isLiked ? Math.floor(Math.random() * 50) + 20 : Math.floor(Math.random() * 20) + 5}</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title and Links */}
        <div className="flex items-start justify-between gap-4">
          <motion.h3
            className="text-xl font-bold text-white group-hover:text-gradient-primary transition-colors"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {project.title}
          </motion.h3>

          <div className="flex gap-2">
            <motion.a
              href={project.src}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary-500/10 hover:bg-primary-500/20 flex items-center justify-center text-primary-400 hover:text-primary-300 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>

            <motion.button
              className="w-10 h-10 rounded-lg bg-accent-500/10 hover:bg-accent-500/20 flex items-center justify-center text-accent-400 hover:text-accent-300 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="text-white/70 leading-relaxed text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
        >
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-white/80">Tech Stack</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-500/10 to-accent-500/10 text-white/80 rounded-full border border-white/10"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech.trim()}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <motion.a
            href={project.src}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-4 py-3 rounded-xl flex items-center justify-center gap-2 text-sm transition-all duration-300"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="w-4 h-4" />
            Live Demo
          </motion.a>

          <motion.button
            className="px-4 py-3 glass-button font-semibold text-sm flex items-center justify-center gap-2"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.15)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(project.github || '#', '_blank')}
          >
            <Github className="w-4 h-4" />
            Code
          </motion.button>
        </div>
      </div>

      {/* Animated border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        animate={{
          borderColor: isHovered
            ? ["rgba(102, 126, 234, 0.5)", "rgba(245, 87, 108, 0.5)", "rgba(102, 126, 234, 0.5)"]
            : "transparent"
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-xl opacity-0 group-hover:opacity-30"
        initial={false}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const { projectsSection } = useContext(ConfigContext);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -150]);

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects-section" className="relative section-padding bg-mesh">
      {/* Animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-32 left-20 w-72 h-72 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute bottom-32 right-20 w-96 h-96 rounded-full bg-accent-500/5 blur-3xl" />

        {/* Floating project icons */}
        {[Folder, ExternalLink, Github, Play].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-white/3"
            style={{
              top: `${10 + index * 20}%`,
              right: `${5 + index * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 2,
            }}
          >
            <Icon className="w-16 h-16" />
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
            <Folder className="w-4 h-4 text-accent-400" />
            <span className="text-white/80">Featured Work</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Projects & Portfolio</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of my most impactful work, demonstrating expertise in
            full-stack development, modern design, and scalable architecture
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
        >
          {projectsSection?.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="glass-card p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              Interested in Working Together?
            </motion.h3>

            <p className="text-white/70 mb-6 leading-relaxed">
              I'm always excited to take on new challenges and create
              innovative solutions. Let's discuss how we can bring your
              next project to life.
            </p>

            <motion.button
              className="btn-primary flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact-section')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              <ExternalLink className="w-5 h-5" />
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
