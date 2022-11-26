import React from 'react';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Categories from '../Categories/Categories';
import HeroArea from '../HeroArea/HeroArea';

const Home = () => {
    return (
        <div>
           <HeroArea/>
           <Categories></Categories>
           <AdvertiseProduct></AdvertiseProduct>
        </div>
    );
};

export default Home;