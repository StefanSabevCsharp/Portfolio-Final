import { t } from "i18next";
import SideContacts from "./sideContacts/SideContacts";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
    const {t} = useTranslation();
    
    return (
        <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
            <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                {/* profile image */}
                <img
                    src="images/mypic.jpg"
                    className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                    alt="about avatar"
                />
                <div className="pt-[100px] pb-8">
                    <h1 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
                        {" "}
                        Stefan Sabev{" "}
                    </h1>
                    <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
                       {t('profession')}{" "}
                    </h3>
                    <div className="flex justify-center space-x-3">
                        {/* facebook icon and link */}
                        <a
                            href="https://www.facebook.com/stefan.sabev.94"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="socialbtn text-[#1773EA]">
                                <i className="fa-brands fa-facebook-f" />
                            </span>
                        </a>
                        {/* gihub icon and link */}
                        <a
                            href="https://github.com/StefanSabevCsharp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="socialbtn text-[#1C9CEA]">
                                <i className="fa-brands fa-github" />
                            </span>
                        </a>
                        
                        {/* linkedin icon and link */}
                        <a
                            href="https://www.linkedin.com/in/stefan-sabev-952a5620a/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="socialbtn text-[#0072b1]">
                                <i className="fa-brands fa-linkedin-in" />
                            </span>
                        </a>
                    </div>
                   <SideContacts />
                    {/* dowanload button */}
                    <button className="dowanload-btn">
                        <img className="mr-3" src="images/icons/dowanload.png" alt="icon" />{" "}
                       {t('download')}{" "}
                    </button>
                </div>
            </div>
        </div>
    );
}