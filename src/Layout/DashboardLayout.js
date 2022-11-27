import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../Shared/Navbar/Navbar';
import Loading from '../Components/Loading'
import useCheckAdmin from '../Hook/useCheckAdmin';
import useCheckBuyer from '../Hook/useCheckBuyer';
import useCheckSeller from '../Hook/useCheckSeller';
const DashboardLayout = () => {
  const {user,loading} = useContext(AuthContext);
 const [isAdmin,adminLoading] = useCheckAdmin(user?.email);
 const [isBuyer,buyerLoading] = useCheckBuyer(user?.email);
 const [isSeller, SellerLoading] = useCheckSeller(user?.email);



  if(loading || adminLoading || buyerLoading || SellerLoading){
    return <Loading></Loading>
  }
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
      {
        isAdmin?.isAdmin ==='admin' &&  <>
         <li><Link to='/dashboard/all-users'>All Users</Link></li>
         <li><Link to='/dashboard/all-sellers'>All Sellers</Link></li>
         <li><Link to='/dashboard/all-buyers'>All Buyers</Link></li>
        
        </>
      }
      {
        isSeller?.role === 'seller' && <>
         <li className='text-xl'><Link to='/dashboard/my-products'>My Products</Link></li>
      <li><Link to="/dashboard/add-product">Add Product</Link></li>
        </>
      }
      {
        isBuyer?.role === 'buyer' &&  <>
        <li><Link to="/dashboard/my-orders">My Orders</Link></li>
        <li><Link to='/dashboard/wishlist'>WishList</Link></li>
        </>
      }
     
  
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;