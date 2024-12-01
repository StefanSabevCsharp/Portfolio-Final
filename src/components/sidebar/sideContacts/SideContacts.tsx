
import { useTranslation } from "react-i18next";

export default function SideContacts() {
    const {t} = useTranslation();
    return (
        <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                    <i className="fa-solid fa-mobile-screen-button" />
                </span>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                        {" "}
                        {t('phone')}{" "}
                    </p>
                    <p className="dark:text-white">+41 79 720 51 14</p>
                </div>
            </div>
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                    <i className="fa-solid fa-envelope-open-text" />
                </span>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                        {" "}
                        {t('email')}{" "}
                    </p>
                    <p className="dark:text-white">stevenbg91@gmail.com</p>
                </div>
            </div>
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                    <i className="fa-solid fa-location-dot" />
                </span>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                        {" "}
                        {t('location')}{" "}
                    </p>
                    <p className="dark:text-white">{t('location_text')}</p>
                </div>
            </div>
            <div className="flex py-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                    <i className="fa-solid fa-calendar-days" />
                </span>
                <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                        {" "}
                        {t('birthday')}{" "}
                    </p>
                    <p className="dark:text-white">Sep 11, 1991</p>
                </div>
            </div>
        </div>
    );
}