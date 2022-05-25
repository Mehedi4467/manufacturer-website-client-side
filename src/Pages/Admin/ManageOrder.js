import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../Spinner/Spinner';
import ManageOrderDeleteModal from './ManageOrderDeleteModal';

const ManageOrder = () => {
    const [openDeleteModal, setOpenDeleteModal] = useState(null);
    const { isLoading, data, refetch } = useQuery(['order'], () =>
        fetch(`http://localhost:5000/order`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        }).then(res =>
            res.json()
        )
    );


    if (isLoading) {
        return <Spinner></Spinner>
    }



    const handelOrderStatusChange = (id) => {
        fetch(`http://localhost:5000/order/status/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(result => {

                if (result.acknowledged) {
                    toast("Order is Approved");
                    refetch();
                }
            })
    }

    return (
        <div className='container mx-auto my-10'>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Total Price</th>
                            <th>Quantity</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            data?.map((order, index) =>

                                <tr key={order._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{order.productName}</td>
                                    <td>{order.CustomerName}</td>
                                    <td>{order.email}</td>
                                    <td>{order.orderPrice}$</td>
                                    <td>{order.orderQuentity}</td>
                                    <td>{order.paid ? 'Paid' : 'Unpaid'}</td>
                                    <td className='flex justify-between'>
                                        <p className='text-orange-500'> {order?.status}</p>
                                        {
                                            order.status === 'Approved' || <button onClick={() => handelOrderStatusChange(order._id)} className='btn btn-sm'>approved</button>
                                        }

                                    </td>

                                    <td>

                                        {
                                            order.paid || <label onClick={() => setOpenDeleteModal(order)} for="manage-order-delete" class="btn btn-sm">Cencel</label>

                                        }

                                    </td>
                                </tr>


                            )
                        }


                    </tbody>
                </table>
            </div>
            {
                openDeleteModal && <ManageOrderDeleteModal setOpenDeleteModal={setOpenDeleteModal} refetch={refetch} openDeleteModal={openDeleteModal} ></ManageOrderDeleteModal>
            }
        </div >
    );
};

export default ManageOrder;