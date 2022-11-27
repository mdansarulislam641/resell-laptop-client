import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { AuthContext } from '../../contexts/AuthProvider';
import useCheckBuyer from '../../Hook/useCheckBuyer';

const BuyerRoute = ({children}) => {
    const {user,loading,logOutUser} = useContext(AuthContext);
    const location = useLocation();
    const [isBuyer , buyerLoading] =  useCheckBuyer(user?.email)
    if(loading || buyerLoading) {
        return <Loading></Loading>
    }

    if(isBuyer?.role === 'buyer'){
        return children
    }
    else{
        return<>
         {logOutUser()} <Navigate to='/login' state={{from:location}} replace></Navigate>
        </>
    }

};

export default BuyerRoute;