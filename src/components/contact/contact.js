import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { ThemeContext } from "App";
import useIntersectionObserver from "utils/useIntersectionObserver";

import "./contact.css";
import { useInView } from "react-intersection-observer";
import InsagramSvg from "assets/insagram.svg";
import LinkedlnSvg from "assets/Linkedln.svg";
import GithubSvg from "assets/Github.svg";
import WhatsappSvg from "assets/Whatsapp.svg";
import TypingEffect from "customComponents/TypingAnimation";
import { headingVariants } from "constants";

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

  const { control, ref } = useIntersectionObserver();
  const formRef = useRef();
  const { skillsBgColor, lightTextColor } = useContext(ThemeContext);
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email);
    let hasError = false;
    if (!isValidEmail) {
      setEmailError((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
      hasError = true;
    }
    if (!formData.name) {
      setEmailError((prev) => ({
        ...prev,
        name: "Please enter your name",
      }));
      hasError = true;
    }
    if (!formData.message) {
      setEmailError((prev) => ({
        ...prev,
        message: "Please enter a message",
      }));
      hasError = true;
    }
    if (hasError) return;

    emailjs
      .sendForm(
        "service_sinjxn5",
        "template_xx053ho",
        formRef.current,
        "1PYmfsU0BpSexizI2"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setEmailError({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };
  return (
    <div
      ref={ref}
      id="contact-section"
      className="full main-project"
      style={{ background: skillsBgColor, color: lightTextColor }}
    >
      <div className="section-heading-project full-w align-c">
        <motion.div
          ref={contactRef}
          className="border-bottom-text-project"
          initial="hidden"
          animate={control}
          variants={headingVariants}
        >
          Contact
        </motion.div>
      </div>
      <h3 className="contact-subheading">
        <TypingEffect
          time={50}
          text=" Have a question or want to work together   ?"
        />
      </h3>
      <div className="grid-container">
        {contactInView && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="contact-form"
          >
            <form
              ref={formRef}
              className="contact-box-container"
              onSubmit={handleSubmit}
            >
              <div className="form-box">
                <input
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
                  type="text"
                  id="input-field"
                  placeholder="Name"
                />
                {emailError.name && (
                  <p className="error-message">{emailError.name}</p>
                )}
              </div>
              <div className="form-box">
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="text"
                  name="email"
                  id="input-field"
                  placeholder="Enter email"
                />
                {emailError.email && (
                  <p className="error-message">{emailError.email}</p>
                )}
              </div>
              <div className="form-box">
                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  type="text"
                  name="message"
                  id="txtarea-field"
                  placeholder="Your Message"
                />
                {emailError.message && (
                  <p className="error-message">{emailError.message}</p>
                )}
              </div>
              <div className="submit-button">
                <motion.button
                  type="submit"
                  whileHover={{
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                  initial={{ x: "-300px", opacity: 0 }}
                  animate={{ x: "0px", opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="w-m-w-button page-link button-highlight "
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
        <div className="social-handles">
          <div className="socials">
            <InsagramSvg />
            <LinkedlnSvg />
            <GithubSvg />
            <WhatsappSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
