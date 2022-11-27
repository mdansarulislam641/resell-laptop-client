import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import Loading from '../../../Components/Loading';
import WishListCard from './WishListCard';

const WishList = () => {
    const {data:wishListItem=[], isLoading} = useQuery({
        queryKey:['wishlist'],
        queryFn:async () =>{
            const res = await fetch('http://localhost:5000/wishlist')
            const data = await res.json()
            return data ;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }

    return (
      <section className='py-20'>
        <h1 className='text-4xl mb-10 font-extrabold font-mono text-center'>Your WishList Product</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           { wishListItem.length > 0 &&
            wishListItem.map(wishlist=><WishListCard
            key={wishlist._id}
            wishlist= {wishlist}
            ></WishListCard>)
           }
        </div>
      </section>
    );
};

export default WishList;