export default function Certificates() {
    return (
        <section className="bg-white lg:rounded-2xl dark:bg-[#111111]">
            <div className="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
                <div className="py-12 px-4 md:px-0">
                    <h2 className="after-effect after:left-52 mt-12 lg:mt-0">Awards</h2>
                    <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] grid gap-x-10 gap-y-7 mb-6">
                        {/* blog items one start */}
                        <div className="p-5 rounded-lg mb-2 h-full bg-[#fcf4ff] dark:bg-transparent dark:border-[#212425] dark:border-2">
                            <div className="overflow-hidden rounded-lg">
                                <a href="#ex1" rel="modal:open">
                                    <img
                                        className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                                        src="images/blog_images/small/1.jpg"
                                        alt="blog image"
                                    />
                                </a>
                            </div>
                            <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                                <span>17 April</span>
                                <span className="dot-icon">Inspiration</span>
                            </div>
                            <h3 className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                                <a href="#ex1" rel="modal:open">
                                    How to Own Your Audience by Creating an Email List.
                                </a>
                            </h3>
                        </div>
                        {/* blog items one end */}
                        {/* blog items two start */}
                        <div className="p-5 rounded-lg mb-2 h-full bg-[#eefbff] dark:bg-transparent dark:border-[#212425] dark:border-2">
                            <div className="overflow-hidden rounded-lg">
                                <a href="#ex2" rel="modal:open">
                                    <img
                                        className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                                        src="images/blog_images/small/2.jpg"
                                        alt="blog image"
                                    />
                                </a>
                            </div>
                            <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                                <span>10 April</span>
                                <span className="dot-icon">Inspiration</span>
                            </div>
                            <h3 className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                                <a href="#ex2" rel="modal:open">
                                    {" "}
                                    Everything You Need to Know About Web Accessibility.{" "}
                                </a>
                            </h3>
                        </div>
                        {/* blog items two end */}
                        {/* blog items three start */}
                        <div className="p-5 rounded-lg mb-2 h-full dark:border-[#212425] dark:border-2 bg-[#fcf4ff] dark:bg-transparent">
                            <div className="overflow-hidden rounded-lg">
                                <a href="#ex3" rel="modal:open">
                                    <img
                                        className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                                        src="images/blog_images/small/3.jpg"
                                        alt="blog image"
                                    />
                                </a>
                            </div>
                            <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                                <span>21 April</span>
                                <span className="dot-icon">Web Design</span>
                            </div>
                            <h3 className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                                <a href="#ex3" rel="modal:open">
                                    he window know to say beside you
                                </a>
                                T
                            </h3>
                        </div>
                        {/* blog items three end */}
                        {/* blog items four start */}
                        <div className="p-5 rounded-lg mb-2 h-full dark:border-[#212425] bg-[#fcf4ff] dark:bg-transparent dark:border-2">
                            <div className="overflow-hidden rounded-lg">
                                <a href="#ex4" rel="modal:open">
                                    <img
                                        className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                                        src="images/blog_images/small/4.jpg"
                                        alt="blog image"
                                    />
                                </a>
                            </div>
                            <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                                <span>27 April</span>
                                <span className="dot-icon">Inspiration</span>
                            </div>
                            <h3 className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                                <a href="#ex4" rel="modal:open">
                                    Top 10 Toolkits for Deep Learning in 2021.
                                </a>
                            </h3>
                        </div>
                        {/* blog items four end */}
                    </div>
                </div>
            </div>
          
        </section>

    );
}