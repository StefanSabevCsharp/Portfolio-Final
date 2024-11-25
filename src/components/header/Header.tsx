import Navbar from "../navbar/Navbar";

export default function Header() {
    return (
        <>
        <div className="section-bg">
            <div className="w-full flex justify-between px-4">
                <a href="index.html">
                    <img
                        className="h-[26px] lg:h-[32px]"
                        src="images/logo/logo.png"
                        alt="logo"
                    />
                </a>
                <div className="flex items-center">
                    {/* dark and light mode toggle */}
                    <button id="theme-toggle" type="button" className="dark-light-btn">
                        <i
                            id="theme-toggle-dark-icon"
                            className="fa-solid text-xl fa-moon hidden"
                        />
                        <i
                            id="theme-toggle-light-icon"
                            className="fa-solid fa-sun text-xl hidden"
                        />
                    </button>
                    {/* mobile toggle button */}
                    <button id="menu-toggle" type="button" className="menu-toggle-btn">
                        <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl " />
                        <i
                            id="menu-toggle-close-icon"
                            className="fa-solid fa-xmark text-xl hidden  "
                        />
                    </button>
                </div>
            </div>
        </div>
        <Navbar />
        </>

    );
}