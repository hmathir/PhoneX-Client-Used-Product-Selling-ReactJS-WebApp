import Dashboard from "../Layout/Dashboard/Dashboard";
import SignUp from "../pages/Acoount/SignUp";
import CategoryPage from "../pages/Category/CategoryPage";
import Payment from "../pages/Dashboard/Payment/Payment";
import AddProduct from "../pages/Dashboard/Products/AddProducts";
import MyOrders from "../pages/Dashboard/Products/MyOrders";

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
                    path: '/register',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/category/:id',
                    element: <CategoryPage></CategoryPage>,
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
                    path: '/dashboard/addproduct',
                    element: <AddProduct></AddProduct>
                },
                {
                    path: '/dashboard/payment/:id',
                    element: <Payment></Payment>,
                    loader: ({params}) => fetch(`https://phonex.vercel.app/bookings/${params.id}`)
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