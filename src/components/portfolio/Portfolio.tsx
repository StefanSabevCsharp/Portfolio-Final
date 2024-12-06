import { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import portfolio from "../../utils/portfolio";
import { LanguageContext } from "../context/languageContext/LanguageContext";

export default function Portfolio() {
    const { language } = useContext(LanguageContext);
    const [currentlyOpen, setCurrentlyOpen] = useState<number | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const modal = document.getElementById("modal-content");
            if (modal && !modal.contains(event.target as Node)) {
                setCurrentlyOpen(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section id="portfolio" className="bg-white lg:rounded-2xl dark:bg-[#111111]">
            <div className="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
                <div className="py-12">
                    <h2 className="after-effect after:left-248 lg:mt-0">{t("portfolio")}</h2>
                </div>
                <div id="isotop-gallery-wrapper" className="flex flex-col gap-5">
                    {portfolio.map((project, index) => {
                        const projectTitle = project.title[language] || project.title.en;
                        const projectDescription = project.description[language] || project.description.en;

                        return (
                            <div key={index}>
                                <div className="portfolio_list-two-items isotop-item plugin custom">
                                    <div className="rounded-lg bg-[#eefbff] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]">
                                        <div className="overflow-hidden rounded-lg">
                                            <button
                                                onClick={() => setCurrentlyOpen(index)}
                                                className="w-full cursor-pointer"
                                            >
                                                <img
                                                    className="w-full transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                                    src={project.image}
                                                    alt="portfolio"
                                                />
                                            </button>
                                        </div>
                                        <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                                            {project.techStack.join(", ")}
                                        </span>
                                        <h1 className="font-medium text-xl transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                            <button
                                                onClick={() => setCurrentlyOpen(index)}
                                                className="cursor-pointer"
                                            >
                                                {projectTitle}
                                            </button>
                                        </h1>
                                    </div>
                                </div>
                                {currentlyOpen === index && (
                                    <div className="modal-container fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                                        <div
                                            id="modal-content"
                                            className="modal-content bg-white dark:bg-[#111111] p-6 rounded-lg max-w-2xl w-full overflow-y-auto relative"
                                        >

                                            <a
                                                onClick={() => setCurrentlyOpen(null)}
                                                className="close bg-close-light dark:bg-close-dark "
                                            >
                                                Close
                                            </a>
                                            <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                                {projectTitle}
                                            </h2>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                                <div className="space-y-2">
                                                    <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                        <i className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl" />
                                                        {t('project')} :&nbsp;<span className="font-medium">{projectTitle}</span>
                                                    </p>
                                                    <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                        <i className="fa-solid fa-code text-lg mr-2 hidden sm:block" />
                                                        {t('languages')} :&nbsp;<span className="font-medium">{`${project.techStack.join(", ")}`}</span>
                                                    </p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                        <i className="fa-regular fa-user text-lg mr-2 hidden sm:block" />
                                                        {t('client')} :&nbsp;<span className="font-medium">{"Personal Project"}</span>
                                                    </p>
                                                    <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                        <i className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block" />
                                                        {t('preview')} :&nbsp;
                                                        <span
                                                            className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]"
                                                            title={project.url}
                                                        >
                                                            <a
                                                                href={project.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                {t('link')}
                                                            </a>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="dark:text-white text-lg sm:text-xl">{projectDescription}</p>
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
                        );
                    })}
                </div>
            </div>
            <footer className="overflow-hidden rounded-b-2xl bg-[#f8fbfb] dark:bg-[#212425]" />
        </section>
    );
}
