import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "FS Tetouan, Morocco",
    descriptionList:
      "I graduated after 3 years of studying. I immediately My personal learning journey has begun. I started with HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind, Prisma, MongoDB, and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer | NVIT Solutions",
    location: "Remote",
    descriptionList: [
      "Built Next.js/MySQL backend handling 100+ daily transactions with 99.9% uptime.",
      "Created responsive UI with React.js/Sass improving UX satisfaction scores by 25%.",
      "Integrated OpenLayers mapping and OpenRouteService API reducing geodata costs by 35%.",
      "Designed UML diagrams and Figma prototypes reducing client revision cycles by 40%.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 – Jul 2023",
  },
  {
    title: "Full-Stack Developer | Colainord",
    location: "Tetouan, Morocco",
    descriptionList: [
      "Implemented RBAC authentication system securing 5K+ user accounts with zero breaches.",
      "Developed React/TailwindCSS frontend reducing load times by 30% through code optimization.",
      "Managed data workflows using TanStack/React-Table improving processing speed by 40%.",
      "Containerized deployment using Docker on Ubuntu VPS cutting setup time by 50%.",
    ],
    icon: React.createElement(FaReact),
    date: "Nov 2023 – Jan 2024",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "/corpcomment.png",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "/rmtdev.png",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "/wordanalytics.png",
  },
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Sass",
  "Django",
  "React.js",
  "Next.js",
  "TailwindCSS",
  "Figma",
  "Framer Motion",
  "Prisma",
  "MongoDB",
  "MySQL",
  "MongooseORM",
  "Docker",
  "Ubuntu",
  "Git",
  "Vercel",
  "VPS Deployment",
  "RESTful APIs",
  "OOP",
  "Algorithms",
  "Data Structures",
] as const;
