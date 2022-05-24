import React from 'react';

const SingleOrder = ({ setOpenModal, order, index }) => {
    const totalPrice = parseInt(order?.orderPrice) * parseInt(order?.orderQuentity)
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.productName}</td>
            <td>{totalPrice}$</td>
            <td>{order.orderQuentity}</td>
            <td><button className='btn btn-sm bg-orange-500'>Pay Now</button></td>

            <td><label for="order-delete-modal"><i onClick={() => setOpenModal(order)} className="rounded-full p-2 hover:text-white cursor-pointer hover:bg-orange-400  far fa-trash-alt"></i></label></td>
        </tr>
    );
};

export default SingleOrder;