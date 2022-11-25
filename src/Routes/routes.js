import Dashboard from "../Layout/Dashboard/Dashboard";
import SignUp from "../pages/Acoount/SignUp";
import CategoryPage from "../pages/Category/CategoryPage";
import AddProduct from "../pages/Dashboard/Products/AddProducts";

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
                }
            ]
        }
    ]
)

export default router;