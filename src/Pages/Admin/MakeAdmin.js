import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const MakeAdmin = () => {
    const [user, loading] = useAuthState(auth);


    const { isLoading, data, refetch } = useQuery(['admin'], () =>
        fetch(`https://lit-mountain-23720.herokuapp.com/user/allUser/${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        }).then(res =>
            res.json()
        )
    );
    const handelMakeAdmin = (email) => {
        fetch(`https://lit-mountain-23720.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast('Successfully Make Admin');
                    refetch();

                }
            })
    }

    if (loading || isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='container mx-auto my-10'>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data?.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.UserName}</td>
                                    <td>{user?.email}</td>
                                    {
                                        user?.role === 'admin' ? <td><button className='text-orange-500'>Admin</button></td> : <td><button onClick={() => handelMakeAdmin(user.email)} className='btn btn-sm'>Make Admin</button></td>
                                    }
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;