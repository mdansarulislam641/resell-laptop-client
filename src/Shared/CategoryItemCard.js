import React from 'react';

const CategoryItemCard = ({product,setSingleProduct}) => {
    return (
        <div className="card card-compact w-full my-8 bg-base-100 shadow-xl">
        <figure><img className='w-full h-[400px]' src={product.image} alt="laptop" /></figure>
        <div className="card-body">
         <div className='px-4'>
         <div className=' block md:flex justify-between'>
         <h2 className="card-title md:text-3xl text-2xl font-bold font-mono">Brand: {product.categoryName}</h2>
         <h2 className="card-title md:text-3xl text-2xl font-semibold font-mono">Model: {product.productName}</h2>
         </div>
          <div className='flex justify-between text-xl font-semibold'>
          <h2>Purchase Price:{product.purchasePrice}</h2>
          <div>
          <h2>Sell Price:{product.sellPrice}</h2>
          <h1>Used: {product.usedYear} year</h1>
          <h4>Condition : {product.condition}</h4>
          </div>
          </div>
         
          <h3 className='text-xl '><span className='font-bold'>Seller Name </span>:{product.sellerName} {product?.verified ? <span className=' border rounded-full bg-green-700 text-white px-2'>verified</span>: <span className=' border rounded-full bg-green-700 text-white px-2'>unverified</span> }</h3>
          <p className='text-xl'><span className='font-bold'>Phone: </span> {product.phone}</p>
          <p className='text-xl'><span className='font-bold'>Location: </span> {product.location}</p>
          <p className='text-xl'><span className='font-bold'>Post Date: </span>{product.postTime}</p>
          <h2 className='text-xl mb-5'><span className='font-bold'>Description: </span> {product.description }</h2>
          <div className="card-actions justify-center">
          <label onClick={()=>setSingleProduct(product)} htmlFor="booking-modal" className="btn btn-primary w-96 text-2xl">BUY NOW</label>
        
          </div>
         </div>
        
        </div>
      </div>
    );
};

export default CategoryItemCard;