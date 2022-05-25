import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';

const ManageOrder = () => {

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

    console.log(data)
    if (isLoading) {
        return <Spinner></Spinner>
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
                                    <td>Paid</td>
                                    <td>
                                        <select className="select select-bordered w-full max-w-xs">
                                            <option disabled selected>Who shot first?</option>
                                            <option>Han Solo</option>
                                            <option>Greedo</option>
                                        </select>

                                    </td>
                                </tr>


                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;