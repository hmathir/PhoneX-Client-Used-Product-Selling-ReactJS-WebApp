import { Link } from "react-router-dom";

const AdvertisedItem = () => {
    const items = ' ';
    return (
        items && 
        <div className="my-5 py-5 bg-gray-200 rounded-xl">
            <h1 className="text-2xl text-center">Sponsored</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">

                <article className="rounded-xl border-4 border-white ">
                    <div className="flex items-start p-6">
                        <Link href="#" className="block shrink-0">
                            <img
                                alt="Speaker"
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                className="h-14 w-14 rounded-lg object-cover"
                            />
                        </Link>

                        <div className="ml-4">
                            <h3 className="font-medium sm:text-lg">
                                <Link href="#" className="hover:underline">
                                    Question about Livewire Rendering and Alpine JS
                                </Link>
                            </h3>

                            <p className="text-sm text-gray-700 line-clamp-2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
                                accusantium temporibus iure delectus ut totam natus nesciunt ex?
                                Ducimus, enim.
                            </p>

                            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                                <div className="flex items-center text-gray-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                        />
                                    </svg>
                                    <p className="ml-1 text-xs">14 comments</p>
                                </div>

                                <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                                    Posted by
                                    <Link href="#" className="font-medium underline hover:text-gray-700">
                                        John
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <strong
                            className="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-yellow-600 py-1.5 px-3 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>

                            <span className="text-[10px] font-medium sm:text-xs">Ad</span>
                        </strong>
                    </div>
                </article>
                <article className="rounded-xl border-4 border-white ">
                    <div className="flex items-start p-6">
                        <Link href="#" className="block shrink-0">
                            <img
                                alt="Speaker"
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                className="h-14 w-14 rounded-lg object-cover"
                            />
                        </Link>

                        <div className="ml-4">
                            <h3 className="font-medium sm:text-lg">
                                <Link href="#" className="hover:underline">
                                    Question about Livewire Rendering and Alpine JS
                                </Link>
                            </h3>

                            <p className="text-sm text-gray-700 line-clamp-2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
                                accusantium temporibus iure delectus ut totam natus nesciunt ex?
                                Ducimus, enim.
                            </p>

                            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                                <div className="flex items-center text-gray-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                        />
                                    </svg>
                                    <p className="ml-1 text-xs">14 comments</p>
                                </div>

                                <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                                    Posted by
                                    <Link href="#" className="font-medium underline hover:text-gray-700">
                                        John
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <strong
                            className="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>

                            <span className="text-[10px] font-medium sm:text-xs">Solved!</span>
                        </strong>
                    </div>
                </article>
                <article className="rounded-xl border-4 border-white ">
                    <div className="flex items-start p-6">
                        <Link href="#" className="block shrink-0">
                            <img
                                alt="Speaker"
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                className="h-14 w-14 rounded-lg object-cover"
                            />
                        </Link>

                        <div className="ml-4">
                            <h3 className="font-medium sm:text-lg">
                                <Link href="#" className="hover:underline">
                                    Question about Livewire Rendering and Alpine JS
                                </Link>
                            </h3>

                            <p className="text-sm text-gray-700 line-clamp-2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
                                accusantium temporibus iure delectus ut totam natus nesciunt ex?
                                Ducimus, enim.
                            </p>

                            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                                <div className="flex items-center text-gray-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                        />
                                    </svg>
                                    <p className="ml-1 text-xs">14 comments</p>
                                </div>

                                <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                                    Posted by
                                    <Link href="#" className="font-medium underline hover:text-gray-700">
                                        John
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <strong
                            className="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>

                            <span className="text-[10px] font-medium sm:text-xs">Solved!</span>
                        </strong>
                    </div>
                </article>
            </div>

        </div>
    );
};

export default AdvertisedItem;