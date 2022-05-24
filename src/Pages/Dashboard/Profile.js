import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const Profile = () => {
    const [user, loading] = useAuthState(auth);
    const { isLoading, data } = useQuery('user', () =>
        fetch(`http://localhost:5000/user/${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        }).then(res =>
            res.json()
        )
    );

    console.log(data);

    if (loading || isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='container mx-auto flex justify-center items-center my-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-orange-600 mx-auto">{user.displayName}</h2>
                    <p className='text-center'>{data.email}</p>
                    <div className='justify-start'>
                        <p className=''>Education: {data?.education}</p>
                        <p className=''>Location : {data?.location}</p>
                        <p className=''>Phone: {data?.phone}</p>
                        <a href={data.linkdin} target='blank'><i className="hover:bg-orange-600 rounded-full p-2 hover:text-white fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to='update' className="btn bg-orange-600">Update Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;