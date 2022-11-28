import toast from 'react-hot-toast';
import { FaRegTimesCircle, FaTrash } from "react-icons/fa";
import { useQuery } from 'react-query';

const Reports = () => {

    const { data = [], refetch, isLoading } = useQuery({
        queryKey: 'reports',
        queryFn: () => fetch('https://phonex.vercel.app/reports', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                return data
            })
    })

    const handleDelete = (id, productName, _id) => {
        const agree = window.confirm(`Are you sure you want to delete ${!id && 'Report '} on ${productName} ?`)
        if (!agree) {
            return
        }
        toast.loading('Deleting...', {
            id: 'delete'
        });

        fetch(`https://phonex.vercel.app/reports?${id && "id=" + id}&reportId=${_id} `, {
            method: 'DELETE',
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.remove('delete');
                    toast.success(data.message)
                    refetch();
                }
                else {
                    toast.remove('delete');
                    toast.error(data.message)
                }
            })
    }
    if (isLoading) {
        return toast.loading('Report Loading...', {
            id: 'reports'
        });
    } else {
        toast.remove('reports');
    }

    return (
        <div>
            <h1 className='text-center p-2'>{data.length} Reports Found!</h1>

            <div className="">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Reporter</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((report, index) => {
                                    return <tr key={report._id}>
                                        <th>{index + 1}</th>
                                        <td>{report.ProductName}</td>
                                        <td>{report.reporterName}</td>
                                        <td className='flex gap-2'>
                                            <button
                                                onClick={() => handleDelete(report.productId, report.ProductName, report._id)}
                                                className='text-xl text-rose-900' title='Delete Product'><FaTrash />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(false, report.ProductName, report._id)}
                                                className='text-xl text-rose-900'><FaRegTimesCircle
                                                    title='Delete Report' />
                                            </button>
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reports;