import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrdersCard = ({myOrder,idx,handlePay}) => {
    console.log(myOrder)
    const {loading} = useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    const {image,laptop_name,sellPrice,bookingDate,product_id,_id, payBill} = myOrder ;
    console.log(myOrder)
    return (
        
          
                          <tr>
                              <th>{idx + 1}</th>
                              <th><img className='w-20 rounded-full' src={image} alt="" /></th>
                              <td>{laptop_name}</td>
                              <td>{sellPrice}</td>
                              <td>{bookingDate}</td>
                              <td className='text-red-600'>{payBill ? "PAID" : "NOT PAID"}</td>
                             
                              <td><button className={`btn btn-sm ${payBill ? 'btn-disabled' : 'btn-sm' }`}> <Link to={`/dashboard/payment/${_id}`}>{payBill ? "PAID" : "PAY"}</Link></button></td>
                            
                              
                              
                            </tr>
                         
                 
           
         
           
    );
};

export default MyOrdersCard;