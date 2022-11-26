import { PhotoProvider, PhotoView } from "react-photo-view";
const ProductCard = ({ product, setShowModal, showModal }) => {
    const { name, image, location, price, newPrice, category, details, ads } = product;

    return (
        <div className="border border-black rounded-lg">
            <div className="block rounded-lg p-4 shadow-lg shadow-indigo-100">
                <PhotoProvider>
                    <div className="foo">
                        <PhotoView src={image}>
                            <img
                                alt="Home"
                                src={image}
                                className="h-56 w-full rounded-md object-cover"
                            />
                        </PhotoView>
                    </div>
                </PhotoProvider>

                <div className="mt-2">
                    <dl>


                        <div>
                            <dd className="font-bold text-xl">{name}</dd>
                        </div>
                        <div className="flex justify-between my-2">
                            <dd className="text-sm border border-black rounded-2xl p-1 bg-teal-800 text-white font-bold">Selling Price: ৳ {price}</dd>
                            <dd className="text-sm text-gray-500">New Price: ৳ {newPrice}</dd>
                        </div>
                    </dl>

                    <dl>
                        <div>
                            <dd className="">{details.slice(0, 100)}</dd>
                        </div>
                    </dl>

                    <div className="mt-6 flex items-center justify-between gap-4 text-xs">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M10 4a1 1 0 100 2 1 1 0 000-2zm0 8a1 1 0 100 2 1 1 0 000-2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-gray-500">{location}</span>
                            </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
            );
};

            export default ProductCard;