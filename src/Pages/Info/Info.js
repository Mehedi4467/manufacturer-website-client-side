import React from 'react';

const Info = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='text-center border-2 mb-4 md:mb-0 p-2 md:border-none md:p-0'>
                    <i className="text-3xl text-[#FB4010]  fa-solid fa-truck-fast"></i>
                    <p className="text-secondery mt-2 font-bold">FREE SHIPPING</p>
                    <p className='text-secondery'>Free shipping on</p>
                </div>
                <div className='text-center border-2 mb-4 md:mb-0 p-2 md:border-none md:p-0'>
                    <i className="text-3xl text-[#FB4010] fa-solid fa-percent"></i>
                    <p className="text-secondery mt-2 font-bold">BLACK SANDAY</p>
                    <p className='text-secondery'>Shocking discount</p>
                </div>
                <div className='text-center border-2 mb-4 md:mb-0 p-2 md:border-none md:p-0'>
                    <i className="text-3xl text-[#FB4010]  fa-solid fa-arrows-rotate"></i>
                    <p className="text-secondery mt-2 font-bold">FREE EXCHANGE</p>
                    <p className='text-secondery'>10 days return on</p>
                </div>
                <div className='text-center border-2 mb-4 md:mb-0 p-2 md:border-none md:p-0'>
                    <i className="text-3xl text-[#FB4010]  fa-solid fa-truck-medical"></i>
                    <p className="text-secondery mt-2 font-bold">PREMIUM SUPPORT</p>
                    <p className='text-secondery'>We support online</p>
                </div>
            </div>

        </div>
    );
};

export default Info;