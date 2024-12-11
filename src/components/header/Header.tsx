import { Link, useLocation } from "react-router";
import useNav from "../../utils/navigation";

export default function Header() {
    const {navigation} = useNav();
    const locationPath = useLocation().pathname;
    const activeLink: string = "menu-active";
    const inactiveLink: string = "menu-item";
  return (
    <header className="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
    <nav className="hidden lg:block">
        <nav className="hidden lg:block">
            <ul className="flex">
                {navigation.map((link, index) => (
                    <li key={index}>
                        {" "}
                        <Link className={locationPath == link.route ? activeLink : inactiveLink} to={link.route}>
                            <span className="text-xl mb-1">
                                <i className={link.image} />
                            </span>{" "}
                            {link.name}{" "}
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
    </nav>
</header>
  );
}