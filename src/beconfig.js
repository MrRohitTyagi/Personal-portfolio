import rocket from "assets/svg/rocket.svg";
import devices from "assets/svg/devices.svg";
import bulb from "assets/svg/bulb.svg";
import speed from "assets/svg/speed.svg";
import profile from "assets/my.png";

import nodejs from "assets/svg/nodejs.svg";
import materialUI from "assets/svg/icons8-material-ui-800.svg";
import css from "assets/svg/css.svg";
import html from "assets/svg/html.svg";
import javascript from "assets/svg/javascript.svg";
import typescript from "assets/svg/typescript.svg";
import mongo from "assets/svg/mongo.svg";
import python from "assets/svg/python.svg";
import react from "assets/svg/react.svg";
import nextjs from "assets/svg/nextjs-icon-svgrepo-com.svg";
import redux from "assets/svg/redux.svg";
import express from "assets/svg/express-js.svg";
import framer from "assets/svg/framer.svg";
import tailwind from "assets/svg/tailwind.svg";
import jwt from "assets/svg/jwt.svg";
import ec2 from "assets/svg/ec2.svg";
import s3 from "assets/svg/s3.svg";
import dynamoDB from "assets/svg/dynamoDb.svg";
import d3 from "assets/svg/d3.svg";
import storybook from "assets/svg/storybook.svg";
import tanstack from "assets/svg/tanstack.svg";
import reactflow from "assets/svg/reactflow.svg";
import redis from "assets/svg/redis.svg";
import socket from "assets/svg/socket.svg";

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
    tagLine: "Full-Stack Developer specializing in scalable systems",
    name: "Rohit Tyagi",
    summery: `I am a software engineer with ${yearsDifference} years and ${
      monthsDifference > 0 ? `${monthsDifference} months` : ""
    } of professional experience. I specialize in building scalable frontend and backend systems, with expertise in React, Next.js, TypeScript, Node.js, and AWS. I have a proven track record of delivering high-performance solutions, mentoring team members, and driving technical excellence across products.`,
    profile: profile,
    email: "tyagi4366@gmail.com",
    phone: "+91 9760147296",
    location: "Bareilly, Uttar Pradesh, India",
    age: 26,
    dateOfBirth: "11-10-1999",
    currentPosition: "Software Engineer",
    workMode: "Onsite",
    noticePeriod: "Immediate",
    hobbies: ["Playing Snooker", "Coding", "Problem Solving", "Reading"],
  },
  featureBox: [
    {
      image: speed,
      heading: "Performance",
      description:
        "Architecting high-performance applications through strategic optimization, benchmarking, and runtime profiling to achieve sub-2s TTI on complex enterprise dashboards.",
    },
    {
      image: devices,
      heading: "Adaptability",
      description:
        "Building responsive systems that scale seamlessly across devices using modern CSS patterns while maintaining WCAG 2.1 AA accessibility standards.",
    },
    {
      image: bulb,
      heading: "Craftsmanship",
      description:
        "Creating intuitive user experiences through data-driven design, reusable component libraries, and accessibility-first development reducing implementation friction by 40%+.",
    },
    {
      image: rocket,
      heading: "Innovation",
      description:
        "Driving technical innovation by evaluating emerging technologies, architecting scalable solutions, and leading proof-of-concepts that bridge business needs with technical feasibility.",
    },
  ],

  skillsSection: [
    {
      heading: "Frontend",
      skills: [
        { name: "React", image: react },
        { name: "Next.js", image: nextjs },
        { name: "TypeScript", image: typescript },
        { name: "JavaScript", image: javascript },
        { name: "Framer Motion", image: framer },
        { name: "Material-UI", image: materialUI },
        { name: "CSS", image: css },
        { name: "HTML", image: html },
        { name: "Redux", image: redux },
        { name: "Tailwind CSS", image: tailwind },
        { name: "D3", image: d3 },
        { name: "Storybook", image: storybook }, // Using react image as placeholder
        { name: "TanStack Table", image: tanstack }, // Using javascript image as placeholder
        { name: "ReactFlow", image: reactflow }, // Using react image as placeholder
      ],
    },
    {
      heading: "Backend",
      skills: [
        { name: "Node.js", image: nodejs },
        { name: "Express.js", image: express },
        { name: "MongoDB", image: mongo },
        { name: "Mongoose", image: mongo },
        { name: "Redis", image: redis }, // Using nodejs image as placeholder
        { name: "Socket.io", image: socket },
        { name: "WebSockets", image: nodejs }, // Using nodejs image as placeholder
        { name: "JWT", image: jwt },
      ],
    },
    {
      heading: "Testing",
      skills: [
        { name: "Playwright", image: javascript }, // Using javascript image as placeholder
        { name: "Jest", image: javascript },
        { name: "React Testing Library", image: react }, // Using react image as placeholder
        { name: "Visual Regression Testing", image: javascript }, // Using javascript image as placeholder
        { name: "Accessibility Testing", image: javascript }, // Using javascript image as placeholder
      ],
    },
    {
      heading: "DevOps",
      skills: [
        { name: "AWS", image: ec2 }, // Using ec2 image as placeholder for AWS
        { name: "EC2", image: ec2 },
        { name: "S3", image: s3 },
        { name: "DynamoDB", image: dynamoDB },
        { name: "Docker", image: ec2 }, // Using ec2 image as placeholder for Docker
        { name: "CI/CD", image: ec2 }, // Using ec2 image as placeholder for CI/CD
        { name: "GitHub Actions", image: javascript }, // Using javascript image as placeholder
      ],
    },
    {
      heading: "Other",
      skills: [
        { name: "Performance Optimization", image: speed }, // Using speed image for Performance Optimization
        { name: "AI-Assisted Development", image: bulb }, // Using bulb image for AI-Assisted Development
        { name: "Agentic Tooling", image: javascript }, // Using javascript image as placeholder for Agentic Tooling
        { name: "Python", image: python },
      ],
    },
  ],

  experienceSection: [
    {
      date: "Mar 2025 – May 2026",
      position: "Software Engineer",
      companyName: "Brevo",
      role: [
        "Built a scalable <strong> DataTable </strong> using <strong> TanStack Table + virtualization</strong>  for high-performance rendering of large datasets.",
        "Developed Brevo's organization-wide charting library with <strong>D3.js</strong> and TypeScript; adopted by <strong>12+ </strong>teams.",
        "Built <strong>AI Chat UI</strong> end-to-end, accelerating customer workflows and reducing reliance on traditional interfaces.",
        "Architected <strong>Playwright-based E2E testing</strong> (accessibility, visual regression, <strong>CI integration</strong>).",
        "Created an autonomous documentation agent that updates component docs and raises PRs automatically after merges.",
      ],
    },
    {
      date: "Oct 2022 – Feb 2025",
      position: "Software Engineer",
      companyName: "Thoughts2Binary Pvt. Ltd.",
      role: [
        "Contributed to GraniteStack SaaS platform, helping reduce business costs by 25%.",
        "Built a schema-driven form engine using Formik and Yup, reducing development effort by 40%.",
        "Improved application performance by 25% using React hooks, Redux, RxJS, and memoization.",
        "Assisted in business scoping and research, helping acquire 3 clients.",
        "Developed pixel-perfect React-based UIs from design mockups.",
        "Mentored 2 junior developers and improved engineering practices.",
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
      description:
        "Takes ownership of tasks, delivers high-quality results, ensures smooth performance, and solves complex problems with practical solutions.",
    },
  ],

  // Education and Certifications
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Invertis University",
    duration: "2018 – 2021",
    location: "Bareilly, Uttar Pradesh, India",
  },

  certifications: [
    {
      name: "Data Structures & Algorithms with Web Development",
      provider: "Pepcoding Education Pvt. Ltd.",
      year: "2022",
    },
  ],
};
