import React from 'react';

const SocialLogin = ({ signInWithGoogle }) => {
    return (
        <div className="w-full">
            <button
                onClick={() => signInWithGoogle()}
                className="btn w-full bg-[#F47140] rounded-full mb-4  capitalize"
            >
                <div className="flex">
                    <i className="fa-brands fa-google"></i>
                    <p className="ml-2">Login With Google</p>
                </div>
            </button>

        </div>
    );
};

export default SocialLogin;