import React from 'react';

const Summary = () => {
    return (
        <div className='container mx-auto my-10 flex justify-center'>
            <div className="stats  md:grid grid-cols-3 w-full">

                <div className="stat place-items-center">
                    <i className="text-3xl text-[#FB4010] fa-solid fa-users"></i>
                    <div className="stat-value text-secondary">3000+</div>
                    <div className="stat-desc">Customers</div>
                </div>

                <div className="stat place-items-center">
                    <i className="text-3xl text-[#FB4010] fa-solid fa-filter-circle-dollar"></i>
                    <div className="stat-value text-secondary">120M+</div>
                    <div className="stat-desc text-secondary">Annual revenue</div>
                </div>

                <div className="stat place-items-center">
                    <i className=" text-3xl text-[#FB4010] fa-solid fa-screwdriver-wrench"></i>
                    <div className="stat-value text-secondary">50+ </div>
                    <div className="stat-desc">Tools</div>
                </div>


            </div>
        </div>
    );
};

export default Summary;