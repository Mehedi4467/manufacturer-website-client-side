import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProducts from '../../Hooks/useProducts';
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';

const Purchase = () => {

    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const [products] = useProducts(id);
    const navigate = useNavigate()
    const { name, description, image, price, minQuantity, quantity, _id } = products;
    const [quantityLimite, setQuantityLimite] = useState('true');


    if (loading) {
        return <Spinner></Spinner>
    }

    const handelQuantity = (value) => {

        if (value < minQuantity) {
            toast.error("You need to increase the quantity of your product");
            setQuantityLimite(false);
            return 0;
        }
        if (value > quantity) {
            toast.error("You need to reduce the quantity of your product");
            setQuantityLimite(false);
            return 0;
        }
        setQuantityLimite(true);
    }


    const handelOrder = (event) => {
        event.preventDefault();
        setQuantityLimite(false);
        const orderQuentity = event.target.quantity.value;
        const customerName = user?.displayName;
        const email = user?.email;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const productId = _id;
        const productName = name;
        const orderPrice = price;

        const customerOrder = {
            orderQuentity, customerName, email, phone, address, productId, productName, orderPrice, status: 'Pending',
        };


        fetch('https://lit-mountain-23720.herokuapp.com/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customerOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Your order has been successfully');
                    setQuantityLimite(true);
                    navigate('/dashboard/orders');
                }
            })


    }


    return (
        <div>
            <div className="hero  my-4 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} width="400" alt={name} />
                    <form onSubmit={handelOrder}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <h1 className="text-3xl text-center text-[#FB4010] font-bold">{name}</h1>
                                <p className="py-6 px-4 text-slate-500">{description}</p>
                                <div className='shadow-lg text-center px-6 py-4 rounded-full'>
                                    <p className='text-[#FB4010] font-bold'>Available quantity: {quantity}</p>
                                    <p className='text-[#FB4010] font-bold'>Minimum order quantity: {minQuantity}</p>

                                    <p className='text-[#FB4010] font-bold'>Price (per unit price): {price}</p>
                                </div>
                                <div className='mt-4'>
                                    <label className="label">
                                        <span className="label-text text-orange-600 font-bold">Product Quantity</span>

                                    </label>
                                    <input onChange={(e) => handelQuantity(e.target.value)} type="number" max={quantity} min={minQuantity} name='quantity' defaultValue={minQuantity} className="input input-bordered input-warning w-full mb-4" required />
                                </div>
                            </div>

                            <div>
                                <h1 className="text-3xl text-center text-[#FB4010] font-bold mb-6">User Information</h1>

                                <div>
                                    <input type="text" defaultValue={user.displayName} placeholder="Name" className="input input-bordered input-warning w-full mb-4 " readOnly />
                                    <input type="text" defaultValue={user.email} placeholder="Name" className="input input-bordered input-warning w-full mb-4 " readOnly />
                                    <input type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered input-warning w-full mb-4" required />
                                    <input type="text" name='address' placeholder="Your Address" className="input input-bordered input-warning w-full mb-4" required />
                                </div>
                                <button className="btn bg-[#FB4010] w-full" disabled={!quantityLimite}>Place Order</button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Purchase;