import { createContext, useEffect, useState } from "react";
import i18n from "../../../i18n";

type LanguageContextType = {
    language: string;
    toggleLanguage: () => void;
}

const defaultLanguage : LanguageContextType = {
    language : "en",
    "toggleLanguage" : () : void => {}
}

export const LanguageContext = createContext<LanguageContextType>(defaultLanguage);



export const LanguageProvider = ({children} : {children : React.ReactNode}) => {
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem("language");
        return savedLanguage === "en" || savedLanguage === "fr"
            ? savedLanguage
            : defaultLanguage.language;

    });

    const toggleLanguage = () => {
        const newLanguage = language === "en" ? "fr" : "en";
        setLanguage(newLanguage); 
        localStorage.setItem("language", newLanguage); 
    };

    useEffect(() => {
        if(language === "fr") {
            document.documentElement.lang = "fr";
            i18n.changeLanguage("fr");
        } else {
            document.documentElement.lang = "en";
            i18n.changeLanguage("en");
        }

    },[language]);
    
    

    const value = {language , toggleLanguage};
    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}