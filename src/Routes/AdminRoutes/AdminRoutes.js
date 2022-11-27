import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { AuthContext } from '../../contexts/AuthProvider';
import useCheckAdmin from '../../Hook/useCheckAdmin';

const AdminRoutes = ({children}) => {
    const {user, loading,logOutUser} = useContext(AuthContext);
   const [isAdmin, adminLoading] = useCheckAdmin(user?.email);
   const location = useLocation();
   if(loading || adminLoading){
    return <Loading></Loading>
   }

   if(isAdmin?.isAdmin === 'admin'){
    return children
   }
   else{
    return <>
  
    {logOutUser()}
      <Navigate to='/login' state={{from:location}} replace> </Navigate></>
  
   }

};

export default AdminRoutes;