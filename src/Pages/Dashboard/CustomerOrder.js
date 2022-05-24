import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
import OrderModal from './OrderModal';
import SingleOrder from './SingleOrder';

const CustomerOrder = () => {
    const [openModal, setOpenModal] = useState(null);
    const [user, loading] = useAuthState(auth);

    const { isLoading, data, refetch } = useQuery(['order'], () =>
        fetch(`http://localhost:5000/order/${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {

            return res.json();
        }
        )
    );

    if (isLoading || loading) {
        return <Spinner></Spinner>
    }



    return (
        <div className='h-screen'>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Total Price</th>
                            <th>Quantity</th>
                            <th>Payment Status</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((order, index) => <SingleOrder index={index} key={order._id} order={order} setOpenModal={setOpenModal} ></SingleOrder>)
                        }

                    </tbody>
                </table>
                {
                    openModal && <OrderModal refetch={refetch} setOpenModal={setOpenModal} openModal={openModal} ></OrderModal>
                }
            </div>
        </div>
    );
};

export default CustomerOrder;