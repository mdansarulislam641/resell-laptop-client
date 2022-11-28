import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const data = useLoaderData()
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    const {laptop_name,sellPrice,productName} = data ;
    console.log(data)
    
    return (
        <div>
            <h1 className='text-xl'>Payment FOR <strong>{laptop_name || productName}</strong> </h1>
            <h1 className='text-xl'>Payment Price <strong>${sellPrice}</strong> </h1>
           <div className='w-96 py-10 '>
           <Elements stripe={stripePromise}>
      <CheckOutForm 
      data = {data}
      />
    </Elements>
           </div>
        </div>
    );
};

export default Payment;