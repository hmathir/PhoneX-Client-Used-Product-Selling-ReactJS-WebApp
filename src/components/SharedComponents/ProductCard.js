import { faClock, faClockRotateLeft, faMapMarker, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { GoReport, GoVerified } from "react-icons/go";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/MainContext";
const ProductCard = ({ product, setShowModal, showModal }) => {
    const {user} = useContext(AuthContext);
    const { name, image, location, price, newPrice, details, verified, date, usedTime, seller, _id } = product;

    const addReport = () => {
        toast.loading("reporting...", { duration: 1000 })
        const details = {
            ProductName: name,
            productId: _id,
            reporterEmail: user.email,
            reporterName: user.name,
        }

        axios.post('https://phonex.vercel.app/report', details)
            .then(res => {
                if (res.data.success) {
                    toast.success('Reported Successfully');
                } else {
                    toast.error(res.data.message)
                }
            })
    }

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


                        <div className="flex justify-between items-center">
                            <dd className="font-bold text-xl">{name}</dd>
                            <dd onClick={addReport}><GoReport title="Report To Admin"></GoReport></dd>
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

                                <span className="flex  items-center  gap-1 text-gray-500"> <FontAwesomeIcon icon={faUser} /> Seller Name: {seller} <>{verified && <GoVerified className="text-green-400"/>}</></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                {user && <label
                    disabled={user?.role !== "buyer" || product?.status === "booked"}
                    onClick={() => setShowModal(product)}
                    htmlFor="booking-modal" className="btn btn-secondary w-full">
                    {user?.role === "buyer" && product.status === "Available" ? "Buy Now" : ""} {user?.role === "seller" ? "You Are Seller" : ''}{user?.role === "admin" && "You Are Admin"}{product.status === "booked" && user.role !== "admin" && user.role !== "seller" && "Already Booked"}
                </label>}
                {!user && <Link className='btn w-full' to="/login">Login</Link>}
                </div>
            </div>

        </div>
    );
};

export default ProductCard;