import React from 'react';
import { Link } from 'react-router-dom';

const HeroArea = () => {
    return (
        <div className="hero min-h-[70vh]" style={{ backgroundImage: `url("https://i.ibb.co/hY8yHpf/pexels-photo-5632381.jpg")`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">WELCOME TO OUR RESELL SHOP</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to='/home'><button className="btn btn-primary">Get Started</button></Link>
            
          </div>
        </div>
      </div>
    );
};

export default HeroArea;