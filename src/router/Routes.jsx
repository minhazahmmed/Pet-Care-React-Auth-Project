import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import PrivateRoutes from "./PrivateRoutes";
import ServiceDetails from "../pages/ServiceDetails";
import ForgetPass from "../pages/ForgetPass";
import Error from "../pages/Error";
import ScrollToTop from "../component/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <>
        <ScrollToTop />
        <RootLayout />
      </>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: '/forget/:email',
        element: <ForgetPass/>
      },
    ],
  },
]);

export default router;
