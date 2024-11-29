import { createContext, useEffect, useState } from "react";

type ThemeContextType = {
    theme: string,
    toggleTheme: () => void,
}

const defaultValue: ThemeContextType = {
    theme: "dark",
    toggleTheme: () => { },
};

export const ThemeContext = createContext<ThemeContextType>(defaultValue);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" || savedTheme === "light"
            ? savedTheme
            : defaultValue.theme;
    });

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        if (
            theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const value = { theme, toggleTheme };


    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
