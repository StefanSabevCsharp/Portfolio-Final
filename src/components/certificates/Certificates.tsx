import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import certificates from "../../utils/certificates";
import { LanguageContext } from "../context/languageContext/LanguageContext";



export default function Certificates() {
    const { language } = useContext(LanguageContext);
    const [currentlyOpen, setCurrentlyOpen] = useState<number | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const modal = document.getElementById("modal");
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
        <section className="bg-white lg:rounded-2xl dark:bg-[#111111]">
            <div className="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
                <div className="py-12 px-4 md:px-0">
                    <h2 className="after-effect after:left-52 mt-12 lg:mt-0">Awards</h2>
                    <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] grid gap-x-10 gap-y-7 mb-6">

                        {/* blog items two start */}
                        {certificates.map((certificate, index) => {
                            const certificateName = certificate.name[language] || certificate.name.en;
                            const certificateDescription = certificate.description[language] || certificate.description.en;
                            return (
                                <div key={index + 1}>
                                <div className="p-5 rounded-lg mb-2 h-full bg-[#eefbff] dark:bg-transparent dark:border-[#212425] dark:border-2">
                                    <div className="overflow-hidden rounded-lg">
                                        <a onClick={() => setCurrentlyOpen(index + 1)}>
                                            <img
                                                className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                                                src={certificate.image}
                                                alt="certificate"
                                            />
                                        </a>
                                    </div>
                                    <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                                        <span>{certificate.date}</span>
                                        <span className="dot-icon">{certificate.language}</span>
                                    </div>
                                    <h3 className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                                        <a onClick={() => setCurrentlyOpen(index + 1)}>
                                            {" "}
                                            {certificateName}{" "}
                                        </a>
                                    </h3>
                                </div>

                                {currentlyOpen === index + 1 && (<div id="modal" className="modal-container fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                                    <div className="dark:scrollbarDark scrollbarLight overflow-y-scroll max-h-[60vh] lg:max-h-[80vh]">
                                        <div className="pr-3 pb-2">
                                            <img
                                                className="w-full md:h-[450px] object-contain rounded-xl mt-6"
                                                src={certificate.image}
                                                alt="blog image"
                                            />
                                            <div className="flex mt-4 text-tiny text-black dark:text-white">
                                                <span>{certificate.date}</span>
                                                <span className="dot-icon">{certificate.language}</span>
                                            </div>
                                            <h2 className="dark:text-white sm:text-3xl mt-2 font-medium">
                                                {certificateName}
                                            </h2>
                                            <p className="dark:text-white font-normal text-[15px] sm:text-sm my-4">
                                                {certificateDescription}
                                            </p>
                                            <p className="dark:text-white font-bold text-[15px] sm:text-sm my-4">
                                                {t('credentials')}:{" "}
                                                <a
                                                    href={certificate.credentialsUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-500 hover:underline dark:text-blue-400"
                                                >
                                                   {t('link-to-credentials')}
                                                </a>
                                            </p>

                                        </div>

                                    </div>
                                    <a
                                        onClick={() => setCurrentlyOpen(null)}
                                        className="close bg-close-light dark:bg-close-dark "
                                    >
                                        Close
                                    </a>
                                </div>)}

                            </div>
                            )
                        }
                            
                        )}

                    </div>
                </div>
            </div>

        </section>

    );
}