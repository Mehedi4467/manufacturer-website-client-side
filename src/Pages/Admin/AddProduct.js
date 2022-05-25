import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handelAddProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const quantity = event.target.quantity.value;
        const minQuantity = event.target.minQuantity.value;
        const price = event.target.price.value;

        const product = {
            name, image, description, quantity, minQuantity, price
        };
        fetch('http://localhost:5000/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast('Successfully Added product');
                    event.target.reset();
                }
            })
    }
    return (
        <div className='container mx-auto my-16'>
            <div class="card w-2/4 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title justify-center text-orange-600">Add Product</h2>
                    <form onSubmit={handelAddProduct}>
                        <div>
                            <input type="text" placeholder="Product Name" name='name' class="input input-bordered input-warning w-full mb-2" required />
                        </div>
                        <div>
                            <input type="text" placeholder="Product image Url" name='image' class="input input-bordered input-warning w-full mb-2" required />
                        </div>
                        <div>
                            <input type="text" placeholder="Product Description" name='description' class="input input-bordered input-warning w-full mb-2" required />
                        </div>
                        <div>
                            <input type="number" placeholder="Product Quantity" name='quantity' class="input input-bordered input-warning w-full mb-2" required />
                        </div>
                        <div>
                            <input type="number" placeholder="Product Minimum Quantity" name='minQuantity' class="input input-bordered input-warning w-full mb-2" required />
                        </div>
                        <div>
                            <input type="text" placeholder="Product Price" name='price' class="input input-bordered input-warning w-full mb-2" required />
                        </div>


                        <div class="card-actions justify-end">
                            <button class="btn bg-orange-600">Add Product</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;