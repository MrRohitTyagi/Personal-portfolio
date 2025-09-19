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
    tagLine: "I'm a Full-Stack Developer & Design System Engineer",
    name: "Rohit Tyagi",
    summery: `I am a software engineer with ${yearsDifference} years and ${
      monthsDifference > 0 ? `${monthsDifference} months` : ""
    } of professional experience currently working at **Brevo** as a Design System Engineer.
I specialize in building **robust and scalable components** used by developers across multiple products. With expertise in React.js, Next.js, TypeScript, Node.js, and AWS, I have successfully contributed to various projects by implementing features, mentoring team members, and delivering high-quality solutions that reduce development time and improve user experience.`,
    profile: profile,
    email: "tyagi4366@gmail.com",
    phone: "+91 9760147296",
    location: "Bareilly, Uttar Pradesh, India",
    age: 25,
    dateOfBirth: "11-10-1999",
    currentPosition: "Software Engineer",
    workMode: "Hybrid",
    noticePeriod: "60 days",
    hobbies: ["Playing Snooker", "Coding", "Problem Solving"]
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
        { name: "Tailwind CSS", image: tailwind },
        { name: "Material-UI", image: materialUI },
        { name: "Framer Motion", image: framer },
      ],
    },
    {
      heading: "Backend Skills",
      skills: [
        { name: "Node.js", image: nodejs },
        { name: "Express.js", image: express },
        { name: "MongoDB", image: mongo },
        { name: "Mongoose", image: mongo },
        { name: "JWT", image: jwt },
        { name: "Socket.io", image: nodejs },
      ],
    },
    {
      heading: "DevOps & Tools",
      skills: [
        { name: "Docker", image: ec2 },
        { name: "CI/CD", image: ec2 },
        { name: "Jest", image: javascript },
      ],
    },
    {
      heading: "Amazon Web Services",
      skills: [
        { name: "EC2", image: ec2 },
        { name: "S3", image: s3 },
        { name: "DynamoDB", image: dynamoDB },
      ],
    },
    {
      heading: "Programming Languages",
      skills: [
        { name: "Go-lang", image: python },
        { name: "Python", image: python },
      ],
    },
  ],

  experienceSection: [
    {
      date: "03/2025 - Present",
      position: "Software Engineer",
      companyName: "Brevo",
      role: [
        `Part of the **Design System team**, responsible for building **robust and scalable components** that are used by developers across multiple products.`,

        `Contributed to creating **reusable UI components** ensuring consistency and maintainability across different applications.`,

        `Collaborated with **cross-functional teams** to enhance the developer experience and streamline product development.`,
      ],
    },
    {
      date: "10/2022 - 07/2025",
      position: "Software Engineer",
      companyName: "Thoughts2Binary Private Limited",
      role: [
        `Contributed significantly to the development of the **core product**, playing a key role in enhancing its functionality, user interface and user experience.`,

        `**Mentored** 2 new/junior team members, fostering a collaborative environment that improved **code quality** and adherence to **best practices**.`,

        `Coordinated with **UX/UI designers** to transform design mock-ups and wireframes into **pixel-perfect** web interfaces, utilizing React.js and other frontend libraries.`,

        `Supported peers during **urgent deployments** and tight deadlines and collaborated closely with backend and infrastructure team members to align on **project timelines** and ensure smooth, timely delivery.`,
      ],
    },
    {
      date: "11/2021 - 05/2022",
      position: "Web Developer Intern",
      companyName: "Pepcoding Education Pvt Ltd.",
      role: [
        "Assisted in **debugging, troubleshooting, and enhancing** web applications, gaining hands-on experience with HTML, CSS, JavaScript, Node.js, and **data structures**.",
      ],
    },
  ],
  projectsSection: [
    {
      src: "https://granitestack.com/",
      images: [granitestack1, granitestack2, granitestack3],
      description: `Significantly contributed to GraniteStack development at Thoughts2Binary, resulting in a 25% reduction in business costs. Engineered a form rendering engine converting SQL schema input into fully validated forms using Formik and Yup, reducing form development time by 40%.`,
      title: `Granite Stack (SaaS Platform)`,
      tech: "React / Redux / TypeScript / ReactFlow / Formik / RxJS / Yup / AWS",
      github: "https://github.com/MrRohitTyagi",
    },
    {
      src: "https://www.mondayboard.online/",
      images: [monday1, monday2, monday3, monday4],
      description: `A comprehensive task management solution allowing users to create, update, and delete tasks seamlessly. Features real-time notifications and updates for seamless team collaboration using WebSockets, with robust security features integrating user authentication with JWT.`,
      title: `Mondayboard.online`,
      tech: "Next.js / TypeScript / Node.js / MongoDB / Mongoose / WebSockets",
      github: "https://github.com/MrRohitTyagi",
    },
    {
      src: "https://workspaces-orcin.vercel.app/inbox",
      images: [workspaces1, workspaces2, workspaces3, workspaces4],
      description: `Collaboration platform inspired by Gmail's efficiency with intuitive email system, real-time chat and group system. Features seamless transition between emails and chats creating a unified workspace environment.`,
      title: `Workspaces`,
      tech: "JavaScript / HTML / CSS / Node.js / MongoDB / Mongoose / Material UI",
      github: "https://github.com/MrRohitTyagi",
    },
    {
      src: "https://www.traveloris.com/",
      images: [img1, img2, img3],
      description: `Traveloris simplifies trip planning with expertly curated attractions and personalized itineraries, helping users maximize their travel experiences.`,
      title: `Traveloris`,
      tech: "React.js / Node.js / MongoDB",
      github: "https://github.com/MrRohitTyagi",
    },
    {
      src: "https://thoughts2-cart-com.vercel.app/",
      images: [t2c1, t2c2, t2c3],
      description: `An e-commerce platform with user authentication, an admin portal for product management, secure payment integration via Stripe, and automated invoicing. Developed with React.js, Node.js, Express.js, and MongoDB.`,
      title: `Thoughts2Cart.com`,
      tech: "React.js / Node.js / Express.js / MongoDB / Stripe",
      github: "https://github.com/MrRohitTyagi",
    },
  ],

  // Personal Information
  personalInfo: {
    email: "tyagi4366@gmail.com",
    phone: "+91 9760147296",
    github: "https://github.com/MrRohitTyagi",
    linkedin: "https://www.linkedin.com/in/rt-rohit-tyagi/",
    portfolio: "https://personal-portfolio-lake-six.vercel.app/",
    githubRepositories: "https://github.com/MrRohitTyagi?tab=repositories",
  },

  // Awards and Achievements
  awards: [
    {
      title: "Star Performer",
      company: "Thoughts2Binary Private Limited",
      date: "09/03/2024",
      description: "Takes ownership of tasks, delivers high-quality results, ensures smooth performance, and solves complex problems with practical solutions."
    }
  ],

  // Education and Certifications
  education: {
    degree: "Bachelor of Computer Application",
    institution: "Invertis University",
    duration: "2018 – 2021",
    location: "Bareilly, India"
  },

  certifications: [
    {
      name: "Data structures and algorithms with Web development",
      provider: "Pepcoding Education Private Limited",
      year: "2022"
    }
  ],
};
