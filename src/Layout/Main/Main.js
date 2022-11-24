import { Outlet } from 'react-router-dom';
import Footer from '../../components/SharedComponents/Footer';
import Navbar from '../../components/SharedComponents/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;