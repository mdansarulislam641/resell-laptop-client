import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Components/Loading';
import AdvertiseCard from './AdvertiseCard';

const AdvertiseProduct = () => {
    const {data:advertiseProduct=[], isLoading} = useQuery({
        queryKey:[],
        queryFn:async()=>{
            const res =await fetch('http://localhost:5000/advertise-product')
            const data = await res.json()
            return data ;
            
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
    <>
    
    { advertiseProduct.length > 0 &&
           <section className='my-20'>
           <h2 className='text-2xl md:text-4xl font-extrabold font-mono text-center mb-20'>Advertise Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  container'>
               {
                   advertiseProduct.map(item => <AdvertiseCard
                   key={item._id}
                   advertiseProduct ={item}
                   ></AdvertiseCard>)
               }
               {
                   advertiseProduct.length > 0 ?  '':''
               }
           </div>
          </section>
    }
    </>
    );
};

export default AdvertiseProduct;