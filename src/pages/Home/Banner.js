import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="">
            <section className="bg-gray-900 text-white rounded-xl">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-2/4 lg:items-center"
                >
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Upgread Your Slef,

                            <span className="sm:block"> With Updated Phone's. </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                            PhoneX - We are here to help you to find the best used phone for you at the cheap price!
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/get-started"
                            >
                                Get Started
                            </Link>

                            <Link
                                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                href="/about"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;