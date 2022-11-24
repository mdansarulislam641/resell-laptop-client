import React, { useEffect } from 'react';
import {  useParams } from 'react-router-dom';

const CategoryProduct = () => {
    // const data = useLoaderData();
    // console.log(data)
    const {id} = useParams()
    // console.log(id)
    useEffect(()=>{
        fetch(`/item.json`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[id])
    return (
        <div>
            <h1>this is category products</h1>
        </div>
    );
};

export default CategoryProduct;