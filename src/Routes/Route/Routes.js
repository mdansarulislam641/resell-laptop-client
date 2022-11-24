import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddProducts from "../../Pages/AddProduct/AddProducts";
import CategoryProduct from "../../Pages/Home/Categories/CategoryProduct";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/UserControlForm/LogIn";
import Register from "../../Pages/UserControlForm/Register";

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
                element:<CategoryProduct></CategoryProduct>,
            },
            {
                path:'/add-product',
                element:<AddProducts></AddProducts>
            }
           
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