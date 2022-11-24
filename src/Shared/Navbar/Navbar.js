import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuList =<>
        <Link to='/home'>Home</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to='wishlist'>WishList</Link>
        <Link to="dashboard">Dashboard</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>LogIn</Link>
    </>
            
    
    return (
        <div className="navbar bg-base-100 container ">
       <div className='flex justify-between w-full'>
       <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>{menuList}</li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Resell Product</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           <li className='text-xl'>{menuList}</li>
           <li className='text-xl'>
          <a>Get started</a>
        </li>
          </ul>
        </div>

       </div>
        
      </div>
    );
};

export default Navbar;