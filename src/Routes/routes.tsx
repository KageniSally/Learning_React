import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/home";
import App from "../App";
import About from "../Pages/About/about";
import Beauty from "../Pages/Products/beauty";
import Bedding from "../Pages/Products/bedding";
import Electronics from "../Pages/Products/electronics";
import Fashion from "../Pages/Products/fashion";
import Garden from "../Pages/Products/garden";
import Kitchen from "../Pages/Products/kitchen";
import Sports from "../Pages/Products/sports";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "products/Beauty", element: <Beauty /> },
            { path: "products/Bedding", element: <Bedding /> },
            { path: "products/Electronics", element: <Electronics /> },
            { path: "products/Fashion", element: <Fashion /> },
            { path: "products/Garden", element: <Garden /> },
            { path: "products/Kitchen", element: <Kitchen /> },
            { path: "products/Sports", element: <Sports /> }
            // {path:"products/:ticker",element:}
        ]
    }
]);