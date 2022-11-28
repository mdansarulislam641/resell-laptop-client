import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';


const BookingModal = ({singleProduct,setSingleProduct}) => {
    const {user} = useContext(AuthContext);
    const {productName,sellPrice,phone,location,_id,image} = singleProduct ;
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    const bookingInformation ={
        buyerName:user?.displayName,
        email:user?.email,
        sellPrice,
        location,
        phone,
        product_id: _id,
        laptop_name:productName,
        sellerEmail:singleProduct.userEmail,
        bookingDate:today,
        image:image
    }
    const handleBookLaptop = () =>{
        fetch('https://assignment-server-mdansarulislam641.vercel.app/bookings',{
            method:"POST",
            headers:{
                'content-type':'application/json',
                authorization:`bearer ${localStorage.getItem('resellToken')}`
            },
            body:JSON.stringify(bookingInformation)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                fetch(`https://assignment-server-mdansarulislam641.vercel.app/products/${_id}`,{
                    method:"PUT",
                })
                .then(res=>res.json())
                .then(data =>{
                    console.log(data)
                    if(data.acknowledged){
                        toast.success(`successfully booking this ${productName}`);
                        setSingleProduct(null)
                    }
                   
                })
            }
        })
    }


    return (
        <div>
           
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box md:w-1/3 w-full md:mx-0 mx-1 max-w-5xl">
    <h3 className='text-2xl text-center'>Welcome for coming to booking this Laptop</h3>
    <form>
       <input type="text" defaultValue={user?.displayName} disabled className='input input-bordered w-full my-5' />
       <input type="text" defaultValue={user?.email} disabled className='input input-bordered w-full' />
      
    </form>
<div className='text-xl my-4'>
    <p>Laptop Name :  {productName}</p>
</div>
<div className='text-xl my-4'>
    <p>Sell Price :  {sellPrice}</p>
</div>
<div className='text-2xl'>
    <p>Seller Phone: {phone}</p>
    <p>Location: {location}</p>
</div>
    <p className="py-4"></p>
    <div className="modal-action">
      <label onClick={handleBookLaptop} className="btn ">Confirm</label>
      <label htmlFor="booking-modal" className="btn btn-outline">Cancel</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingModal;