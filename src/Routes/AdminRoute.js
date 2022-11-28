import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/MainContext';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return toast.loading('Loading...', {
            id: 'loading'
        })
    } else {
        toast.remove('loading')
    }

    if (user?.role === "admin") {
        return children;
    }
    toast.remove('loading')
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default AdminRoute;