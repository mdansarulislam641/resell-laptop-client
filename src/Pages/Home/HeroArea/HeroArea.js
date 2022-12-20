import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../assets/bannerImage.jpg';
const HeroArea = () => {
    return (
        <div className="hero min-h-[70vh] relative" style={{ backgroundImage: `url(${bannerImage})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
        <div className="hero-overlay  bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">WELCOME TO OUR RESELL SHOP</h1>
            <p className="mb-5">Stay with us to sell your old laptop. We give special priority to service delivery</p>
            <Link to='/home'><button className="btn btn-primary">Get Started</button></Link>
            
          </div>
        </div>
      </div>
    );
};

export default HeroArea;