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
import typescript from "assets/typescript.svg";
import mongo from "assets/mongo.svg";
import python from "assets/python.svg";
import react from "assets/react.svg";
import nextjs from "assets/nextjs-icon-svgrepo-com.svg";
import redux from "assets/redux.svg";
import express from "assets/express-js.svg";
import framer from "assets/framer.svg";
import tailwind from "assets/tailwind.svg";
import jwt from "assets/jwt.svg";
import postgres from "assets/postgres.svg";
import sql from "assets/sql.svg";
import ec2 from "assets/ec2.svg";
import s3 from "assets/s3.svg";
import dynamoDB from "assets/dynamoDb.svg";

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

import monday1 from "assets/mondayBoard/monday1.png";
import monday2 from "assets/mondayBoard/monday2.png";
import monday3 from "assets/mondayBoard/monday3.png";
import monday4 from "assets/mondayBoard/monday4.png";

import { calculateYearsAndMonths } from "utils";

const { monthsDifference, yearsDifference } =
  calculateYearsAndMonths("10/2022");

export const BECONFIG = {
  aboutMe: {
    tagLine: "I'm a Full-Stack Developer",
    name: "Rohit Tyagi",
    summery: `I am a software engineer with with ${yearsDifference} years and ${
      monthsDifference > 0 ? `${monthsDifference} months` : ""
    } of professional experience. 
I have a solid foundation in building scalable web
applications using React.js and Next.js. Proficient in MongoDB, Express, Redis, Prisma, and Node, I have successfully
contributed to various projects by implementing features, resolving issues, optimizing performance, and collaborating with
cross-functional teams for high-quality product delivery`,
    profile: profile,
  },
  featureBox: [
    {
      image: speed,
      heading: "Fast",
      description:
        "Prioritizing fast load times and smooth, lag-free interactions.",
    },
    {
      image: devices,
      heading: "Responsive",
      description: "Optimized layouts for all devices, big or small.",
    },
    {
      image: bulb,
      heading: "Intuitive",
      description: "Emphasis on intuitive and user-friendly UX/UI designs.",
    },
    {
      image: rocket,
      heading: "Dynamic",
      description: "Transforming ideas into dynamic and interactive web pages.",
    },
  ],

  skillsSection: [
    {
      heading: "Frontend Skills",
      skills: [
        { name: "Next.js", image: nextjs },
        { name: "React.js", image: react },
        { name: "JavaScript", image: javascript },
        { name: "TypeScript", image: typescript },
        { name: "Redux", image: redux },
        { name: "CSS", image: css },
        { name: "HTML", image: html },
        { name: "Material-UI", image: materialUI },
        { name: "Framer Motion", image: framer },
        { name: "Tailwind CSS", image: tailwind },
      ],
    },
    {
      heading: "Backend Skills",
      skills: [
        { name: "Node.js", image: nodejs },
        { name: "Express.js", image: express },
        { name: "MongoDB", image: mongo },
        { name: "JWT", image: jwt },
        { name: "PostgreSQL", image: postgres },
        { name: "SQL", image: sql },
      ],
    },
    {
      heading: "Amazon Web Services",
      skills: [
        { name: "S3", image: s3 },
        { name: "DynamoDB", image: dynamoDB },
        { name: "EC2", image: ec2 },
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
      position: "Software Engineer",
      companyName: "Thoughts2Binary Private Limited",
      role: [
        `Contributed significantly to the development of the **core product**, playing a key role in enhancing its functionality, user interface and user experience.`,

        `**Mentored** 2 new/junior team members, fostering a collaborative environment that improved **code quality** and adherence to **best practices**`,

        `Coordinated with UX/UI designers to transform design mock-ups and wireframes into **pixel-perfect** web interfaces, utilizing React.js and other frontend libraries.`,

        `I supported peers during urgent deployments and **tight deadlines** and **collaborated** closely with backend and infrastructure team members to align on **project timelines** and ensure smooth, **timely delivery**.`,
      ],
    },
    {
      date: "11/2021 - 05/2022",
      position: "Web Developer Intern",
      companyName: "Pepcoding Education Pvt Ltd.",
      role: [
        "Assisted in debugging and **optimizing** website functionality.",
        "Gained hands-on experience with HTML, CSS, JavaScript, Node.js, and **data structures**.",
      ],
    },
  ],
  projectsSection: [
    {
      src: "https://granitestack.com/",
      images: [granitestack1, granitestack2, granitestack3],
      description: `GraniteStack empowers users to create Minimum Viable Products (MVPs) effortlessly, enabling cost-effective validation of ideas while preparing for scalability.`,
      title: `GraniteStack`,
      tech: "React.js",
    },
    {
      src: "https://www.mondayboard.online/",
      images: [monday1, monday2, monday3, monday4],
      description: `A comprehensive task management system enabling efficient task creation, updates, and deletion, with real-time notifications and updates via WebSockets for seamless team collaboration. It features secure user authentication with JWT and advanced filtering and search options for streamlined task managemen`,
      title: `Mondayboard`,
      tech: "Next.js / TypeScript / Node.js / MongoDB / and Mongoose / WebSockets",
    },
    {
      src: "https://workspaces-orcin.vercel.app/inbox",
      images: [workspaces1, workspaces2, workspaces3, workspaces4],
      description: `Workspaces is a modern communication platform inspired by Gmail. Built with React, Node.js, Express, and MongoDB, it ensures efficient email management with an intuitive user interface for seamless communication.`,
      title: `Workspaces`,
      tech: "React.js / Node.js / Express / MongoDB",
    },
    {
      src: "https://www.traveloris.com/",
      images: [img1, img2, img3],
      description: `Traveloris simplifies trip planning with expertly curated attractions and personalized itineraries, helping users maximize their travel experiences.`,
      title: `Traveloris`,
      tech: "React.js",
    },
    {
      src: "https://thoughts2-cart-com.vercel.app/",
      images: [t2c1, t2c2, t2c3],
      description: `An e-commerce platform with user authentication, an admin portal for product management, secure payment integration via Stripe, and automated invoicing. Developed with React.js, Node.js, Express.js, and MongoDB, the platform provides a seamless shopping experience.`,
      title: `Thoughts2Cart.com`,
      tech: "React.js / Node.js / Express.js / MongoDB",
    },
  ],
};
