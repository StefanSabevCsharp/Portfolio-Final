type Navigation = {
    route: string,
    name: string,
    image: string
};

const navigation : Navigation[] = [
    {route : '/', name: 'About', image: "fa-regular fa-user"},
    {route : '/resume', name: 'Resume', image: "fa-regular fa-file-lines"},
    {route : '/portfolio', name: 'Portfolio', image: "fas fa-briefcase"},
    {route : '/contact', name: 'Contact', image: "fa-solid fa-address-book"},
    {route : '/awards', name: 'Awards', image: "fa-brands fa-blogger"},
]

export default navigation;