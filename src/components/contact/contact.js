import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import {
  Mail,
  Send,
  User,
  MessageCircle,
  MapPin,
  Phone,
  Globe,
  Github,
  Linkedin,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { cn } from "utils/cn";

const ContactCard = ({ icon: Icon, title, content, link, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="glass-card p-6 group relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 text-center">
        <motion.div
          className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Icon className="w-6 h-6 text-primary-400" />
        </motion.div>

        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-primary-400 transition-colors inline-flex items-center gap-1"
          >
            {content}
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <p className="text-white/70">{content}</p>
        )}
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        animate={{
          borderColor: isHovered
            ? ["rgba(102, 126, 234, 0.3)", "rgba(245, 87, 108, 0.3)", "rgba(102, 126, 234, 0.3)"]
            : "transparent"
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailError, setEmailError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);

  const [contactRef] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear errors when user starts typing
    if (emailError[e.target.name]) {
      setEmailError({ ...emailError, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email);
    let hasError = false;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
      hasError = true;
    }

    if (!isValidEmail) {
      newErrors.email = "Please enter a valid email address";
      hasError = true;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
      hasError = true;
    }

    setEmailError(newErrors);

    if (hasError) {
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        "service_sinjxn5",
        "template_xx053ho",
        e.target,
        "1PYmfsU0BpSexizI2"
      );

      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus('error');

      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "tyagi4366@gmail.com",
      link: "mailto:tyagi4366@gmail.com",
      delay: 0.1
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9760147296",
      link: "tel:+919760147296",
      delay: 0.2
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Bareilly, UP, India",
      delay: 0.3
    },
    {
      icon: Globe,
      title: "Portfolio",
      content: "personal-portfolio-lake-six.vercel.app",
      link: "https://personal-portfolio-lake-six.vercel.app/",
      delay: 0.4
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/MrRohitTyagi",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/rt-rohit-tyagi/",
      color: "hover:text-blue-400"
    },
    {
      icon: Globe,
      label: "Portfolio",
      link: "https://personal-portfolio-lake-six.vercel.app/",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact-section" className="relative section-padding bg-mesh">
      {/* Animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent-500/5 blur-3xl" />

        {/* Floating contact icons */}
        {[Mail, Send, MessageCircle, Globe].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-white/3"
            style={{
              top: `${15 + index * 20}%`,
              left: `${10 + index * 15}%`,
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              delay: index * 1.8,
            }}
          >
            <Icon className="w-14 h-14" />
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
            <Mail className="w-4 h-4 text-accent-400" />
            <span className="text-white/80">Get In Touch</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Let's Work Together</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have a project in mind or want to discuss opportunities?
            I'd love to hear from you. Let's create something amazing together!
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Contact Form */}
          <motion.div
            ref={contactRef}
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="glass-card p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  className="flex items-center gap-3 p-4 mb-6 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="flex items-center gap-3 p-4 mb-6 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent",
                      emailError.name ? "border-red-500/50" : "border-white/20 hover:border-white/30"
                    )}
                    placeholder="Enter your full name"
                  />
                  {emailError.name && (
                    <motion.p
                      className="text-red-400 text-sm mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {emailError.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent",
                      emailError.email ? "border-red-500/50" : "border-white/20 hover:border-white/30"
                    )}
                    placeholder="Enter your email address"
                  />
                  {emailError.email && (
                    <motion.p
                      className="text-red-400 text-sm mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {emailError.email}
                    </motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={cn(
                      "w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent resize-none",
                      emailError.message ? "border-red-500/50" : "border-white/20 hover:border-white/30"
                    )}
                    placeholder="Tell me about your project or idea..."
                  />
                  {emailError.message && (
                    <motion.p
                      className="text-red-400 text-sm mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {emailError.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <ContactCard key={info.title} {...info} />
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="glass-card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 transition-all duration-300",
                      social.color
                    )}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-3">Ready to Start?</h4>
              <p className="text-white/60 text-sm mb-4">
                Let's discuss your project and bring your ideas to life!
              </p>
              <motion.button
                className="glass-button font-semibold text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Call
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;