import { Link, useLocation } from "react-router";
import navigation from "../../utils/navigation";

export default function Navbar() {
    const locationPath = useLocation().pathname;
    const activeLink: string = "mobile-menu-items-active";
    const inactiveLink: string = "mobile-menu-items";
    return (
        <nav id="navbar" className="hidden lg:hidden">
            <ul className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
                {navigation.map((link,index) => (
                    <li key={index}>
                    <Link className={locationPath == link.route ? activeLink : inactiveLink} to={link.route}>
                        <span className="mr-2 text-xl">
                            <i className={link.image} />
                        </span>{" "}
                        {link.name}{" "}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>

    );
}