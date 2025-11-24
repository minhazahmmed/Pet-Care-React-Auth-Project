import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Register from "../pages/Register";
import Login from "../pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
        {
            path: '/',
            element: <Home/>,
           

        },
        {
            path: '/services',
            element: <Services/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/login',
            element: <Login/>
        },
    ]
   
  },
]);

export default router;