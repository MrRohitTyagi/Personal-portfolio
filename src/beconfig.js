import rocket from "assets/rocket.svg";
import devices from "assets/devices.svg";
import bulb from "assets/bulb.svg";
import speed from "assets/speed.svg";
import profile from "assets/my.png";

import nodejs from "assets/nodejs.svg";
import materialUI from "assets/icons8-material-ui-800.svg";
import css from "assets/css.svg";
import html from "assets/html.svg";
import javascript from "assets/javascript.svg";
import mongo from "assets/mongo.svg";
import python from "assets/python.svg";
import react from "assets/react.svg";
import redux from "assets/redux.svg";
import express from "assets/express-js.svg";
import framer from "assets/framer.svg";
import tailwind from "assets/tailwind.svg";
import jwt from "assets/jwt.svg";
import postgres from "assets/postgres.svg";
import sql from "assets/sql.svg";

import granitestack1 from "assets/granitestack/1111.png";
import granitestack2 from "assets/granitestack/aipromter.png";
import granitestack3 from "assets/granitestack/Screenshot 2023-12-24 052015.png";

import t2c1 from "assets/t2c/t2c.png";
import t2c2 from "assets/t2c/Screenshot 2023-12-24 051317.png";
import t2c3 from "assets/t2c/t2c1.png";

import img1 from "assets/traveloris/1.png";
import img2 from "assets/traveloris/2.png";
import img3 from "assets/traveloris/3.png";

import workspaces1 from "assets/workspaces/inbox.png";
import workspaces2 from "assets/workspaces/login.png";
import workspaces3 from "assets/workspaces/new mail.png";
import workspaces4 from "assets/workspaces/open.png";

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
    name: "Rohit Tyagi",
    summery: `MERN Stack Developer with 1.5 year of experience in designing and
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
        { name: "Material", image: materialUI },
        { name: "Framer", image: framer },
        { name: "Tailwind", image: tailwind },
      ],
    },
    {
      heading: "Backend Skills",
      skills: [
        { name: "Node js", image: nodejs },
        { name: "Express js", image: express },
        { name: "Mongo DB", image: mongo },
        { name: "JWT", image: jwt },
        { name: "PostgresQl", image: postgres },
        { name: "SQL", image: sql },
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
  projectsSection: [
    {
      src: "https://granitestack.com/",
      images: [granitestack1, granitestack2, granitestack3],
      description: `GraniteStack enables effortless creation of Minimum Viable Products (MVPs) without code, enabling a low-cost approach to validate ideas while preparing for scale.`,
      title: `GraniteStack`,
      tech: "React js",
    },
    {
      src: "https://workspaces-orcin.vercel.app/inbox",
      images: [workspaces1, workspaces2, workspaces3, workspaces4],
      description: `Workspace is a sleek application that mirrors Gmail's efficiency, catering to seamless communication and collaboration. Developed with React, Node , Express & mongo DB, it offers an intuitive email system akin to Gmail. Its user-friendly design ensures easy email management makes Workspace a versatile platform for streamlined communication and productive teamwork.`,
      title: `Workspaces`,
      tech: "React js / Node / Express / Mongo DB      ",
    },
    {
      src: "https://www.traveloris.com/",
      images: [img1, img2, img3],
      description: `Traveloris is the smartest way to plan your trip. Our attractions have been carefully selected with the help of local explorer. Simply select what you want to see and let traveloris build your personalised itinerary.`,
      title: `Travel oris`,
      tech: "React js",
    },
    {
      src: "https://thoughts2-cart-com.vercel.app/",
      images: [t2c1, t2c2, t2c3],
      description: `Developed an intuitive e-commerce site with user authentication, an admin portal for product management, Stripe integration for secure payments, and an invoicing system with email delivery. Proficient in React, HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Achieved a seamless shopping experience with a focus on efficient product management.`,
      title: `Thoughts2Cart.com`,
      tech: "React js / Node / Express / Mongo DB",
    },
  ],
};
