import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet></Outlet>
  
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
      <li className='text-xl'><Link to='/dashboard/my-products'>My Products</Link></li>
      <li><Link to='/dashboard/all-users'>All Users</Link></li>
      <li><Link to="/dashboard/add-product">Add Product</Link></li>
       <li> <Link to='/dashboard/wishlist'>WishList</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;