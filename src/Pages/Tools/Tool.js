import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ product }) => {

    const { name, image, _id, description, minQuantity, quantity, price } = product;
    const navigate = useNavigate();
    const handelPurchase = (id) => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className='flex justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-[#FB4010]">{name}</h2>
                    <p className='text-slate-500'>{description}</p>
                    <div className='shadow-lg text-center px-6 py-4 rounded-full'>
                        <p className='text-[#e6846c] font-bold'>Available quantity: {quantity}</p>
                        <p className='text-[#e6846c] font-bold'>Minimum order quantity: {minQuantity}</p>

                        <p className='text-[#e6846c] font-bold'>Price (per unit price): {price}</p>
                    </div>
                    <div class="card-actions justify-end">
                        <button onClick={() => handelPurchase(_id)} class="btn bg-[#FB4010]">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;