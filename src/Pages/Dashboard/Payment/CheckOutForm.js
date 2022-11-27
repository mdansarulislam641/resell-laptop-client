import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({data}) => {
  console.log(data)
  const {sellerEmail, sellPrice} = data ;
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({sellPrice}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [sellPrice]);

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (!stripe || !elements) {
            return;
          }

          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
          })

          if(error){
            console.log(error.message)
            setCardError(error.message)
          }
          else{
            console.log("this is payment method",paymentMethod)
            setCardError('')
          }

          stripe.confirmCardPayment(
            clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                email : data.sellerEmail,
              },
            },
          })
          .then(function(result) {
            // Handle result.error or result.paymentIntent
          });
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary mt-10' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    <p className='text-red-700'>{cardError}</p>
        
        </>
    );
};

export default CheckOutForm;