import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({data}) => {
  console.log(data)
  const {sellerEmail, sellPrice, _id} = data ;
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('')
    const [transitionId, setTransitionId] = useState('')
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

          const {paymentIntent, error:clientError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email:  sellerEmail 
                  ,
                },
              },
            },
          );
          if(clientError){
            setCardError(clientError.message)
            return
          }
          if(paymentIntent.status === "succeeded"){
            fetch(`http://localhost:5000/booking-product/${_id}`,{
              method:"PUT",

            })
            .then(res=>res.json())
            .then(data=>{
              if(data.acknowledged){
                fetch(`http://localhost:5000/product-get-payment/${_id}`,{
                  method:"DELETE"
                })
                .then(res=>res.json())
                .then(data =>{
                  console.log(data)
                  setSuccess('Congratulation Payment successful');
                  setTransitionId(paymentIntent.id)
                  console.log("payment successfully",paymentIntent)
                })
              }
            })
        
          }
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
    {
      success && <div className='text-green-600'>
        <p>{success}</p>
        <p>Your Transition id: {transitionId}</p>

      </div>
    }
        
        </>
    );
};

export default CheckOutForm;