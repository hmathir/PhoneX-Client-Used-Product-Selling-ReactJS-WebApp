import { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/MainContext';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data = [] } = useQuery({
        queryKey: ['myOrders', user?.id],
        queryFn: () => fetch(`https://phonex.vercel.app/my-orders?email=${user?.email}`)
            .then(res => res.json()),
    })
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>PRICE</th>
                            <th>STATUS</th>
                            <th>
                                <Link to="/dashboard/add-product" className='btn btn-sm btn-accent'>
                                    Add Product
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(product => <tr>
                                <th>
                                    1
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    BDT {product.price}
                                </td>
                                <td>
                                    {product.status}
                                </td>
                                <th>
                                    <button className="btn btn-outline btn-xs">delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>TOTAL POST</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;