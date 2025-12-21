import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://zylim03.github.io/portfolio", // update if you have a custom domain
    pdf: "/resume.pdf",
  },
  personal: {
    name: "Lim Zhi Ying",
    title: "Computer Science Student",
    headline: "Computer Science Student",
    avatar: "./profile_new.jpg",
    summary: "",
    contact: {
      email: "",
      phone: "",
      location: "",
      website: "",
      socials: [],
    },
  },
  highlights: [
    "Senior Engineer at Unisys (Jun 2025 – Present)",
    "3+ years focused on Python (FastAPI) and React",
    "Experienced with AWS, Azure, Terraform, and CI/CD pipelines",
  ],
  skills: [
    {
      title: "Skills",
      skills: [
        { name: "C++", icon: "SiCplusplus", level: 90 },
        { name: "Java", icon: "FaJava", level: 90 },
        { name: "Oracle", icon: "SiOracle", level: 85 },
        { name: "MySQL", icon: "SiMysql", level: 85 },
        { name: "PHP", icon: "SiPhp", level: 80 },
        { name: "API", icon: "SiPostman", level: 80 },
        { name: "Flutter", icon: "SiFlutter", level: 85 },
        { name: "Dart", icon: "SiDart", level: 85 },
        { name: "HTML", icon: "SiHtml5", level: 90 },
      ],
    },
  ],
  personalQualities: [
    "Willing to Learn & Adapt",
    "Good Time Management",
    "Positive Attitude",
    "Able to Work Independently",
    "Able to Work in Team",
    "Good Analytical & Logical Thinking",
  ],
  experience: [
    {
      id: "unisys-senior-2025",
      title: "Senior Engineer",
      company: "Unisys",
      location: "Bengaluru, India",
      date: { start: "2025-06", present: true },
      summary:
        "Leading full-stack efforts around Python-based backends and React frontends for enterprise customers. Driving architecture, mentoring teammates and implementing IaC and cloud deployment practices.",
      bullets: [
        "Lead development of microservices using FastAPI and Python for enterprise-scale workloads.",
        "Design and implement responsive React frontends and component libraries with TypeScript and Tailwind.",
        "Drive IaC adoption using Terraform and Bicep; implement CI/CD pipelines and deployment automation.",
        "Mentor engineers, conduct design reviews, and improve code quality and observability.",
      ],
      tech: [
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "Terraform",
        "AWS",
        "Azure",
      ],
    },
    {
      id: "unisys-se-2022",
      title: "Software Engineer",
      company: "Unisys",
      location: "Bengaluru, India",
      date: { start: "2022-01", end: "2025-05" },
      summary:
        "Worked on web and desktop applications, cloud deployment tooling, and multi-cloud automation for Unisys products.",
      bullets: [
        "Built desktop and web UI features using React, Electron.js, TypeScript and Node.js.",
        "Implemented cloud deployment workflows for Azure (ARM) and AWS (CloudFormation).",
        "Improved code quality and CI pipelines, addressing SonarQube findings and standardizing testing.",
        "Delivered features around redeployment, resource deletions and automation across cloud providers.",
      ],
      tech: ["React", "Electron", "TypeScript", "Node.js", "Azure", "AWS"],
    },
    {
      id: "unisys-rae-aircore",
      title: "Software Engineer (RAE, AirCore projects)",
      company: "Unisys",
      location: "Bengaluru, India",
      date: { start: "2018-03", end: "2021-12" },
      summary:
        "Worked on UI and backend components for airline/travel solutions and internal tooling.",
      bullets: [
        "Developed front-end UIs using Angular and React and integrated with Unisys Design System.",
        "Built REST APIs using Java (Vert.x) and integrated with NoSQL stores (MongoDB, Couchbase).",
        "Implemented role-based access with Keycloak and developed data visualization tools.",
        "Contributed to NDC stabilization, import/export features and product maintenance.",
      ],
      tech: [
        "Angular",
        "React",
        "Java (Vert.x)",
        "MongoDB",
        "Couchbase",
        "Keycloak",
      ],
    },
  ],
  projects: [
    {
      id: "bus-ticket-management",
      title: "Bus Ticket Management System",
      description: "A GUI-based ticket booking system that allows users to search for available buses, book seats, process payments, and generate PDF tickets. Data is retrieved from a backend API.",
      tags: ["Java Swing", "PHP API", "MySQL"],
      video: "video1.mp4",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/cy-0804/Bus-Ticket-Management-System",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "smart-parking-system",
      title: "Smart Parking System",
      description: "A parking management system designed to manage parking slots, generate tickets, calculate parking fees and have a point reward system. The system is integrated with a MySQL database and follows a clean MVC structure.",
      tags: ["Java", "MySQL"],
      video: "video2.mp4",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/WongJX823/OOP_SmartParkingSystem",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "pineappo-mobile-app",
      title: "PineAppo Mobile App",
      description:
        "A mobile app design for pineapple entrepreneurs to have a platform to communicate and share information. Marketplace module is developed for the entrepreneurs to upload their pineapple or items to be sold.",
      tags: ["Flutter", "Dart", "C++", "CMake", "MySQL"],
      video: "video3.mp4",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/jiayingloh/Sulam-PineAppo",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "hotel-reservation-system",
      title: "Hotel Reservation System",
      description: "A simple console-application style hotel system implemented in C++ that include basic hotel booking processes like search for available rooms, check-in and check-out, manage room. An addition of report generation module enable user to view in table and bar chart form.",
      video: "video4.mp4",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/ZYLIM03/ZY-Hotel-Reservation-System",
          icon: "SiGithub",
        },
      ],
      tags: ["C++", "MySQL"],
    },
    {
      id: "food-ordering-system",
      title: "Food Ordering System",
      description: "A console-application style restaurant system implemented in C++ that simulates key restaurant processes which includes selecting food and drinks from the menu and calculating total payment amount.",
      tags: ["C++"],
      video: "video5.mp4",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/IrynOoi/stellar-restaurant",
          icon: "SiGithub",
        },
      ],
    },

  ],
  education: [
    {
      date: "Oct 2023 - Present",
      degree: "Bachelor of Computer Science (Software Development)",
      school: "Universiti Teknikal Malaysia Melaka (UTeM)",
      score: "Current CGPA: 3.99",
    },
    {
      date: "2021 - 2023",
      degree: "STPM (Science Stream)",
      school: "SMJK Sam Tet, Perak",
      score: "STPM Results: 4.0",
      bullets: [
        "Math (T)",
        "Chemistry",
        "Biology",
      ],
    },
    {
      date: "2016 - 2020",
      degree: "SPM (Science Stream)",
      school: "SMJK Ave Maria Convent, Perak",
      score: "SPM Results: 10A",
      bullets: [
        "Additional Math",
        "Physics",
        "Chemistry",
        "Biology",
      ],
    },
  ],
  certifications: [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2022",
      url: "https://www.credly.com/badges/56ba404b-b2ec-49d7-b869-d41c8c88d7b5",
    },
    {
      name: "Terraform Associate",
      issuer: "HashiCorp",
      date: "2023",
    },
  ],
  extras: {
    languages: [{ name: "English", level: "Native" }],
    interests: ["astronomy", "music"],
  },
};



// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",
  CSS: "bg-teal-100 text-teal-800",
  CSS3: "bg-teal-100 text-teal-800",
  Tailwind: "bg-teal-100 text-teal-800",
  Stripe: "bg-purple-100 text-purple-800",
  "Design System": "bg-yellow-100 text-yellow-800",
  D3: "bg-amber-100 text-amber-800",
  Realtime: "bg-green-100 text-green-800",
  Storybook: "bg-pink-100 text-pink-800",
  "NPM Package": "bg-red-100 text-red-800",
  "Material-UI": "bg-indigo-100 text-indigo-800",
  "Chatbot": "bg-violet-100 text-violet-800",
  OpenAI: "bg-gray-100 text-gray-800",
  "Hugging Face": "bg-orange-100 text-orange-800",
  Beginner: "bg-cyan-100 text-cyan-800",
  "Beginner Project": "bg-cyan-100 text-cyan-800",
  // Landing Zone Orchestrator tags
  FastAPI: "bg-teal-500 text-white",
  MongoDB: "bg-green-600 text-white",
  Terraform: "bg-purple-600 text-white",
  IaC: "bg-indigo-500 text-white",
  AWS: "bg-orange-500 text-white",
  Azure: "bg-blue-600 text-white",
  "Full Stack": "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
  "Java Swing": "bg-orange-100 text-orange-800",
  "PHP API": "bg-violet-100 text-violet-800",
  "MySQL": "bg-blue-100 text-blue-800",
  "Java": "bg-red-100 text-red-800",
  "Flutter": "bg-cyan-100 text-cyan-800",
  "Dart": "bg-blue-100 text-blue-800",
  "C++": "bg-indigo-100 text-indigo-800",
  "CMake": "bg-gray-100 text-gray-800",
};