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
            ]
        }
    ]
)

export default router;