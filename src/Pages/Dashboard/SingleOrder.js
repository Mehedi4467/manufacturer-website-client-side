import React from 'react';
import { Link } from 'react-router-dom';

const SingleOrder = ({ setOpenModal, order, index }) => {
    const totalPrice = parseInt(order?.orderPrice) * parseInt(order?.orderQuentity)
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.productName}</td>
            <td>{totalPrice}$</td>
            <td>{order.orderQuentity}</td>
            {
                (totalPrice && !order.paid) ? <td><Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm bg-orange-500'>Pay Now</button></Link></td> : <p className='text-orange-500'>Paid</p>

            }

            <td><label htmlFor="order-delete-modal"><i onClick={() => setOpenModal(order)} className="rounded-full p-2 hover:text-white cursor-pointer hover:bg-orange-400  far fa-trash-alt"></i></label></td>
        </tr>
    );
};

export default SingleOrder;