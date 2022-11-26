import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({advertiseProduct}) => {
    const {image,productName,condition,sellPrice,usedYear, sellerName,_id
    } = advertiseProduct;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img className='h-[200px]' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name : {productName}</h2>
    <h2 className='text-xl'>Condition : {condition}</h2>
    <h2 className='text-xl'>Price : {sellPrice
}</h2>
    <h2 className='text-xl'>Used : {usedYear
} Years</h2>
    <h2 className='text-xl'>Seller Name : {sellerName
}</h2>
    <div className="card-actions justify-end">
      <Link to={`/advertise-product/${_id}`}><button className="btn btn-primary">Show More Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default AdvertiseCard;