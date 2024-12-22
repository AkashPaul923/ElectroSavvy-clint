import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Layout/Home";
import Register from "../Layout/Register";
import SignIn from "../Layout/SignIn";
import AllService from "../Layout/AllService";
import ServiceDetail from "../Layout/ServiceDetail";
import AddService from "../Layout/AddService";
import ManageServices from "../Layout/ManageServices";
import BookedServices from "../Layout/BookedServices";
import PrivateRoute from "../Auth/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/all-service',
            element: <AllService></AllService>,
        },
        {
            path: '/service-detail/:id',
            element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
        },
        {
            path: '/add-service',
            element: <PrivateRoute><AddService></AddService></PrivateRoute>,
        },
        {
            path: '/manage-services',
            element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>,
        },
        {
            path: '/booked-services',
            element: <PrivateRoute><BookedServices></BookedServices></PrivateRoute>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>,
        },
      ]
    },
]);

export default router;