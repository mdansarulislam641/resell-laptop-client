import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyOrdersCard from './MyOrdersCard';

const BuyerProduct = () => {
    const {user} = useContext(AuthContext);
    // const [myOrders, setMyOrders] = useState({});
    const {data:buyerProducts=[], isLoading} = useQuery({
        queryKey:['buyer-products',user?.email],
        queryFn:async()=>{
            const res =await fetch(`https://assignment-server-mdansarulislam641.vercel.app/buyer-products/${user?.email}`,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('resellToken')}`
                }
            })
            const data = res.json();
            return data ;
        }
    })
    // console.log(myOrders)
    if(isLoading){
        return <Loading></Loading>
    }

    const handlePay = id =>{

    }
    return (
        <div>
            <h1 className='text-3xl font-bold font-mono mt-10 text-center'>My Orders</h1>
            <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>image</th>
              <th>Title</th>
              <th>Buy Price</th>
              <th>Booking Date</th>
              <th>IsPaid</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
                {
                    buyerProducts && buyerProducts?.map((pd,idx) =>
                        <MyOrdersCard
                        key={pd._id}
                        idx={idx}
                        myOrder = {pd}
                        ></MyOrdersCard>
                        )
                }
                 </tbody>
        </table>
      </div>
              
            </div>
              
          
      
    );
};

export default BuyerProduct;