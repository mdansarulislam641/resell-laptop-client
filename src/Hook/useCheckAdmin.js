import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const useCheckAdmin = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(true);
    const [adminLoading, setAdminLoading] = useState(true)
   useEffect(()=>{
    fetch(`http://localhost:5000/dashboard/admin/${user?.email}`)
    .then(res=>res.json())
    .then(data =>{
        setIsAdmin(data.isAdmin)
        setAdminLoading(false)
    })
   },[user?.email,adminLoading])
   return [isAdmin, adminLoading]
};

export default useCheckAdmin;