type PortfolioItem = { 
    title: string;
    description: string;
    image: string;
    url: string;
    techStack: string[];
    
};
const portfolio: PortfolioItem[] = [
    {
        title: "Learny",
        description: "Learny is a web application built to showcase my skills in the MERN stack. It’s a platform where educators can create courses and learners can join to enhance their knowledge. The app features user authentication, a clean and responsive design, and course progress tracking. It was developed using React for the frontend and ExpressJS with MongoDB for the backend.",
        image: "/images/portfolio/learny.png",
        url: "https://learny.stefansabev.com",
        techStack: ["JavaScript", "React", "ExpressJS", "MongoDB"]
    },
    {
        title: "E-Commerce",
        description: "This project is an e-commerce web application that displays products, allows users to add items to the cart, and handles checkout functionalities securely. Sanity is used as a headless CMS to manage product content, while Express is set up as the backend to process and validate data for secure operations.",
        image: "/images/portfolio/ecommerce.png",
        url: "https://ecommerce.stefansabev.com",
        techStack: ["React", "Sanity", "Express", "MongoDB", "TailwindCSS"],
    },
    {
        title: "React",
        description: 
            "This was my project defense for a React course, where we implemented a full CRUD operations app. The project includes a catalog of clothes. Creators of new items can edit and delete their entries, while other users can only add comments if they are not the creator. This project highlights my understanding of React's component architecture, state management, and user roles.",
        image: "/images/portfolio/react.png",
        url: "https://react.stefansabev.com",
        techStack: ["React", "JavaScript", "CSS"],
    },
    {
        title: "Recipes",
        description: 
            "A multi-page app built entirely with Express and Express Handlebars. This application features user registration, login, and role-based functionalities. Logged-in users can create, like, and interact with recipes, while guests have no interaction privileges. This project demonstrates my expertise in server-side rendering, user authentication, and state management in Express.",
        image: "/images/portfolio/recipes.png",
        url: "https://recipes.stefansabev.com",
        techStack: ["Express", "Express Handlebars", "Node.js"],
    },
    {
        title: "Stefan Sabev Portfolio",
        description: "A portfolio website showcasing my projects and skills, built with React, TypeScript, and styled using Tailwind CSS. The site highlights my experience, technologies I work with, and the projects I've developed.",
        image: "/images/portfolio/portfolio.png",
        url: "https://stefansabev.com",
        techStack: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    }    
    ,
    {
        title: "Uploader",
        description: 
            "A React one-page app that allows users to upload files. The backend is built with Express to handle file storage and management. This project demonstrates integration between frontend and backend, as well as handling file uploads securely.",
        image: "/images/portfolio/uploader.png",
        url: "https://uploader.stefansabev.com",
        techStack: ["React", "Express", "Node.js"],
    },
    {
        title: "Courses Exam Prep",
        description: 
            "An exam preparation project for a SoftUni course on Express and Handlebars. This multi-page application includes functionality for user authentication (login/register), course creation, and course enrollment. It showcases dynamic rendering with Handlebars, secure user authentication, and CRUD operations in a real-world scenario.",
        image: "/images/portfolio/courses-examprep.png",
        url: "https://courses-examprep.stefansabev.com/",
        techStack: ["Express","Handlebars", "Node.js", "MongoDB"],
    },
    {
        title: "Teodora Sarandi",
        description: 
            "A website created for a florist and designer based in Zurich. Built with HTML and CSS, it provides a visually appealing and responsive platform to showcase the client's creative work and services. While simple in its technical foundation, the project focuses on clean design and user experience.",
        image: "/images/portfolio/teodorasarandi.png",
        url: "https://teodorasarandi.stefansabev.com/",
        techStack: ["HTML", "CSS","Tailwind CSS"],
    },
    {
        title: "Countries Game",
        description: "This is a sample game built with Node.js that uses the API Flags to generate country flags. The user can guess the country based on three different choices provided for each flag.",
        image: "/images/portfolio/countries-game.png",
        url: "https://countries-game.stefansabev.com",
        techStack: ["Node.js", "API Integration", "JavaScript", "HTML", "CSS"],
    },
    {
        title: "HTML & CSS Course Project",
        description: 
            "This project was part of my HTML and CSS course at SoftUni. I was given a photo of a fully designed webpage and had to replicate it exactly as shown within a two-hour timeframe. This exercise helped me hone my skills in responsive design, layout, and CSS styling, allowing me to focus on pixel-perfect implementation and attention to detail.",
        image: "/images/portfolio/htmlcss.png",
        url: "https://htmlcss.stefansabev.com/",
        techStack: ["HTML", "CSS"],
    }
];

export default portfolio;