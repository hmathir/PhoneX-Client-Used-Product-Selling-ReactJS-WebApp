import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/MainContext';

const ModalBooking = ({ setShowModal, data }) => {
    const { user } = useContext(AuthContext);
    const { name, price,  _id } = data;
    const [loading, setLoading] = useState(false);
    const handleBooking = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const details = {
            status: "booked",
            buyer: user.name,
            buyerEmail: user.email,
            buyerPhone: form.phone.value,
            buyerAddress: form.address.value,

        }
        setLoading(true);
        fetch(`https://phonex.vercel.app/booking?id=${_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })
            .then(response => response.json())
            .then(data => {
                setShowModal(null)
                if (data.success) {
                    toast.success(data.message)
                    setLoading(false);
                }
                else {
                    toast.error(data.message)
                    setLoading(false);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative p-3 bg-black">
                    <label onClick={() => setShowModal(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-xl w-5/6 text-white'>Please Confirm Your Booking</h1>
                    <form onSubmit={(e) => handleBooking(e)} className='mt-1 space-y-3'>
                        <input type="text" defaultValue={user?.name} readOnly className="input input-bordered w-full" />
                        <input type="text" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                        <input type="text" defaultValue={name} readOnly className="input input-bordered w-full" />
                        <input type="text" defaultValue={"BDT" + price} readOnly className="input input-bordered w-full" />
                        <div className="grid lg:grid-cols-2 gap-1">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-white">Meeting Location?*</span>
                                </label>
                                <input type="text" name='address' placeholder="Meeting location for buying this product" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-white">Contact Number*</span>
                                </label>
                                <input type="number" name="phone" placeholder="01717434427" className="input input-bordered w-full " />
                            </div>
                        </div>
                        <input type="submit" disabled={loading} className={`btn w-full ${loading && "loading"}`} />
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalBooking;
