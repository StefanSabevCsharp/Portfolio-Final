import toast, { Toaster } from "react-hot-toast";
import useForm from "../hooks/useForm";
import emailjs from "emailjs-com";

type ContactProps = {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {

    const initialValues = {
        name: "",
        email: "",
        message: ""
    };

    const submitHandler = async (values: ContactProps) => {

        const templateParams = {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
        };

        try {
            await emailjs.send(
                `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
                `${import.meta.env.VITE_EMAILJS_CONTACT_FORM_TEMPLATE_ID}`,
                templateParams,
                `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
            );
            toast.success("Your message has been sent! I will get back to you as soon as possible. Thank you!");
        } catch (error) {
            toast.error("Failed to send confirmation email.");
            console.error("EmailJS error:", error);
        }
    };

    const { values, handleChange, handleSubmit } = useForm(initialValues, submitHandler);
    return (
        <>
            <Toaster />
            <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
                <h2 className="after-effect after:left-60 after:top-[76px] mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12">
                    Contact{" "}
                </h2>
                <div className="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
                    <h3 className="text-4xl">
                        <span className="text-gray-lite dark:text-[#A6A6A6]">
                            I'm always open for contact
                        </span>
                        <br />
                        <span className="font-semibold dark:text-white">
                            regarding our future project together.
                        </span>
                    </h3>
                    <form onSubmit={handleSubmit} method="POST">
                        <div
                            className="returnmessage"
                            data-success="Your message has been received, We will contact you soon."
                        />
                        <div className="empty_notice">
                            <span>Please Fill Required Fields</span>
                        </div>
                        {/* name input  */}
                        <div className="relative z-0 w-full mt-[40px] mb-8 group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                            >
                                Name *{" "}
                            </label>
                        </div>
                        {/* email input  */}
                        <div className="relative z-0 w-full mb-8 group">
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                                placeholder=" "
                                id="email"
                                required
                            />
                            <label
                                htmlFor="email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                            >
                                Email *{" "}
                            </label>
                        </div>
                        {/* message input  */}
                        <div className="relative z-0 w-full mb-8 group">
                            <input
                                type="text"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
                                placeholder=" "
                                id="message"
                                required
                            />
                            <label
                                htmlFor="message"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                            >
                                Message *{" "}
                            </label>
                        </div>
                        {/* submit buttons */}
                        <input
                            type="submit"
                            className="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent dark:text-white"
                            defaultValue="Submit"
                        />
                    </form>
                </div>
                {/* footer start */}
                <footer className="overflow-hidden bg-[#f8fbfb] dark:bg-[#212425] rounded-b-2xl">

                </footer>
                {/* footer end */}
            </div>
        </>

    );
}