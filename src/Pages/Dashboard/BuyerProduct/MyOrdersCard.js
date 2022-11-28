import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersCard = ({myOrder,idx,handlePay}) => {
    console.log(myOrder)
    const {image,laptop_name,sellPrice,bookingDate,product_id, payBill} = myOrder ;
    return (
        
          
                          <tr>
                              <th>{idx + 1}</th>
                              <th><img className='w-20 rounded-full' src={image} alt="" /></th>
                              <td>{laptop_name}</td>
                              <td>{sellPrice}</td>
                              <td>{bookingDate}</td>
                              <td className='text-red-600'>{payBill ? "PAID" : "NOT PAID"}</td>
                             
                              <td><button className={`btn btn-sm ${payBill ? 'btn-disabled' : 'btn-sm' }`}> <Link to={`/dashboard/payment/${product_id}`}>{payBill ? "PAID" : "PAY"}</Link></button></td>
                            
                              {/* <td><button onClick={()=>handlePay()} className={`${&& 'btn-disabled'} btn btn-xs ${advertise && 'btn-primary btn-disabled text-black'}`}>{pd?.advertise ? ' Advertised Done' : 'Advertise'}</button></td> */}
                              
                            </tr>
                         
                 
           
         
           
    );
};

export default MyOrdersCard;