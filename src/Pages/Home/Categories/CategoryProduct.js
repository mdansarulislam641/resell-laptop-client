import React, { useEffect, useState } from 'react';
import { useNavigation } from "react-router-dom";
import {  Link, useLoaderData } from 'react-router-dom';
import Loading from '../../../Components/Loading';
import BookingModal from '../../../Shared/BookingModal/BookingModal';
import CategoryItemCard from '../../../Shared/CategoryItemCard';

const CategoryProduct = () => {
    const data = useLoaderData();
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState(null);
    const navigation = useNavigation()
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${data?.category_name}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[data.category_name])
    
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    console.log(products)
    return (
        <div className='bg-gray-100 py-20'>
            <h1 className='text-3xl pb-10  md:text-5xl font-extrabold font-mono text-center capitalize '> {data?.category_name} products</h1>
            <div className='container grid grid-cols-1 md:grid-cols-2  gap-5 '>
                {
                    products && products?.map(product =>
                    <CategoryItemCard
                    key={product._id}
                    product ={product}
                    setSingleProduct={setSingleProduct}
                    ></CategoryItemCard>
                  
                   )
                }
              
            </div>
           {singleProduct && <BookingModal 
            singleProduct={singleProduct}
            setSingleProduct={setSingleProduct}
            ></BookingModal>}
        </div>
    );
};

export default CategoryProduct;