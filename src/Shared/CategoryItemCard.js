import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import GenericModal from '../Components/GenericModal';

const CategoryItemCard = ({product,setSingleProduct}) => {
  const navigate = useNavigate();
  const handleWishList = id =>{
    const wishListInfo = {
      wishList_id : id,

    }
    console.log(wishListInfo, id)
    fetch(`http://localhost:5000/wishlist`,{
      method:"POST",
      headers:{
        'content-type':'application/json',
        authorization:`bearer ${localStorage.getItem('resellToken')}`
      },
      body:JSON.stringify(wishListInfo)

    })
    .then(res =>res.json())
    .then(data =>{
      if(data.acknowledged){
        toast.success('successfully added wishlist')
        navigate(`/home`)
      }

    })
  }
    return (
        <div className="card card-compact w-full my-8 bg-base-100 shadow-xl">
        <figure><img className='w-full h-[200px] md:h-[400px]' src={product.image} alt="laptop" /></figure>
        <div className="card-body">
         <div className='px-4'>
         <div className=' flex justify-between'>
         <h2 className="card-title md:text-3xl text-2xl font-bold font-mono">Brand: {product.categoryName}</h2>
        <label htmlFor="generic-modal" className='md:text-xl btn btn-sm md:btn-xl md:btn-outline'>wishList</label>
          
         
         </div>
          <div className=' text-xl  font-semibold'>
          <h2 className="card-title md:text-3xl text-2xl font-semibold font-mono">Model: {product.productName}</h2>
          <h2>Purchase Price:{product.purchasePrice}</h2>
          <div>
          <h2>Sell Price:{product.sellPrice}</h2>
          <h1>Used: {product.usedYear} year</h1>
          <h4>Condition : {product.condition}</h4>
          </div>
          </div>
         
          <h3 className='text-xl '><span className='font-bold'>Seller </span>:{product.sellerName} {product?.verified ? <span className=' border rounded-full bg-green-700 text-white px-1'>verified</span>: <span className=' border rounded-full bg-green-700 text-white px-1'>unverified</span> }</h3>
          <p className='text-xl'><span className='font-bold'>Phone: </span> {product.phone}</p>
          <p className='text-xl'><span className='font-bold'>Location: </span> {product.location}</p>
          <p className='text-xl'><span className='font-bold'>Post Date: </span>{product.postTime}</p>
          <h2 className='text-xl mb-5'><span className='font-bold'>Description: </span> {product.description }</h2>
          <div className="card-actions justify-center">
          <label onClick={()=>setSingleProduct(product)} htmlFor="booking-modal" className="btn btn-primary w-full text-2xl">BUY NOW</label>
        
          </div>
         </div>
        <GenericModal
        title={"Are You Sure Add WithList This Item"}
        message={'if you add this item wishList you can buy now go for your wishList dashboard'}
        product={product}
        handleWishList={handleWishList}
        ></GenericModal>
        </div>
      </div>
    );
};

export default CategoryItemCard;