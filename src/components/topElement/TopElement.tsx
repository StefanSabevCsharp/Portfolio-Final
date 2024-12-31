import { useContext, useState } from "react";
import Navbar from "../navbar/Navbar";
import { ThemeContext } from "../context/themeContext/ThemeContext";
import { LanguageContext } from "../context/languageContext/LanguageContext";

export default function TopElement() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    console.log(toggleTheme);
    console.log(theme);

    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
    }
    return (
        <>
            <div className="section-bg">
                <div className="w-full flex justify-between px-4">
                    <a href="index.html">
                        {/* <img
                            className="h-[27px] lg:h-[32px]"
                            src="images/logo/portfolio-logo.png"
                            alt="logo"
                        /> */}

                    </a>
                    <div className="flex items-center gap-5">
                        {/* dark and light mode toggle */}
                        <button onClick={() => toggleTheme()} id="theme-toggle" type="button" className="dark-light-btn">
                            {theme == "dark" ? <i
                                id="theme-toggle-light-icon"
                                className="fa-solid fa-sun text-xl"
                            /> : <i
                                id="theme-toggle-dark-icon"
                                className="fa-solid text-xl fa-moon"
                            />}

                        </button>
                        <button onClick={() => { toggleLanguage() }} className="dark-light-btn">
                            {language == "en" ? <span>FR</span> : <span>EN</span>}
                        </button>
                        {/* mobile toggle button */}
                        <button id="menu-toggle" type="button" className="menu-toggle-btn">
                            {isMobileNavOpen ? <i
                                id="menu-toggle-close-icon"
                                className="fa-solid fa-xmark text-xl hidden  "
                                onClick={() => setIsMobileNavOpen(false)}
                            /> : <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl " onClick={() => setIsMobileNavOpen(true)} />
                            }
                        </button>
                    </div>
                </div>
            </div>
            <Navbar isOpen={isMobileNavOpen} closeMobileNav={closeMobileNav} />
        </>

    );
}