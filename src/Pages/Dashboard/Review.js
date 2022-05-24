import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
const Review = () => {
    const [user, loading] = useAuthState(auth);

    const handelReview = (event) => {
        event.preventDefault();
        const rating = event.target.rating.value;
        const review = event.target.review.value;
        const name = user?.displayName;
        const email = user?.email;
        const Review = {
            rating, review, name, email
        }

        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Review)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast("You have successfully reviewed");
                    event.target.reset();
                }
            })
    }


    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='my-20'>
            <h2 className='text-xl text-orange-500 text-center font-bold mb-4'>Reviews</h2>
            <form onSubmit={handelReview} className='w-1/2 mx-auto'>
                <div className='mb-4'>
                    <input type="number" name="rating" max='5' min='1' placeholder="Your Rating 1 - 5" className="input input-bordered input-warning w-full  " required />
                </div>
                <div>
                    <textarea name='review' className="textarea textarea-warning w-full" placeholder="Your review" required></textarea>
                </div>
                <div>
                    <button type="submit" className='btn bg-orange-500 w-full'>Review</button>
                </div>
            </form>
        </div>
    );
};

export default Review;