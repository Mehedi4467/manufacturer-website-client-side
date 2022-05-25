import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L39VQDNZeTFTfiGb7mCpLaJOwbuI4Aeift3I6BbEw7KCDUkHKJguhSjy3wXWKJmh9E1UxwVb6OnVUmLwu4pFT3s00NmHprtXM');
const Payment = () => {
    const { orderId } = useParams();

    const { isLoading, data, refetch } = useQuery(['order'], () =>
        fetch(`http://localhost:5000/order/${orderId}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {

            return res.json();
        }
        )
    );

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='container mx-auto my-10'>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Pay for {data.productName}</h2>
                    <p className='text-orange-500 font-bold'>Please Pay {data.orderPrice} $</p>

                </div>
            </div>

            <div className="card w-96 mx-auto bg-base-100 shadow-xl mt-10">
                <div className="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;