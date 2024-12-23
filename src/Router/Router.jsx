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
import ServiceToDo from "../Layout/ServiceToDo";

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
            path: '/services/:id',
            element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/service-detail/${params.id}`)
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
            path: '/service-to-do',
            element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>,
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