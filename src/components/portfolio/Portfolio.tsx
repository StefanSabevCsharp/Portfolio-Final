import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import portfolio from "../../utils/portfolio";

export default function Portfolio() {
    const [currentlyOpen, setCurrentlyOpen] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const modal = document.getElementById('modal-content');
            if (modal && !modal.contains(event.target as Node)) {
                setCurrentlyOpen(0);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section id="portfolio" className="bg-white lg:rounded-2xl dark:bg-[#111111]">
            <div className="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
                <div className="py-12">
                    <h2 className="after-effect after:left-248 lg:mt-0">{t('portfolio')}</h2>
                </div>
                <div id="isotop-gallery-wrapper" className="flex flex-col gap-5">
                    {/* Portfolio item */}


                    {portfolio.map((project, index) => (
                        <div key={index + 1}>
                            <div className="portfolio_list-two-items isotop-item plugin custom">
                                <div className="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]">
                                    <div className="overflow-hidden rounded-lg">
                                        <a onClick={() => setCurrentlyOpen(index + 1)}>
                                            <img
                                                className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                                src={project.image}
                                                alt="portfolio"
                                            />
                                        </a>
                                    </div>
                                    <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                                    {project.techStack.join(", ")}
                                    </span>
                                    <h1 className="font-medium cursor-pointer text-xl transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        <a onClick={() => setCurrentlyOpen(index + 1)}>{project.title}</a>
                                    </h1>
                                </div>
                            </div>
                            {currentlyOpen === index + 1 && (
                                <div className="modal-container fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                                    <div
                                        id="modal-content"
                                        className="modal-content bg-white dark:bg-[#111111] p-6 rounded-lg max-w-2xl w-full overflow-y-auto relative"
                                    >
                                        <button
                                            onClick={() => setCurrentlyOpen(0)}
                                            className="absolute top-4 right-4 bg-red-500 rounded-full p-2 hover:bg-red-600 focus:outline-none dark:text-white dark:bg-red-500 dark:hover:bg-red-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                        <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                            {project.title}
                                        </h2>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                            <div className="space-y-2">
                                                <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                    <i className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl" />
                                                    Project :&nbsp;<span className="font-medium">{project.title}</span>
                                                </p>
                                                <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                    <i className="fa-solid fa-code text-lg mr-2 hidden sm:block" />
                                                    Languages :&nbsp;<span className="font-medium">{`${project.techStack.join(", ")}`}</span>
                                                </p>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                    <i className="fa-regular fa-user text-lg mr-2 hidden sm:block" />
                                                    Client :&nbsp;<span className="font-medium">{"Personal Project"}</span>
                                                </p>
                                                <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                    <i className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block" />
                                                    Preview :&nbsp;
                                                    <span
                                                        className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]"
                                                        title={project.url}
                                                    >
                                                        <a
                                                            href={project.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Link to Project
                                                        </a>
                                                    </span>
                                                </p>

                                            </div>
                                        </div>
                                        <p className="dark:text-white text-lg sm:text-xl">
                                            {project.description}
                                        </p>
                                        <div className="pr-3">
                                            <img
                                                className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                                                src={project.image}
                                                alt="portfolio"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    ))}
                </div>
            </div>
            <footer className="overflow-hidden rounded-b-2xl bg-[#f8fbfb] dark:bg-[#212425]" />
        </section>
    );
}
