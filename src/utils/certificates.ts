type Certificate = {
    name: {
        en: string;
        fr: string;
    };
    grade: string;
    date: string;
    description: {
        en: string;
        fr: string;
    };
    image: string;
    language: string;
    credentialsUrl: string;
};

const certificates: Certificate[] = [
    {
        name: {
            en: "JS Web Developer",
            fr: "Développeur Web JS"
        },
        grade: "6.00/6.00",
        date: "15.09.2024",
        description: {
            en: "This certificate demonstrates comprehensive expertise in JavaScript development, including advanced concepts like asynchronous programming, DOM manipulation, and modular coding. It also includes mastery of ES6+ features, debugging techniques, and the ability to build scalable web applications.",
            fr: "Ce certificat démontre une expertise complète en développement JavaScript, y compris des concepts avancés tels que la programmation asynchrone, la manipulation du DOM et la programmation modulaire. Il comprend également la maîtrise des fonctionnalités ES6+, des techniques de débogage et la capacité à créer des applications web évolutives."
        },
        image: "/images/certificates/js-web-developer.png",
        language: "JavaScript",
        credentialsUrl: "https://softuni.bg/certificates/details/225831/4d8e57a8"
    },
    {
        name: {
            en: "React Developer",
            fr: "Développeur React"
        },
        grade: "6.00/6.00",
        date: "20.06.2024",
        description: {
            en: "This certificate validates advanced proficiency in building modern web applications using React. It includes expertise in creating dynamic user interfaces, managing state with hooks and context, implementing component-driven architecture, and optimizing performance for scalable applications. It also covers integration with RESTful APIs and advanced React ecosystem tools like React Router and Redux.",
            fr: "Ce certificat valide la compétence avancée dans la création d'applications web modernes utilisant React. Il comprend une expertise dans la création d'interfaces utilisateur dynamiques, la gestion de l'état avec des hooks et un contexte, la mise en œuvre d'une architecture centrée sur les composants et l'optimisation des performances pour des applications évolutives. Il couvre également l'intégration avec des API RESTful et des outils avancés de l'écosystème React tels que React Router et Redux."
        },
        image: "/images/certificates/react.png",
        language: "React",
        credentialsUrl: "https://softuni.bg/Certificates/Details/223102/bc501be8"
    },
    {
        name: {
            en: "JS Back-End",
            fr: "JS Back-End"
        },
        grade: "6.00/6.00",
        date: "28.06.2024",
        description: {
            en: "This certificate demonstrates advanced proficiency in back-end development with JavaScript. It includes expertise in building RESTful APIs, working with databases, authenticating users, and securing web applications. It also covers advanced concepts like sessions and cookies, file upload, and error handling. We also cover Express.js, MongoDB, and Mongoose.",
            fr: "Ce certificat démontre une compétence avancée en développement back-end avec JavaScript. Il inclut une expertise dans la création d'APIs RESTful, la gestion des bases de données, l'authentification des utilisateurs et la sécurisation des applications web. Il couvre également des concepts avancés comme les sessions et les cookies, le téléchargement de fichiers et la gestion des erreurs. Nous couvrons également Express.js, MongoDB et Mongoose."
        },
        image: "/images/certificates/jsbackend.png",
        language: "JavaScript",
        credentialsUrl: "https://softuni.bg/Certificates/Details/218302/c1fe5a58"
    },
    {
        name: {
            en: "TypeScript",
            fr: "TypeScript"
        },
        grade: "6.00/6.00",
        date: "07.05.2024",
        description: {
            en: "This certificate validates advanced proficiency in TypeScript, covering essential and advanced topics such as data types, interfaces, object-oriented programming principles, generics, namespaces, modules, and decorators. It demonstrates the ability to build scalable and type-safe applications using TypeScript.",
            fr: "Ce certificat valide la compétence avancée en TypeScript, couvrant des sujets essentiels et avancés tels que les types de données, les interfaces, les principes de programmation orientée objet, les génériques, les espaces de noms, les modules et les décorateurs. Il démontre la capacité à créer des applications évolutives et sûres avec TypeScript."
        },
        image: "/images/certificates/typescript.png",
        language: "TypeScript",
        credentialsUrl: "https://softuni.bg/Certificates/Details/215506/de716be8"
    },
    {
        name: {
            en: "JS Applications",
            fr: "Applications JS"
        },
        grade: "6.00/6.00",
        date: "01.04.2024",
        description: {
            en: "This certificate validates proficiency in building modern JavaScript applications. The course covered HTTP and REST services, asynchronous programming, remote data handling, user authentication, single-page applications, client-side rendering, routing, modular applications, and software architecture with testing. It demonstrates the ability to create scalable, efficient, and modular web applications.",
            fr: "Ce certificat valide la compétence dans la création d'applications JavaScript modernes. Le cours a couvert les services HTTP et REST, la programmation asynchrone, la gestion des données à distance, l'authentification des utilisateurs, les applications monopages, le rendu côté client, le routage, les applications modulaires et l'architecture logicielle avec tests. Il démontre la capacité à créer des applications web évolutives, efficaces et modulaires."
        },
        image: "/images/certificates/applications.png",
        language: "JavaScript",
        credentialsUrl: "https://softuni.bg/Certificates/Details/209572/aed6d831"
    },
    {
        name: {
            en: "JS Advanced",
            fr: "JS Avancé"
        },
        grade: "6.00/6.00",
        date: "19.02.2024",
        description: {
            en: "This certificate demonstrates mastery of advanced JavaScript concepts. Topics covered include syntax, functions, statements, arrays, nested arrays, objects, and composition. It also includes DOM introduction, manipulation, and events, advanced functions, unit testing, error handling, classes, prototypes, and inheritance. This course emphasizes writing efficient, modular, and maintainable JavaScript code.",
            fr: "Ce certificat démontre la maîtrise des concepts avancés de JavaScript. Les sujets couverts incluent la syntaxe, les fonctions, les déclarations, les tableaux, les tableaux imbriqués, les objets et la composition. Il comprend également une introduction au DOM, la manipulation et les événements, les fonctions avancées, les tests unitaires, la gestion des erreurs, les classes, les prototypes et l'héritage. Ce cours met l'accent sur l'écriture d'un code JavaScript efficace, modulaire et maintenable."
        },
        image: "/images/certificates/advanced.png",
        language: "JavaScript",
        credentialsUrl: "https://softuni.bg/Certificates/Details/203353/2a8a5e9d"
    },
    {
        name: {
            en: "JS Front-End",
            fr: "JS Front-End"
        },
        grade: "6.00/6.00",
        date: "18.12.2023",
        description: {
            en: "This certificate validates advanced skills in front-end development using JavaScript. Topics include JS syntax fundamentals, arrays, strings, functions, and objects. It also covers DOM introduction, manipulation, and events, as well as HTTP, REST, and asynchronous programming. This course emphasizes creating dynamic and interactive user interfaces.",
            fr: "Ce certificat valide les compétences avancées en développement front-end utilisant JavaScript. Les sujets incluent les bases de la syntaxe JS, les tableaux, les chaînes, les fonctions et les objets. Il couvre également l'introduction au DOM, la manipulation et les événements, ainsi que HTTP, REST et la programmation asynchrone. Ce cours met l'accent sur la création d'interfaces utilisateur dynamiques et interactives."
        },
        image: "/images/certificates/jsfrontend.png",
        language: "JavaScript",
        credentialsUrl: "https://softuni.bg/Certificates/Details/199139/2b606ed0"
    },
    {
        name: {
            en: "HTML & CSS",
            fr: "HTML & CSS"
        },
        grade: "6.00/6.00",
        date: "27.10.2023",
        description: {
            en: "This certificate demonstrates a strong foundation in web development using HTML and CSS. The course covers topics such as semantic HTML, typography, the box model, positioning, and layout techniques like Flexbox. Additionally, it includes responsive web design principles and working with forms to create modern and accessible web applications.",
            fr: "Ce certificat démontre une solide base en développement web utilisant HTML et CSS. Le cours couvre des sujets tels que le HTML sémantique, la typographie, le modèle de boîte, le positionnement et les techniques de mise en page comme Flexbox. De plus, il inclut des principes de conception web réactive et la création de formulaires pour des applications web modernes et accessibles."
        },
        image: "/images/certificates/htmlcss.png",
        language: "HTML & CSS",
        credentialsUrl: "https://softuni.bg/Certificates/Details/198275/cf7b67bc"
    },
    {
        name: {
            en: "Data Structures Fundamentals (with C#)",
            fr: "Fondamentaux des structures de données (avec C#)"
        },
        grade: "5.87/6.00",
        date: "10.10.2023",
        description: {
            en: "This certificate demonstrates proficiency in fundamental data structures using C#. The course covers topics such as data structures and complexity, linear data structures, trees with BFS and DFS traversal methods, heaps, and binary search trees (BST). It equips learners with essential skills to design efficient algorithms and manage data effectively.",
            fr: "Ce certificat démontre la maîtrise des structures de données fondamentales en utilisant C#. Le cours couvre des sujets tels que les structures de données et la complexité, les structures de données linéaires, les arbres avec les méthodes de parcours BFS et DFS, les tas et les arbres de recherche binaire (BST). Il dote les apprenants des compétences essentielles pour concevoir des algorithmes efficaces et gérer les données de manière optimale."
        },
        image: "/images/certificates/datastructures.png",
        language: "C#",
        credentialsUrl: "https://softuni.bg/Certificates/Details/185481/9e8a2774"
    },
    {
        name: {
            en: "C# OOP",
            fr: "C# POO"
        },
        grade: "6.00/6.00",
        date: "07.08.2023",
        description: {
            en: "This certificate demonstrates advanced knowledge and skills in object-oriented programming with C#. The course covers essential OOP principles such as inheritance, encapsulation, interfaces, abstraction, and polymorphism. It also includes advanced topics like exception handling, SOLID principles, reflection and attributes, unit testing, mocking, test-driven development, and design patterns, preparing learners to build robust and maintainable applications.",
            fr: "Ce certificat démontre des connaissances et des compétences avancées en programmation orientée objet avec C#. Le cours couvre les principes essentiels de la POO tels que l'héritage, l'encapsulation, les interfaces, l'abstraction et le polymorphisme. Il inclut également des sujets avancés comme la gestion des exceptions, les principes SOLID, la réflexion et les attributs, les tests unitaires, le mocking, le développement piloté par les tests et les design patterns, préparant les apprenants à créer des applications robustes et maintenables."
        },
        image: "/images/certificates/csharp-oop.png",
        language: "C#",
        credentialsUrl: "https://softuni.bg/Certificates/Details/181094/1001dc39"
    },
    {
        name: {
            en: "C# Advanced",
            fr: "C# Avancé"
        },
        grade: "6.00/6.00",
        date: "19.06.2023",
        description: {
            en: "This certificate showcases advanced proficiency in C# with topics such as stacks, queues, multidimensional arrays, and sets and dictionaries. It covers key concepts like functional programming, defining classes, implementing linked lists, stacks, and queues, as well as working with streams, files, and directories. Additionally, the course dives into generics, iterators, and comparators, providing students with a deep understanding of advanced C# concepts.",
            fr: "Ce certificat met en avant une maîtrise avancée de C# avec des sujets tels que les piles, les files d'attente, les tableaux multidimensionnels, et les ensembles et dictionnaires. Il couvre des concepts clés comme la programmation fonctionnelle, la définition de classes, l'implémentation de listes chaînées, de piles et de files d'attente, ainsi que le travail avec les flux, les fichiers et les répertoires. De plus, le cours explore les génériques, les itérateurs et les comparateurs, offrant aux étudiants une compréhension approfondie des concepts avancés de C#."
        },
        image: "/images/certificates/csharp-advanced.png",
        language: "C#",
        credentialsUrl: "https://softuni.bg/Certificates/Details/173564/fdbfefb7"
    },
    {
        name: {
            en: "Programming Fundamentals with C#",
            fr: "Fondamentaux de la programmation avec C#"
        },
        grade: "6.00/6.00",
        date: "04.04.2023",
        description: {
            en: "This certificate demonstrates proficiency in programming fundamentals with C#, including basic syntax, conditional statements, loops, and methods. The course also covers essential tools and concepts like Git, GitHub, arrays, objects, classes, and problem-solving. Topics like text processing, regular expressions, database basics, and QA introduction are also explored, alongside the creation of a basic web project. The course aims to establish a solid foundation for future software development.",
            fr: "Ce certificat démontre la maîtrise des fondamentaux de la programmation avec C#, y compris la syntaxe de base, les instructions conditionnelles, les boucles et les méthodes. Le cours couvre également des outils et des concepts essentiels tels que Git, GitHub, les tableaux, les objets, les classes et la résolution de problèmes. Des sujets comme le traitement de texte, les expressions régulières, les bases de données et l'introduction à l'assurance qualité sont également abordés, ainsi que la création d'un projet web de base. Le cours vise à établir une base solide pour le développement logiciel futur."
        },
        image: "/images/certificates/csharp-fundamentals.png",
        language: "C#",
        credentialsUrl: "https://softuni.bg/Certificates/Details/166504/6c0fb4a2"
    },
    {
        name: {
            en: "Programming Basics",
            fr: "Bases de la programmation"
        },
        grade: "6.00/6.00",
        date: "27.02.2021",
        description: {
            en: "This certificate acknowledges the completion of the Programming Basics course, covering foundational programming concepts such as conditional statements, loops (including nested loops), and the first steps in coding. The course is designed to establish a strong understanding of core programming principles and prepare students for more advanced topics.",
            fr: "Ce certificat reconnaît l'achèvement du cours de Bases de la programmation, couvrant les concepts fondamentaux de la programmation tels que les instructions conditionnelles, les boucles (y compris les boucles imbriquées) et les premières étapes du codage. Le cours est conçu pour établir une compréhension solide des principes fondamentaux de la programmation et préparer les étudiants à des sujets plus avancés."
        },
        image: "/images/certificates/programming-basics.png",
        language: "C#",
        credentialsUrl: "https://softuni.bg/Certificates/Details/100338/2e32fbd1"
    }
];
export default certificates;
