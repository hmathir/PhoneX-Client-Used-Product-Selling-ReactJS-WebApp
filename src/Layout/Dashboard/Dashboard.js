import { Outlet } from 'react-router-dom';
import Header from '../../components/SharedComponents/Navbar';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <div className="drawer drawer-mobile">
                <input id="admin-menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-2">
                    <Outlet />
                </div>
                <DashboardSidebar />
            </div>
        </div>
    );
};

export default Dashboard;