import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('productData.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);


    return (
        <div className='container mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    products.map(product => <Tool key={product._id} product={product}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;