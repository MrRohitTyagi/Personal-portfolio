import rocket from "assets/rocket.svg";
import devices from "assets/devices.svg";
import bulb from "assets/bulb.svg";
import speed from "assets/speed.svg";
import profile from "assets/my.png";

import nodejs from "assets/nodejs.svg";
import bootstrap from "assets/bootstrap.svg";
import css from "assets/css.svg";
import html from "assets/html.svg";
import javascript from "assets/javascript.svg";
import mongo from "assets/mongo.svg";
import python from "assets/python.svg";
import react from "assets/react.svg";
import redux from "assets/redux.svg";
import express from "assets/express-js.svg";
import framer from "assets/framer.svg";

export const BECONFIG = {
  featureBox: [
    {
      image: speed,
      heading: "Fast",
      description:
        " Fast load times and lag free interaction, my highest priority.",
    },
    {
      image: devices,
      heading: "Responsive",
      description: "My layouts will work on any device, big or small.",
    },
    {
      image: bulb,
      heading: "Intuitive",
      description: "Strong preference for easy to use, intuitive UX/UI.",
    },
    {
      image: rocket,
      heading: "Dynamic",
      description:
        " I love bringing websites to life with dynamic, animated pages.",
    },
  ],

  aboutMe: {
    tagLine: `i'm a MERN stack developer`,
    name: "Rohit Tyagi.",
    summery: `MERN Stack Developer with 1 year of experience in designing and
    maintaining web applications. Proficient in MongoDB, Express.js,
    React.js, and Node.js. Skilled in front-end and back-end
    development, RESTful API integration, and database management.
    Strong troubleshooter and optimizer, committed to staying updated on
    the latest technologies. Passionate about delivering cutting-edge
    solutions and continuous learning.`,
    profile: profile,
  },
  skillsSection: [
    {
      heading: "Frontend Skills",
      skills: [
        { name: "React", image: react },
        { name: "Javascript", image: javascript },
        { name: "Redux", image: redux },
        { name: "Css", image: css },
        { name: "Html", image: html },
        { name: "Bootstrap", image: bootstrap },
        { name: "Framer motion", image: framer },
      ],
    },
    {
      heading: "Backend Skills",
      skills: [
        { name: "Node js", image: nodejs },
        { name: "Express js", image: express },
        { name: "Mongo DB", image: mongo },
      ],
    },
    {
      heading: "Programming Languages",
      skills: [{ name: "Python", image: python }],
    },
  ],
  experienceSection: [
    {
      date: "10/2022 - Present",
      position: "Associate Software Engineer",
      companyName: "Thoughts2Binary Consulting & Solutions",
      role: [
        `Spearheaded the development of the core product, contributing to
        its enhanced functionality and user experience.`,
        `Collaborated closely with UX/UI designers to transform design
        mockups and wireframes into pixelperfect web interfaces,
        utilizing React.js and other frontend libraries.`,
        `Established seamless communication between frontend and backend
        systems, ensuring data consistency and optimal user experiences.`,
        `Utilized a tech stack including React.js, Redux, git, npm,
        Javascript, grommet, and Amazon Web Services (AWS).`,
      ],
    },
    {
      date: "11/2021 - 05/2022",
      position: "Web Developer Intern",
      companyName: "Pepcoding Education Pvt Ltd.",
      role: [
        `Assisted in troubleshooting, debugging code, and enhancing
      website functionality.`,
        `Gained practical experience with HTML, CSS, JavaScript, Node.js
      and data structures.`,
      ],
    },
  ],
  projectsSection:[]
};
