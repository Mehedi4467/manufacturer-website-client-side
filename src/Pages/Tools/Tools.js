import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import Tool from './Tool';

const Tools = () => {


    const { isLoading, data } = useQuery('productData', () =>
        fetch('http://localhost:5000/product').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='container mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    data.slice(0, 6).map(product => <Tool key={product._id} product={product}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;