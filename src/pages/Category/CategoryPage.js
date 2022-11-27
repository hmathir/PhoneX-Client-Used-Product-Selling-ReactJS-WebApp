
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ModalBooking from '../../components/SharedComponents/ModalBooking';
import ProductCard from '../../components/SharedComponents/ProductCard';

const CategoryPage = () => {
    const data = useLoaderData();
    const [showModal, setShowModal] = useState(null);
    return (
        <div className='min-h-[90vh]'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-4">
                {
                    data.map(product => <ProductCard
                        product={product}
                        showModal={showModal}
                        setShowModal={setShowModal}
                        key={product._id} />)
                }
            </div>
            {showModal && <ModalBooking
                data={showModal}
                setShowModal={setShowModal}
            />}
        </div>
    );
};

export default CategoryPage;
