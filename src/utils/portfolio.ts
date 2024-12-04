type PortfolioItem = { 
    title: string;
    description: string;
    image: string;
    url: string;
    techStack: string[];
    number: number;
};

const portfolio: PortfolioItem[] = [
    {"title" : "Learny", "description" : "A platform for learning and teaching", "image" : "/images/portfolio/learny.png", "url" : "https://learny.stefansabev.com", "techStack" : ["Javascript", "React"], "number" : 1},
   
];

export default portfolio;