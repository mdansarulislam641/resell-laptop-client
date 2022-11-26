
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProducts from "../../Pages/AddProduct/AddProducts";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AdvertiseDetails from "../../Pages/Home/AdvertiseProduct/AdvertiseDaetails";
import CategoryProduct from "../../Pages/Home/Categories/CategoryProduct";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/UserControlForm/LogIn";
import Register from "../../Pages/UserControlForm/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<PrivateRoute><CategoryProduct></CategoryProduct></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path:'/advertise-product/:id',
                element:<AdvertiseDetails></AdvertiseDetails>
            }
           
        ]
    },

    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
         
            {
                path:'/dashboard/my-products',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/all-users',
                element:<AllUsers></AllUsers>
            },
            {
                path:'/dashboard/add-product',
                element:<AddProducts></AddProducts>
            },
        ]
    },


    {
        path:'/login',
        element:<LogIn></LogIn>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
])