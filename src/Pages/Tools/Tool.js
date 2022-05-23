import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ product }) => {

    const { name, image, _id, description } = product;
    const navigate = useNavigate();
    const handelPurchase = (id) => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className='flex justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <div class="card-actions justify-end">
                        <button onClick={() => handelPurchase(_id)} class="btn bg-[#FB4010]">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;