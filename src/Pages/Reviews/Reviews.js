import Carousel from 'nuka-carousel';
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';


const Reviews = () => {

    const { isLoading, data } = useQuery('review', () =>
        fetch('https://lit-mountain-23720.herokuapp.com/review').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-3xl text-center pt-10 font-bold text-slate-400'>Customer Reviews</h2>

            <div className='mt-10'>
                <Carousel
                    wrapAround={true}
                    slidesToShow={3}

                    renderCenterLeftControls={({ previousSlide }) => (
                        <button onClick={previousSlide}><i className="hover:bg-[#FB4010] bg-slate-300 hover:text-white p-4 rounded-full fa-solid fa-arrow-left"></i></button>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <button onClick={nextSlide}><i className="hover:bg-[#FB4010] bg-slate-300 hover:text-white p-4 rounded-full fa-solid fa-arrow-right"></i></button>
                    )}

                    defaultControlsConfig={{

                        pagingDotsStyle: {
                            fill: 'red',
                            marginLeft: '1px'
                        }
                    }}
                >

                    {
                        data?.map(reviewData => <div key={reviewData._id}>
                            <h2 className="text-xl text-center mb-2 text-orange-500">{reviewData.name} </h2>
                            <p className='text-slate-500 px-4'>{reviewData.review}</p>
                            <div className="rating flex justify-center pt-2 pb-10">

                                {
                                    [...Array(parseInt(reviewData.rating))].map(rating => <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />)
                                }

                            </div>
                        </div>)
                    }

                </Carousel>
            </div>
        </div>
    );
};

export default Reviews;