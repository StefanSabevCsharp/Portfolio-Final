import { useState } from "react";
import { useTranslation } from "react-i18next";

type Navigation = {
    route: string,
    name: string,
    image: string
};

export default function useNav() : { navigation: Navigation[] } {
    const { t } = useTranslation();

   const navigation = [
        { route: '/', name: t('navigation.about'), image: "fa-regular fa-user" },
        { route: '/resume', name: t('navigation.resume'), image: "fa-regular fa-file-lines" },
        { route: '/portfolio', name: t('navigation.portfolio'), image: "fas fa-briefcase" },
        { route: '/contact', name: t('navigation.contact'), image: "fa-solid fa-address-book" },
        { route: '/awards', name: t('navigation.awards'), image: "fa-brands fa-blogger" },
    ];
    return { navigation };

};
