export default function Home() {
  return (
    <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
  {/* sidber personal info */}
  <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
    <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
      {/* profile image */}
      <img
        src="images/about/avatar.jpg"
        className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
        alt="about avatar"
      />
      <div className="pt-[100px] pb-8">
        <h1 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
          {" "}
          Monalisa Ashley{" "}
        </h1>
        <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
          Ui/Ux Designer{" "}
        </h3>
        <div className="flex justify-center space-x-3">
          {/* facebook icon and link */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#1773EA]">
              <i className="fa-brands fa-facebook-f" />
            </span>
          </a>
          {/* twitter icon and link */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#1C9CEA]">
              <i className="fa-brands fa-twitter" />
            </span>
          </a>
          {/* dribbble icon and link */}
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#e14a84]">
              <i className="fa-brands fa-dribbble" />
            </span>
          </a>
          {/* linkedin icon and link */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#0072b1]">
              <i className="fa-brands fa-linkedin-in" />
            </span>
          </a>
        </div>
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
              <p className="dark:text-white">+123 456 7890</p>
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
              <p className="dark:text-white">example@mail.com</p>
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
              <p className="dark:text-white">Hong kong china</p>
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
              <p className="dark:text-white">May 27, 1990</p>
            </div>
          </div>
        </div>
        {/* dowanload button */}
        <button className="dowanload-btn">
          <img className="mr-3" src="images/icons/dowanload.png" alt="icon" />{" "}
          Download CV{" "}
        </button>
      </div>
    </div>
  </div>
  {/* sidber info end */}
  <div className="col-span-12 lg:col-span-8">
    <header className="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
      <nav className="hidden lg:block">
        <nav className="hidden lg:block">
          <ul className="flex">
            <li>
              {" "}
              <a className="menu-item" href="aboutOne.html">
                <span className="text-xl mb-1">
                  <i className="fa-regular fa-user" />
                </span>{" "}
                About{" "}
              </a>
            </li>
            <li>
              {" "}
              <a className="menu-active" href="resumeOne.html">
                <span className="text-xl mb-1">
                  <i className="fa-regular fa-file-lines" />
                </span>{" "}
                Resume{" "}
              </a>
            </li>
            <li>
              {" "}
              <a className="menu-item" href="portfiloOne.html">
                <span className="text-xl mb-1">
                  <i className="fas fa-briefcase" />
                </span>{" "}
                Works{" "}
              </a>
            </li>
            <li>
              <a className="menu-item" href="blogOne.html">
                <span className="text-xl mb-1">
                  <i className="fa-brands fa-blogger" />
                </span>{" "}
                Blogs{" "}
              </a>
            </li>
            <li>
              {" "}
              <a className="menu-item" href="contactOne.html">
                <span className="text-xl mb-1">
                  <i className="fa-solid fa-address-book" />
                </span>{" "}
                Contact{" "}
              </a>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
    <div>
      {/* resume section start */}
      <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
        <div className="container sm:px-5 md:px-10 lg:px-14">
          <div className="py-12 px-4 md:px-0">
            {/* resume page title */}
            <h2 className="after-effect after:left-44">Resume</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
              {/* eductation start */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <i className="fa-solid text-6xl text-[#F95054] fa-graduation-cap" />
                  <h4 className="text-5xl dark:text-white font-medium">
                    {" "}
                    Education{" "}
                  </h4>
                </div>
                <div className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2021-2023
                  </span>
                  <h3 className="text-xl dark:text-white">
                    {" "}
                    Ph.D in Horriblensess{" "}
                  </h3>
                  <p className="dark:text-[#b7b7b7]">
                    {" "}
                    ABC University, Los Angeles, CA{" "}
                  </p>
                </div>
                <div className="bg-[#fff1fb] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2">
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2019 - Present
                  </span>
                  <h3 className="text-xl dark:text-white">
                    {" "}
                    Sr. Software Tester{" "}
                  </h3>
                  <p className="dark:text-[#b7b7b7]">Google Inc.</p>
                </div>
                <div className="py-4 pl-5 bg-[#fff4f4] dark:bg-transparent pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2">
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2021
                  </span>
                  <h3 className="text-xl dark:text-white">Best Developer</h3>
                  <p className="dark:text-[#b7b7b7]">
                    {" "}
                    University Of Melbourne, NA{" "}
                  </p>
                </div>
              </div>
              {/* eductation end */}
              {/* experiment start */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <i className="fa-solid text-6xl text-[#F95054] fa-briefcase" />
                  <h4 className="text-5xl dark:text-white font-medium">
                    {" "}
                    Experience{" "}
                  </h4>
                </div>
                <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg bg-[#eef5fa] dark:bg-transparent dark:border-[#212425] dark:border-2">
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2017-2021
                  </span>
                  <h3 className="text-xl dark:text-white">
                    {" "}
                    Computer Science{" "}
                  </h3>
                  <p className="dark:text-[#b7b7b7]">
                    {" "}
                    Imperialize Technical Institute{" "}
                  </p>
                </div>
                <div className="bg-[#f2f4ff] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2">
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2015-2017
                  </span>
                  <h3 className="text-xl dark:text-white">
                    {" "}
                    Cr. Web Developer{" "}
                  </h3>
                  <p className="dark:text-[#b7b7b7]">ib-themes ltd.</p>
                </div>
                <div className="py-4 bg-[#eef5fa] dark:bg-transparent pl-5 pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2">
                  <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                    2008
                  </span>
                  <h3 className="text-xl dark:text-white">Best Writter</h3>
                  <p className="dark:text-[#b7b7b7]">
                    {" "}
                    Online Typodev Soluation Ltd.{" "}
                  </p>
                </div>
              </div>
              {/* experiment start */}
            </div>
          </div>
        </div>
        {/* working section start */}
        <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1">
              <h4 className="text-5xl dark:text-white font-medium mb-6">
                {" "}
                Working Skills{" "}
              </h4>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    Web Design
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">
                    65%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div
                    className="bg-[#FF6464] h-1 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    Mobile App
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">
                    85%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div
                    className="bg-[#9272d4] h-1 rounded-full"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    Illustrator
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">
                    75%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div
                    className="bg-[#5185d4] h-1 rounded-full"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                    Photoshope
                  </span>
                  <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">
                    90%
                  </span>
                </div>
                <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                  <div
                    className="bg-[#ca56f2] h-1 rounded-full"
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <h4 className="text-5xl dark:text-white font-medium mb-8">
                {" "}
                Knowledges{" "}
              </h4>
              <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                <button className="resume-btn">Digital Design</button>
                <button className="resume-btn">Marketing</button>
                <button className="resume-btn">Social Media</button>
                <button className="resume-btn">Print</button>
                <button className="resume-btn">Time Management</button>
                <button className="resume-btn">Flexibility</button>
                <button className="resume-btn">Print</button>
              </div>
            </div>
          </div>
        </div>
        {/* working section end */}
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
              ib-themes
            </a>
            .{" "}
          </p>
        </footer>
        {/* footer end */}
      </div>
      {/* resume section start */}
    </div>
  </div>
</div>

  );
}