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
      "I graduated after 3 years of studying. I immediately My personal learning journey has begun. I started with HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind, MongoDB, and more.",
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
    descriptionList: "This project is a full-stack vehicle fleet management system built with Next.js 13, TypeScript, and React 18, deployed on an Ubuntu VPS server. The application uses MongoDB with Mongoose for data persistence and features a responsive UI designed with Tailwind CSS and Radix UI components. It provides comprehensive vehicle tracking capabilities including maintenance schedules, fuel consumption analytics, expense management, and travel logging. The system implements secure authentication via NextAuth.js with role-based access control. Data visualization is handled through Recharts, while TanStack Table powers advanced data operations like filtering, sorting, and pagination. The application supports data import/export functionality with Excel integration and includes document generation features. Docker containerization ensures consistent deployment and scalability across environments.",
    icon: React.createElement(FaReact),
    date: "Nov 2023 – Jan 2024",
  },
] as const;

export const projectsData = [
  {
    title: "WhatsApp Clone",
    description:
      "Implemented core messaging features including one-to-one and group chats, message status tracking, user authentication, and responsive design that closely resembles the original WhatsApp interface.",
    tags: ["React", "SCSS", "WebSocket", "Django", "Channels"],
    imageUrl: "/whatsappclone.jpeg",
  },
  {
    title: "Boraq App",
    description:
      "Developed a full-stack social media application, that enables users to create and interact with posts through likes, comments, and saves. Implemented secure authentication, responsive UI, and containerized the application for scalable deployment.",
    tags: ["React", "SCSS", "TypeScript", "Next.js", "NextAuth.js", "Mongodb", "Supabase", "Docker"],
    imageUrl: "/boraq.jpeg",
  },
] as const;

export const skillsData = [
  "Python",
  "Django",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "TailwindCSS",
  "Sass",
  "Figma",
  "MongoDB",
  "MySQL",
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
