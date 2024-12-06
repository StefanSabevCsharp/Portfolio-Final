type PortfolioItem = { 
    title: { en: string; fr: string };
    description: { en: string; fr: string };
    image: string;
    url: string;
    techStack: string[];  
};

const portfolio: PortfolioItem[] = [
    {
        title: { 
            en: "Learny", 
            fr: "Learny" 
        },
        description: { 
            en: "Learny is a web application built to showcase my skills in the MERN stack. It’s a platform where educators can create courses and learners can join to enhance their knowledge. The app features user authentication, a clean and responsive design, and course progress tracking. It was developed using React for the frontend and ExpressJS with MongoDB for the backend.",
            fr: "Learny est une application web conçue pour mettre en valeur mes compétences dans le stack MERN. C’est une plateforme où les éducateurs peuvent créer des cours et les apprenants peuvent s'inscrire pour améliorer leurs connaissances. L'application propose une authentification des utilisateurs, un design épuré et réactif, ainsi qu'un suivi des progrès des cours. Elle a été développée avec React pour le frontend et ExpressJS avec MongoDB pour le backend."
        },
        image: "/images/portfolio/learny.png",
        url: "https://learny.stefansabev.com",
        techStack: ["JavaScript", "React", "ExpressJS", "MongoDB"]
    },
    {
        title: { 
            en: "E-Commerce", 
            fr: "E-Commerce" 
        },
        description: { 
            en: "This project is an e-commerce web application that displays products, allows users to add items to the cart, and handles checkout functionalities securely. Sanity is used as a headless CMS to manage product content, while Express is set up as the backend to process and validate data for secure operations.",
            fr: "Ce projet est une application web de commerce électronique qui affiche des produits, permet aux utilisateurs d'ajouter des articles au panier et gère les fonctionnalités de paiement de manière sécurisée. Sanity est utilisé comme un CMS sans tête pour gérer le contenu des produits, tandis qu'Express est configuré comme backend pour traiter et valider les données pour des opérations sécurisées."
        },
        image: "/images/portfolio/ecommerce.png",
        url: "https://ecommerce.stefansabev.com",
        techStack: ["React", "Sanity", "Express", "MongoDB", "TailwindCSS"],
    },
    {
        title: { 
            en: "React", 
            fr: "React" 
        },
        description: { 
            en: "This was my project defense for a React course, where we implemented a full CRUD operations app. The project includes a catalog of clothes. Creators of new items can edit and delete their entries, while other users can only add comments if they are not the creator. This project highlights my understanding of React's component architecture, state management, and user roles.",
            fr: "C'était ma soutenance de projet pour un cours de React, où nous avons mis en place une application de gestion complète des opérations CRUD. Le projet inclut un catalogue de vêtements. Les créateurs de nouveaux articles peuvent modifier et supprimer leurs entrées, tandis que les autres utilisateurs peuvent seulement ajouter des commentaires s'ils ne sont pas les créateurs. Ce projet met en valeur ma compréhension de l'architecture des composants de React, de la gestion de l'état et des rôles des utilisateurs."
        },
        image: "/images/portfolio/react.png",
        url: "https://react.stefansabev.com",
        techStack: ["React", "JavaScript", "CSS"],
    },
    {
        title: { 
            en: "Recipes", 
            fr: "Recettes" 
        },
        description: { 
            en: "A multi-page app built entirely with Express and Express Handlebars. This application features user registration, login, and role-based functionalities. Logged-in users can create, like, and interact with recipes, while guests have no interaction privileges. This project demonstrates my expertise in server-side rendering, user authentication, and state management in Express.",
            fr: "Une application multi-pages construite entièrement avec Express et Express Handlebars. Cette application propose des fonctionnalités d'inscription des utilisateurs, de connexion et de gestion des rôles. Les utilisateurs connectés peuvent créer, aimer et interagir avec des recettes, tandis que les invités n'ont aucun droit d'interaction. Ce projet démontre mon expertise en rendu côté serveur, en authentification des utilisateurs et en gestion de l'état avec Express."
        },
        image: "/images/portfolio/recipes.png",
        url: "https://recipes.stefansabev.com",
        techStack: ["Express", "Express Handlebars", "Node.js"],
    },
    {
        title: { 
            en: "Stefan Sabev Portfolio", 
            fr: "Portfolio Stefan Sabev" 
        },
        description: { 
            en: "A portfolio website showcasing my projects and skills, built with React, TypeScript, and styled using Tailwind CSS. The site highlights my experience, technologies I work with, and the projects I've developed.",
            fr: "Un site portfolio présentant mes projets et compétences, construit avec React, TypeScript et stylisé avec Tailwind CSS. Le site met en avant mon expérience, les technologies avec lesquelles je travaille et les projets que j'ai développés."
        },
        image: "/images/portfolio/portfolio.png",
        url: "https://stefansabev.com",
        techStack: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    },
    {
        title: { 
            en: "Uploader", 
            fr: "Téléchargeur" 
        },
        description: { 
            en: "A React one-page app that allows users to upload files. The backend is built with Express to handle file storage and management. This project demonstrates integration between frontend and backend, as well as handling file uploads securely.",
            fr: "Une application React en une page permettant aux utilisateurs de télécharger des fichiers. Le backend est construit avec Express pour gérer le stockage et la gestion des fichiers. Ce projet démontre l'intégration entre le frontend et le backend, ainsi que la gestion sécurisée des téléchargements de fichiers."
        },
        image: "/images/portfolio/uploader.png",
        url: "https://uploader.stefansabev.com",
        techStack: ["React", "Express", "Node.js"],
    },
    {
        title: { 
            en: "Courses Exam Prep", 
            fr: "Préparation aux examens des cours" 
        },
        description: { 
            en: "An exam preparation project for a SoftUni course on Express and Handlebars. This multi-page application includes functionality for user authentication (login/register), course creation, and course enrollment. It showcases dynamic rendering with Handlebars, secure user authentication, and CRUD operations in a real-world scenario.",
            fr: "Un projet de préparation aux examens pour un cours SoftUni sur Express et Handlebars. Cette application multi-pages inclut des fonctionnalités d'authentification des utilisateurs (connexion/inscription), de création de cours et d'inscription aux cours. Elle met en avant le rendu dynamique avec Handlebars, l'authentification sécurisée des utilisateurs et les opérations CRUD dans un scénario réel."
        },
        image: "/images/portfolio/courses-examprep.png",
        url: "https://courses-examprep.stefansabev.com/",
        techStack: ["Express", "Handlebars", "Node.js", "MongoDB"],
    },
    {
        title: { 
            en: "Teodora Sarandi", 
            fr: "Teodora Sarandi" 
        },
        description: { 
            en: "A website created for a florist and designer based in Zurich. Built with HTML and CSS, it provides a visually appealing and responsive platform to showcase the client's creative work and services. While simple in its technical foundation, the project focuses on clean design and user experience.",
            fr: "Un site web créé pour une fleuriste et designer basée à Zurich. Construit avec HTML et CSS, il offre une plateforme visuellement attrayante et réactive pour mettre en avant les créations et services de la cliente. Bien que simple dans ses bases techniques, le projet se concentre sur un design épuré et une expérience utilisateur soignée."
        },
        image: "/images/portfolio/teodorasarandi.png",
        url: "https://teodorasarandi.stefansabev.com/",
        techStack: ["HTML", "CSS", "Tailwind CSS"],
    },
    {
        title: { 
            en: "Countries Game", 
            fr: "Jeu des pays" 
        },
        description: { 
            en: "This is a sample game built with Node.js that uses the API Flags to generate country flags. The user can guess the country based on three different choices provided for each flag.",
            fr: "Il s'agit d'un jeu exemple construit avec Node.js qui utilise l'API Flags pour générer des drapeaux de pays. L'utilisateur doit deviner le pays en fonction des trois choix proposés pour chaque drapeau."
        },
        image: "/images/portfolio/countries-game.png",
        url: "https://countries-game.stefansabev.com",
        techStack: ["Node.js", "API Integration", "JavaScript", "HTML", "CSS"],
    },
    {
        title: { 
            en: "HTML & CSS Course Project", 
            fr: "Projet de cours HTML & CSS" 
        },
        description: { 
            en: "A simple course project designed using just HTML and CSS. The objective was to create a static web page with a responsive design, ensuring compatibility across various screen sizes.",
            fr: "Un projet simple de cours conçu uniquement avec HTML et CSS. L'objectif était de créer une page web statique avec un design réactif, garantissant la compatibilité avec différentes tailles d'écran."
        },
        image: "/images/portfolio/htmlcss.png",
        url: "https://html-css-course.stefansabev.com",
        techStack: ["HTML", "CSS"],
    }
];

export default portfolio;