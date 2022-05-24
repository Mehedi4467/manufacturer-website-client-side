import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProducts from '../../Hooks/useProducts';
import Spinner from '../Spinner/Spinner';

const Purchase = () => {

    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const [products] = useProducts(id);
    const { name, description, image, price, minQuantity, quantity } = products;
    const [quantityLimite, setQuantityLimite] = useState('true')

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

    return (
        <div>
            <div class="hero  my-4 bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={image} width="400" alt={name} />

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <h1 class="text-3xl text-center text-[#FB4010] font-bold">{name}</h1>
                            <p class="py-6 px-4 text-slate-500">{description}</p>
                            <div className='shadow-lg text-center px-6 py-4 rounded-full'>
                                <p className='text-[#FB4010] font-bold'>Available quantity: {quantity}</p>
                                <p className='text-[#FB4010] font-bold'>Minimum order quantity: {minQuantity}</p>

                                <p className='text-[#FB4010] font-bold'>Price (per unit price): {price}</p>
                            </div>
                            <div className='mt-4'>
                                <label class="label">
                                    <span class="label-text text-orange-600 font-bold">Product Quantity</span>

                                </label>
                                <input onChange={(e) => handelQuantity(e.target.value)} type="number" max={quantity} min={minQuantity} name='address' defaultValue={minQuantity} class="input input-bordered input-warning w-full mb-4" required />
                            </div>
                        </div>
                        <form>
                            <div>
                                <h1 class="text-3xl text-center text-[#FB4010] font-bold mb-6">User Information</h1>

                                <div>
                                    <input type="text" defaultValue={user.displayName} placeholder="Name" class="input input-bordered input-warning w-full mb-4 " readOnly />
                                    <input type="text" defaultValue={user.email} placeholder="Name" class="input input-bordered input-warning w-full mb-4 " readOnly />
                                    <input type="text" name='phone' placeholder="Your Phone Number" class="input input-bordered input-warning w-full mb-4" required />
                                    <input type="text" name='address' placeholder="Your Address" class="input input-bordered input-warning w-full mb-4" required />
                                </div>
                                <button class="btn bg-[#FB4010] w-full" disabled={!quantityLimite}>Place Order</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Purchase;