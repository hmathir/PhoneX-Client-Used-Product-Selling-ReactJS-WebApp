import { useState } from "react";
import { useQuery } from "react-query";
import ModalBooking from "../../components/SharedComponents/ModalBooking";
import ProductCard from "../../components/SharedComponents/ProductCard";

const AdvertisedItem = () => {
    const [showModal, setShowModal] = useState(null);
    const { data: items = [] } = useQuery({
        queryKey: ["sponsoderdProducts"],
        queryFn: async () => {
            const res = await fetch("https://phonex.vercel.app/sponsoderdProducts");
            const data = await res.json();
            return data;
        }
    })
    return (
        items.length > 0 &&
        <div className="my-5 py-5 bg-gray-200 rounded-xl">
            <h1 className="text-2xl text-center">Sponsored</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
                {items.map((item) => {
                    return <ProductCard
                        showModal={showModal}
                        setShowModal={setShowModal} key={item._id} product={item} />
                })}
            </div>
            {showModal && <ModalBooking
                data={showModal}
                setShowModal={setShowModal}
            />}

        </div>
    );
};

export default AdvertisedItem;