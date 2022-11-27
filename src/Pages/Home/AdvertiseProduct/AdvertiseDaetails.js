import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../../../Shared/BookingModal/BookingModal';
import CategoryItemCard from '../../../Shared/CategoryItemCard';

const AdvertiseDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [singleProduct,setSingleProduct] = useState(null);
    console.log(singleProduct)
    useEffect(()=>{
        fetch(`http://localhost:5000/advertise-product/${id}`)
        .then(res=>res.json())
        .then(data =>setProduct(data))
    },[id])


    return (
    <section className='bg-gray-100'>
      
            <div className='max-w-[700px] mx-auto  py-20 '>
            <h1 className='text-4xl font-extrabold font-mono text-center pb-5'>{product.productName}</h1>
          <CategoryItemCard
          product={product}
          setSingleProduct={setSingleProduct}
          ></CategoryItemCard>

         { singleProduct &&
             <BookingModal
             singleProduct={singleProduct}
             setSingleProduct={setSingleProduct}
             ></BookingModal>
         }
        </div>
    </section>
    );
};

export default AdvertiseDetails;