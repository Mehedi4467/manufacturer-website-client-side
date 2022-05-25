import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
import OrderModal from './OrderModal';
import SingleOrder from './SingleOrder';

const CustomerOrder = () => {
    const [openModal, setOpenModal] = useState(null);
    const [user, loading] = useAuthState(auth);
    const [orders, setData] = useState([]);

    // const { isLoading, data, refetch } = useQuery('order', () =>
    //     fetch(`http://localhost:5000/customer-order/${user?.email}`, {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     }).then(res => {

    //         return res.json();
    //     }
    //     )
    // );

    useEffect(() => {
        if (user.email) {
            fetch(`http://localhost:5000/customer-order/${user?.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(result => {
                    setData(result);
                })
        }
    }, [user])



    if (loading) {
        return <Spinner></Spinner>
    }



    return (
        <div className='h-screen container mx-auto'>
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
                            orders?.map((order, index) => <SingleOrder index={index} key={order._id} order={order} setOpenModal={setOpenModal} ></SingleOrder>)
                        }

                    </tbody>
                </table>
                {
                    openModal && <OrderModal setOpenModal={setOpenModal} openModal={openModal} ></OrderModal>
                }
            </div>
        </div>
    );
};

export default CustomerOrder;