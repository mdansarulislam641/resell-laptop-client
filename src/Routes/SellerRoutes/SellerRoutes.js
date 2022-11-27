import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { AuthContext } from '../../contexts/AuthProvider';
import useCheckSeller from '../../Hook/useCheckSeller';

const SellerRoutes = ({children}) => {
    const {user, loading,logOutUser} = useContext(AuthContext);
   const [isSeller, SellerLoading] = useCheckSeller(user?.email);
   const location = useLocation();
   if(loading || SellerLoading){
    return <Loading></Loading>
   }

   if(isSeller?.role === 'seller'){
    return children
   }
   else{
    return <>
  
    {logOutUser()}
      <Navigate to='/login' state={{from:location}} replace> </Navigate></>
  
   }

};

export default SellerRoutes;