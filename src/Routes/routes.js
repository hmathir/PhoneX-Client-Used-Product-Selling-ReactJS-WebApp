import Dashboard from "../Layout/Dashboard/Dashboard";
import Login from "../pages/Acoount/Login";
import SignUp from "../pages/Acoount/SignUp";
import CategoryPage from "../pages/Category/CategoryPage";
import Buyers from "../pages/Dashboard/Admin/Buyers";
import Reports from "../pages/Dashboard/Admin/Reports";
import Sellers from "../pages/Dashboard/Admin/Sellers";
import Payment from "../pages/Dashboard/Payment/Payment";
import AddProduct from "../pages/Dashboard/Products/AddProducts";
import MyOrders from "../pages/Dashboard/Products/MyOrders";
import UserDashboard from "../pages/Dashboard/User/UserDashboard";
import AdminRoute from "./AdminRoute";
import LoginRoute from "./LoginRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");
const { default: HomePage } = require("../pages/Home/HomePage");

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    path: "/",
                    element: <HomePage></HomePage>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/category/:id',
                    element: <LoginRoute><CategoryPage/></LoginRoute>,
                    loader: ({params}) => {
                        return fetch(`https://phonex.vercel.app/category/${params.id}`)
                    }
                }
            ]
        },
        {
            path: '/dashboard',
            element: <Dashboard/>,
            children: [
                {
                    path: '/dashboard',
                    element: <UserDashboard/>,
                },
                {
                    path: '/dashboard/addproduct',
                    element: <AddProduct></AddProduct>
                },
                {
                    path: '/dashboard/payment/:id',
                    element: <Payment></Payment>,
                    loader: ({params}) => fetch(`https://phonex.vercel.app/bookings/${params.id}`)
                },
                {
                    path: '/dashboard/sellers',
                    element: <AdminRoute><Sellers></Sellers></AdminRoute> 
                },
                {
                    path: '/dashboard/buyers',
                    element: <AdminRoute><Buyers></Buyers></AdminRoute> 
                },
                {
                    path: '/dashboard/reports',
                    element: <AdminRoute><Reports></Reports></AdminRoute> 
                },
                {
                    path: '/dashboard/my-orders',
                    element: <MyOrders></MyOrders>
                }
            ]
        }
    ]
)

export default router;