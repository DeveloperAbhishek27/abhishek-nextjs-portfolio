const services = [
  {
    title: "Frontend Developer",
    icon: "/about/frontend.png",
    hover:
      "I build responsive and interactive user interfaces using modern frontend technologies and best design practices.",
  },
  {
    title: "React Js Developer",
    icon: "/about/react.png",
    hover:
      "React.js is a JavaScript library used to build dynamic, interactive user interfaces with reusable components.",
  },
  {
    title: "Next.js Developer",
    icon: "/about/nextjs.png",
    hover:
      "I build scalable and high-performance web applications using Next.js with features like server-side rendering, routing, and optimization.",
  },
  {
    title: "UI/UX Designer",
    icon: "/about/UiUx.png",
    hover:
      "I focus on crafting intuitive and visually appealing user experiences, transforming ideas into clean, functional, and user-friendly designs.",
  },
];

const experiences = [
  {
    title: "Frontend Developer – EC Sale Pvt. Ltd.",
    icon: "/experience/ecsales.webp",
    iconBg: "#000000",
    date: "May 2025 - Jan 2026",
    points: [
      "Developed and maintained company website using React.js and Tailwind CSS.",
      "Integrated REST APIs and improved performance optimization.",
      "Implemented SEO using React Helmet.",
      "Collaborated with cross-functional teams to deliver scalable solutions.",
    ],
  },
  {
    title: "React.js",
    icon: "/experience/react.png",
    iconBg: "#383E56",
    date: "Dec 2025 - Present",
    points: [
      "Building scalable and reusable UI components using React.js with modern Hooks (useState, useEffect, Context API).",
      "Implementing client-side routing using React Router for seamless navigation.",
      "Managing application state efficiently and optimizing rendering performance.",
      "Integrating REST APIs for dynamic data handling and real-time content updates.",
      "Following React best practices to ensure maintainability and clean architecture.",
    ],
  },
  {
    title: "Next.js",
    icon: "/experience/nextjs.png",
    iconBg: "#000000",
    date: "March 2025 - Present",
    points: [
      "Developing server-side rendered (SSR) and static site generated (SSG) applications using Next.js.",
      "Implementing SEO optimization and performance improvements using built-in Next.js features.",
      "Using App Router and dynamic routing for scalable application structure.",
      "Optimizing images, fonts, and assets for better Core Web Vitals performance.",
      "Deploying and managing production-ready applications.",
    ],
  },
  {
    title: "JavaScript (ES6+)",
    icon: "/experience/javascript.png",
    iconBg: "#E6DEDD",
    date: "Sep 2025 - Present",
    points: [
      "Writing clean and modular JavaScript code using ES6+ features.",
      "Working with async/await, promises, and API integration for dynamic applications.",
      "Implementing DOM manipulation and event handling for interactive interfaces.",
      "Applying object-oriented and functional programming principles.",
      "Ensuring optimized and maintainable code structure.",
    ],
  },
  {
    title: "Tailwind CSS",
    icon: "/experience/tailwind.png",
    iconBg: "#38BDF8",
    date: "2025 - Present",
    points: [
      "Building responsive and mobile-first UI designs using Tailwind CSS utility-first framework.",
      "Creating modern, consistent design systems with reusable styling patterns.",
      "Ensuring cross-browser compatibility and performance optimization.",
      "Customizing themes and extending Tailwind configuration for scalable projects.",
      "Integrating animations and UI enhancements with modern frontend tools.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I have completed a Full Stack Web Development certification from Ducat IT Development School, gaining expertise in React.js, HTML, CSS, JavaScript, and Node.js. This program enhanced my skills in building dynamic, responsive, and scalable web applications.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Ducat India Website",
    description:
      "A modern and fully responsive educational website for Ducat India, built using React, Tailwind CSS, and Framer Motion. It provides details about  courses, placements, and online registration.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: "./ducat.png",
    source_code_link: "https://github.com/abhishek-pandey/ducat-website",
  },

  {
    name: "Todo List",
    description:
      "A simple and efficient Todo List web application built with React and Bootstrap. It allows users to add, edit, and delete tasks, helping them stay organized. The responsive design experience across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "json",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: "./todo list.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio website",
    description:
      "A responsive portfolio built with HTML, CSS, and JavaScript, showcasing my skills, projects, and experience with an interactive design.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Java-script",
        color: "pink-text-gradient",
      },
    ],
    image: "./portfolio.png",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
