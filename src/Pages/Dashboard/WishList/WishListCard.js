import React from 'react';
import { Link } from 'react-router-dom';

const WishListCard = ({wishlist}) => {
    console.log(wishlist)
    const {image, condition, productName,usedYear, wishList_id,sellPrice,_id} = wishlist;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img className='w-full h-[300px]' src={image} alt="laptop" /></figure>
  <div className="card-body">
    <h2 className="card-title">{productName}</h2>
    <p className='text-xl'>Price : {sellPrice}</p>
    <p className='text-xl'>used year : {usedYear}</p>
    <p className='text-xl'>Condition : {condition}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
    );
};

export default WishListCard;