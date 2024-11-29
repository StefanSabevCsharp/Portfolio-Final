
export default function Home() {

    return (
        <div>
            <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
                <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
                    {/* about page title */}
                    <h2 className="after-effect after:left-52">About Me</h2>
                    {/* personal info for mobile devices start */}
                    <div className="lg:hidden">
                        <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                            {/* profile image  */}
                            <img
                                src="images/mypic.jpg"
                                className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                                alt="about"
                            />
                            <div className="pt-[100px] pb-8">
                                <h2 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
                                    {" "}
                                    Stefan Sabev
                                </h2>
                                <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
                                    Fullstack Web Developer{" "}
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
                                    {/* github icon and link */}
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
                                {/* personal info start */}
                                <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                                    <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                                        <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                                            <i className="fa-solid fa-mobile-screen-button" />
                                        </span>
                                        <div className="text-left ml-2.5">
                                            <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                                                {" "}
                                                Phone{" "}
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
                                                Email{" "}
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
                                                Location{" "}
                                            </p>
                                            <p className="dark:text-white">Yverdon-les-Bains, Suisse</p>
                                        </div>
                                    </div>
                                    <div className="flex py-2.5">
                                        <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                                            <i className="fa-solid fa-calendar-days" />
                                        </span>
                                        <div className="text-left ml-2.5">
                                            <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                                                {" "}
                                                Birthday{" "}
                                            </p>
                                            <p className="dark:text-white">Sep 11, 1991</p>
                                        </div>
                                    </div>
                                </div>
                                {/* personal info end */}
                                {/* dowanload button */}
                                <button className="dowanload-btn">
                                    <img
                                        className="mr-3"
                                        src="images/icons/dowanload.png"
                                        alt="icon"
                                    />{" "}
                                    Download CV
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* personal info for mobile devices end */}
                    <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center">
                        <div className="col-span-12 space-y-2.5">
                            <div className="lg:mr-16">
                                <p className="text-[#44566c] dark:text-color-910 leading-7 text-lg">
                                    Over the past two years, I have worked tirelessly to transition into the tech industry as a JavaScript developer. I successfully completed the <b>JavaScript Web Developer</b> path at SoftUni with a perfect score of 6.00 and received my diploma, demonstrating my expertise in JavaScript, DOM manipulation, RESTful APIs, and full-stack development.
                                </p>
                                <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910 text-lg">
                                    While currently employed in a different field, I am fully committed to transitioning into a career as a full-stack JavaScript developer. I am passionate about learning new technologies, building impactful solutions, and continuously growing as a developer every day.
                                </p>
                            </div>

                            <div />
                        </div>
                    </div>
                </div>
                {/* what i do section start */}
                <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
                    <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pb-5">
                        {" "}
                        What I do!{" "}
                    </h3>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                        <div className="about-box bg-[#fcf4ff] dark:bg-transparent">
                            <img
                                className="w-10 h-10 object-contain block"
                                src="images/icons/icon.svg"
                                alt="icon"
                            />
                            <div className="space-y-2">
                                <h3 className="dark:text-white text-[22px] font-semibold">
                                    {" "}
                                    Ui/Ux Design{" "}
                                </h3>
                                <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    euismod volutpat.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="about-box bg-[#fefaf0] dark:bg-transparent">
                            <img
                                className="w-10 h-10 object-contain block"
                                src="images/icons/icon1.svg"
                                alt="icon"
                            />
                            <div className="space-y-2">
                                <h3 className="dark:text-white text-[22px] font-semibold">
                                    {" "}
                                    App Development{" "}
                                </h3>
                                <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    euismod volutpat.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="about-box bg-[#fcf4ff] dark:bg-transparent">
                            <img
                                className="w-10 h-10 object-contain block"
                                src="images/icons/icon2.svg"
                                alt="icon"
                            />
                            <div className="space-y-2">
                                <h3 className="dark:text-white text-[22px] font-semibold">
                                    {" "}
                                    Photography{" "}
                                </h3>
                                <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    euismod volutpat.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="about-box bg-[#fff4f4] dark:bg-transparent">
                            <img
                                className="w-10 h-10 object-contain block"
                                src="images/icons/icon3.svg"
                                alt="icon"
                            />
                            <div className="space-y-2">
                                <h3 className="dark:text-white text-[22px] font-semibold">
                                    {" "}
                                    Photography{" "}
                                </h3>
                                <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    euismod volutpat.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="about-box bg-[#fff0f8] dark:bg-transparent">
                            <img
                                className="w-10 h-10 object-contain block"
                                src="images/icons/icon4.svg"
                                alt="icon"
                            />
                            <div className="space-y-2">
                                <h3 className="dark:text-white text-[22px] font-semibold">
                                    {" "}
                                    Managment{" "}
                                </h3>
                                <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    euismod volutpat.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="about-box bg-[#f3faff] dark:bg-transparent">
                            <img
                                className="w-10 h-10 object-contain block"
                                src="images/icons/icon5.svg"
                                alt="icon"
                            />
                            <div className="space-y-2">
                                <h3 className="dark:text-white text-[22px] font-semibold">
                                    {" "}
                                    Web Development{" "}
                                </h3>
                                <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    euismod volutpat.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer start */}
                <footer
                    className="overflow-hidden rounded-b-2xl"
                    style={{ background: "transparent" }}
                >
                    <p className="text-center py-6 text-gray-lite dark:text-color-910">
                        {" "}
                        © 2022 All Rights Reserved by{" "}
                        <a
                            className="hover:text-[#FA5252] duration-300 transition"
                            href="https://themeforest.net/user/ib-themes"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            ib-themes
                        </a>
                        .{" "}
                    </p>
                </footer>
                {/* footer section end */}
            </div>
        </div>

    );
}