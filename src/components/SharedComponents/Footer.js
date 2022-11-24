import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="border border-black rounded-xl">
            <footer aria-label="Site Footer" className="">
                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 lg:pt-24"
                >
                    

                    <div className="lg:flex lg:items-end lg:justify-between">
                        <div>
                            <div className="flex justify-center text-teal-600 lg:justify-start">
                                <h1 className="text-2xl">PhoneX</h1>
                            </div>
                            <p>House 121/Ka, Meradia, Dhaka - 1219</p>
                            <p>Call Us: +88 01858-906527</p>
                            <p>Email Us: contact@phonex.com</p>
                        </div>

                        <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
                            <ul
                                className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
                            >
                                <li>
                                    <Link className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Services
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Projects
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                        Copyright &copy; HM ATHIR - 2022. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;