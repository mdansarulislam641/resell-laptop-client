import React, { useContext } from 'react';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext);
  const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
  if(!user){
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
  }
  else{
    return  children;
  }
};

export default PrivateRoute;