import React from 'react';
import helper from '../../Images/other/helper.jpg';
import product from '../../Images/other/product.jpg';

const NewArrival = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-16 mb-10 container mx-auto items-center">
            <div className='flex justify-center md:justify-start'>
                <img src={helper} alt="" />
            </div>
            <div className='flex justify-center'>
                <div className='p-4'>
                    <h2 className='text-2xl text-slate-200 mb-2'>New Arrivals</h2>
                    <h2 className='text-4xl font-bold text-secondery'>GOOD HELP & GARD</h2>
                    <p className='text-lg text-slate-300 mb-4'>All New Sport Car All Car Accessories</p>
                    <button className='btn rounded-full bg-[#FB5227] '>Shop Now</button>
                </div>
            </div>
            <div className='flex justify-center md:justify-end'>
                <img src={product} alt="" />
            </div>

        </div>
    );
};

export default NewArrival;