
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProducts from "../../Pages/AddProduct/AddProducts";
import AllBuyers from "../../Pages/Dashboard/AllUsers/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllUsers/AllSellers/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import BuyerProduct from "../../Pages/Dashboard/BuyerProduct/BuyerProduct";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import WishList from "../../Pages/Dashboard/WishList/WishList";
import AdvertiseDetails from "../../Pages/Home/AdvertiseProduct/AdvertiseDaetails";
import CategoryProduct from "../../Pages/Home/Categories/CategoryProduct";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/UserControlForm/LogIn";
import Register from "../../Pages/UserControlForm/Register";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoutes from "../SellerRoutes/SellerRoutes";

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
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
         
            {
                path:'/dashboard/my-products',
                element:<SellerRoutes><MyProducts></MyProducts></SellerRoutes>
            },
            {
                path:'/dashboard/all-users',
                element:<PrivateRoute><AllUsers></AllUsers></PrivateRoute>
            },
            {
                path:'/dashboard/add-product',
                element:<SellerRoutes><AddProducts></AddProducts></SellerRoutes>
            },
            {
                path:'/dashboard/my-orders',
                element:<BuyerRoute><BuyerProduct></BuyerProduct></BuyerRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<PrivateRoute><Payment></Payment></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/dashboard/payment/${params.id}`)
            },
            {
                path:'/dashboard/wishlist',
                element:<BuyerRoute><WishList></WishList></BuyerRoute>
            },
            {
                path:'/dashboard/all-sellers',
                element:<AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path:'/dashboard/all-buyers',
                element:<AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
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