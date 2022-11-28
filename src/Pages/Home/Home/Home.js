import React from 'react';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Categories from '../Categories/Categories';
import HeroArea from '../HeroArea/HeroArea';
import JoinUs from '../JoinUs/JoinUs';

const Home = () => {
    return (
        <div>
           <HeroArea/>
           <Categories></Categories>
           <AdvertiseProduct></AdvertiseProduct>
           <JoinUs></JoinUs>
        </div>
    );
};

export default Home;