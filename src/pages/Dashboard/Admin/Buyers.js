import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../context/MainContext';

const Buyers = () => {
    const { user } = useContext(AuthContext);
    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['all_buyers', user?.email],
        queryFn: () => fetch(`https://phonex.vercel.app/users?role=buyer`, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                return data
            }),
    })
    if (isLoading) {
        return toast.loading('Sellers Is loading...', {
            id: 'dashboard'
        });
    } else {
        toast.remove('dashboard');
    }

    const deleteUser = email => {

        const agree = window.confirm('Are you sure? Delete this user?');
        if (!agree) {
            return;
        }


        fetch(`https://phonex.vercel.app/users?email=${email}`, {
            method: 'DELETE',
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message)
                    refetch();
                } else {
                    toast.error(data.message)
                }
            })
    }


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((buyer, i) => {
                                buyer.name = buyer.firstName + ' ' + (buyer?.lastName ? buyer?.lastName : '') 
                                return <tr>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={buyer?.profile ? buyer?.profile : 'https://i.ibb.co/FWJnm4d/ip.png'} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{buyer.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {buyer.email}
                                    </td>
                                    <th>
                                        <button onClick={() => deleteUser(buyer.email)} className="btn btn-outline btn-xs">Delete</button>
                                    </th>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Buyers;