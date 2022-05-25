import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import ManageProductModal from './ManageProductModal';

const ManageProduct = () => {
    const [openModal, setOpenModal] = useState(null);

    const { isLoading, data, refetch } = useQuery(['product'], () =>
        fetch(`http://localhost:5000/product`, {
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
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th> Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data?.map((product, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price}$</td>
                                    <td> <label htmlFor="product-delete-modal" ><i onClick={() => setOpenModal(product)} className="hover:bg-orange-500 cursor-pointer hover:text-white rounded-full p-2 far fa-trash-alt"></i></label></td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
            {
                openModal && <ManageProductModal setOpenModal={setOpenModal} openModal={openModal} refetch={refetch}></ManageProductModal>
            }
        </div>
    );
};

export default ManageProduct;