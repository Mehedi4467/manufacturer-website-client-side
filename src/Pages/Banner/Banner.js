import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=612x612&w=0&h=WOtAthbmJ9iG1zbKo4kNUsAGMe6-xM-E7a8TMxb5xmk=)` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">All car accessories</h1>
                    <p className="mb-5">Are you looking for all car accessories? Then you will get all the car accessories from us which are made in our own factory. At affordable prices.</p>
                    <button className="btn bg-[#FB4010]">Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;