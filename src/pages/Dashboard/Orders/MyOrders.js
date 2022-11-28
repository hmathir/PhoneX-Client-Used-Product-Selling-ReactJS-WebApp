import { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/MainContext';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data = [], isLoading } = useQuery({
        queryKey: ['my-orders', user?.email],
        queryFn: () => fetch(`https://phonex.vercel.app/my-orders?email=${user?.email}`,{
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                return data;
            })
    })

    return (
        <>{isLoading ? <h1>Loading...</h1> : <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>PRICE</th>
                            <th>STATUS</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(booking => <tr>
                                <th>
                                    1
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{booking.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    BDT {booking.price}
                                </td>
                                <td>
                                    {booking.status}
                                </td>
                                <th>
                                    {booking.status !== "Paid" && <Link to={`/dashboard/payment/${booking._id}`} className="btn btn-outline btn-xs">PAY NOW</Link>}
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>}</>

    );
};

export default MyOrders;