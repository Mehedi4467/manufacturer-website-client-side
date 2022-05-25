import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const UpdateProfile = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const handelUpdateProfile = (event) => {
        event.preventDefault();
        const UserName = user?.displayName;
        const education = event.target.education.value;
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        const linkdin = event.target.linkdin.value;

        const updateUser = {
            UserName, education, location, phone, linkdin
        };

        fetch(`https://lit-mountain-23720.herokuapp.com/user/update/${user?.email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Successfully Update');
                    navigate('/dashboard');

                }
            })

    }


    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='container mx-auto flex justify-center items-center my-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handelUpdateProfile}>
                        <div className='mb-2'>
                            <input type="text" defaultValue={user?.displayName} className="input input-bordered input-warning w-full " readOnly />
                        </div>
                        <div className='mb-2'>
                            <input type="text" defaultValue={user?.email} className="input input-bordered input-warning w-full " readOnly />
                        </div>
                        <div className='mb-2'>
                            <input type="text" placeholder="Education" name='education' className="input input-bordered input-warning w-full " />
                        </div>
                        <div className='mb-2'>
                            <input type="text" placeholder="Location" name='location' className="input input-bordered input-warning w-full " />
                        </div>
                        <div className='mb-2'>
                            <input type="text" placeholder="Phone" name='phone' className="input input-bordered input-warning w-full " />
                        </div>
                        <div className='mb-2'>
                            <input type="text" placeholder="LinkedIn profile link" name='linkdin' className="input input-bordered input-warning w-full " />
                        </div>
                        <div className="card-actions justify-end">
                            <button type='submit' className="btn bg-orange-600">Update Now</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;