
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../Spinner/Spinner';

const CheckoutForm = ({ data, refetch }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [carError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate()
    const { orderPrice, email, customerName, _id } = data;
    const price = parseInt(orderPrice);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError('');
            setProcessing(true);
        }




        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {

            setCardError('');
            setTransactionId(paymentIntent.id);

            const payment = {
                transactionId: paymentIntent.id,

            }
            fetch(`http://localhost:5000/order/update/${_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            }).then(res => res.json()).then(data => {
                toast(`Your Payment is Complated. Your Transaction Id is : ${transactionId}`);
                setProcessing(false);
                navigate('/dashboard/orders');
                refetch();
            })
        }
    };


    if (processing) {
        return <Spinner></Spinner>
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
                <button type="submit" className='btn bg-orange-500 text-white mt-6 btn-sm' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>

            <div>
                {
                    carError && <p className='text-red-500'>{carError}</p>
                }
            </div>


        </>
    );
};

export default CheckoutForm;