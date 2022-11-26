import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useCheckSeller = () => {
    const {user} = useContext(AuthContext);
    const [isSeller, setIsSeller] = useState(true);
    const [SellerLoading, setSellerLoading] = useState(true)
   useEffect(()=>{
    fetch(`http://localhost:5000/dashboard/seller/${user?.email}`)
    .then(res=>res.json())
    .then(data =>{
        setIsSeller(data.isSeller)
        setSellerLoading(false)
    })
   },[user?.email,SellerLoading])
   return [isSeller, SellerLoading]
};

export default useCheckSeller;