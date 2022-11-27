import { faCheck, faClock, faClockRotateLeft, faMapMarker, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PhotoProvider, PhotoView } from "react-photo-view";
const ProductCard = ({ product, setShowModal, showModal }) => {
    const { name, image, location, price, newPrice, category, details, ads, verified, date, usedTime, seller } = product;

    return (
        <div className="border border-black rounded-lg">
            <div className="block rounded-lg p-4 shadow-lg shadow-indigo-100">
                <PhotoProvider>
                    <div>
                        <PhotoView src={image}>
                            <img
                                alt="Home"
                                src={image}
                                className="h-56 w-full rounded-md"
                            />
                        </PhotoView>
                    </div>
                </PhotoProvider>

                <div className="mt-2">
                    <dl>


                        <div>
                            <dd className="font-bold text-xl">{name}</dd>
                        </div>
                        <div className="flex justify-between items-center my-2">
                            <dd className="text-sm border border-black rounded-2xl p-1 bg-teal-800 text-white font-bold">Selling Price: ৳ {price}</dd>
                            <dd className="text-sm text-gray-500">New Price: ৳ {newPrice}</dd>
                        </div>
                    </dl>

                    <dl>
                        <div>
                            <dd className="">{details.slice(0, 100)}</dd>
                        </div>
                    </dl>

                    <div className="mt-6 gap-4 text-xs">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <FontAwesomeIcon icon={faClockRotateLeft} />
                                <span className="text-gray-500">Used Time: {usedTime}</span>
                            </div>
                            <div className="flex items-center gap-1">

                                <span className="text-gray-500"> <FontAwesomeIcon icon={faMapMarker} /> Location: {location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="my-6 gap-4 text-xs">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                                <FontAwesomeIcon icon={faClock} />
                                <span className="text-gray-500">Post Time: {date}</span>
                            </div>
                            <div className="flex items-center gap-1">

                                <span className="text-gray-500"> <FontAwesomeIcon icon={faUser} /> Seller Name: {seller} <>{verified && <FontAwesomeIcon className="text-white bg-blue-400 rounded-full" icon={faCheck}/>}</></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <label
                        onClick={() => setShowModal(product)}
                        htmlFor="booking-modal" className="btn w-full">Book Now</label>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;