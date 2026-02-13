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
  // {
  //   title: "Frontend Developer – EC Sale Pvt. Ltd.",
  //   icon: "/experience/ecsales.webp",
  //   iconBg: "#000000",
  //   date: "May 2025 - Jan 2026",
  //   points: [
  //     "Developed and maintained company website using React.js and Tailwind CSS.",
  //     "Integrated REST APIs and improved performance optimization.",
  //     "Implemented SEO using React Helmet.",
  //     "Collaborated with cross-functional teams to deliver scalable solutions.",
  //   ],
  // },
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
      "I worked as a Frontend Web Developer Intern at EC Sales Private Limited from May 2025 to January 2026. During this period, I contributed to real-world production projects, building responsive and user-friendly interfaces using React.js, JavaScript, HTML, and CSS. I collaborated with designers and backend developers and was awarded an official Internship Experience Letter recognizing my performance and contributions.",
    name: "Abhishek Pandey",
    designation: "Frontend Web Developer (Intern)",
    company: "EC Sales Private Limited",
    image: "/img/ecsales.png",
  },
  {
    testimonial:
      "I completed a Frontend Web Development training program at Ducat IT Training School, where I gained strong practical knowledge of React.js, JavaScript, HTML, CSS, and modern UI development practices. During the program, I worked on multiple hands-on projects that helped me build a solid foundation in frontend development. I was awarded a training completion certificate in PDF format.",
    name: "Abhishek Pandey",
    designation: "Frontend Development Trainee",
    company: "Ducat IT Training School",
    image: "/img/ducat copy.png",
  },
];

const projects = [
  {
    name: "EC Sale Pvt. Ltd. – Official Website",
    description:
      "Designed and developed the official corporate website of EC Sale Pvt. Ltd. using React.js and Tailwind CSS. Implemented SEO optimization with React Helmet, smooth UI animations using Framer Motion, and ensured full responsiveness across devices with optimized performance.",
    tags: [
      { name: "React.js", color: "text-cyan-400" },
      { name: "Tailwind CSS", color: "text-emerald-400" },
      { name: "Framer Motion", color: "text-fuchsia-400" },
      { name: "React Helmet", color: "text-amber-400" },
    ],
    image: "/img/EcSales.png",
    github_link: null,
    live_link: "https://www.ecsale.com.au/",
  },

  {
    name: "Authentication & Dashboard System",
    description:
      "Built a complete authentication flow with JWT token handling, protected routes, and a responsive dashboard. Integrated simulated APIs, managed global state using Context API, and implemented smooth transitions with Framer Motion.",
    tags: [
      { name: "React.js", color: "text-cyan-400" },
      { name: "JWT Auth", color: "text-lime-400" },
      { name: "Context API", color: "text-violet-400" },
      { name: "Tailwind CSS", color: "text-emerald-400" },
    ],
    image: "/img/user-management-system.png",
    github_link:
      "https://github.com/DeveloperAbhishek27/authentication-dashboard-react",
    live_link: "https://auth-dashboard-create-by-abhishek.netlify.app/",
  },

  {
    name: "React CRUD Application",
    description:
      "Developed a full-featured CRUD application with dynamic API integration. Implemented real-time data rendering, optimized UI performance, and ensured seamless user interaction across devices.",
    tags: [
      { name: "React.js", color: "text-cyan-400" },
      { name: "REST API", color: "text-sky-400" },
      { name: "Tailwind CSS", color: "text-emerald-400" },
      { name: "CRUD", color: "text-orange-400" },
    ],
    image: "/img/todo list.png",
    github_link: "https://github.com/DeveloperAbhishek27/react-crud-app",
    live_link: "https://my-crud-app-27.netlify.app/",
  },

  {
    name: "Ducat India Clone Website",
    description:
      "Built a responsive clone of the Ducat India website using React.js, React Router, and Tailwind CSS. Implemented smooth animations with Framer Motion and optimized routing with React Hooks for efficient state management.",
    tags: [
      { name: "React.js", color: "text-cyan-400" },
      { name: "React Router", color: "text-indigo-400" },
      { name: "Framer Motion", color: "text-fuchsia-400" },
      { name: "Tailwind CSS", color: "text-emerald-400" },
    ],
    image: "/img/ducat.png",
    github_link: null,
    live_link: "https://ducat-site-by-abhishek.netlify.app/",
  },
  {
    name: "Personal Portfolio Website",
    description:
      "Designed and developed my personal portfolio website using pure HTML, CSS, and JavaScript. Focused on responsive layout, smooth scrolling, interactive UI elements, and clean modern design to showcase projects and skills effectively.",
    tags: [
      { name: "HTML5", color: "text-orange-400" },
      { name: "CSS3", color: "text-sky-400" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "Responsive Design", color: "text-emerald-400" },
    ],
    image: "/img/portfolio.png", // apni image yaha daal dena
    github_link: "https://github.com/DeveloperAbhishek27/portfolio",
    live_link: null,
  },
];

export { services, technologies, experiences, testimonials, projects };
