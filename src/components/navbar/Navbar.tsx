export default function Navbar() {
  return (
    <nav id="navbar" className="hidden lg:hidden">
  <ul className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
    <li>
      <a className="mobile-menu-items" href="aboutOne.html">
        <span className="mr-2 text-xl">
          <i className="fa-regular fa-user" />
        </span>{" "}
        About{" "}
      </a>
    </li>
    <li>
      <a className="mobile-menu-items-active" href="resumeOne.html">
        <span className="mr-2 text-xl">
          <i className="fa-regular fa-file-lines" />
        </span>{" "}
        Resume{" "}
      </a>
    </li>
    <li>
      <a className="mobile-menu-items" href="portfiloOne.html">
        <span className="mr-2 text-xl">
          <i className="fas fa-briefcase" />
        </span>{" "}
        Works{" "}
      </a>
    </li>
    <li>
      <a className="mobile-menu-items" href="blogOne.html">
        <span className="mr-2 text-xl">
          <i className="fa-brands fa-blogger" />
        </span>{" "}
        Blogs{" "}
      </a>
    </li>
    <li>
      <a className="mobile-menu-items" href="contactOne.html">
        <span className="mr-2 text-xl">
          <i className="fa-solid fa-address-book" />
        </span>{" "}
        Contact{" "}
      </a>
    </li>
  </ul>
</nav>

  );
}