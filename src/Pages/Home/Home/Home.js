import React from 'react';
import { useContext } from 'react';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Categories from '../Categories/Categories';
import HeroArea from '../HeroArea/HeroArea';
import JoinUs from '../JoinUs/JoinUs';

const Home = () => {
    const {loading} = useContext(AuthContext)
    return (
        <div>
           { loading ? <Loading></Loading> :
          <>
              <HeroArea/>
            <Categories></Categories>
            <AdvertiseProduct></AdvertiseProduct>
            <JoinUs></JoinUs>
          </>
           }
        </div>
    );
};

export default Home;