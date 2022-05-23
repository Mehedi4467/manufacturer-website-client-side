import Carousel from 'nuka-carousel';
import React from 'react';


const Reviews = () => {
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

                    <div>
                        <h2 className="text-xl text-center mb-2 text-orange-500">Md.Mehedi Hassan</h2>
                        <p className='text-slate-500 px-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        <div className="rating flex justify-center pt-2 pb-10">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl text-center mb-2 text-orange-500">Md.Mehedi Hassan</h2>
                        <p className='text-slate-500 px-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        <div className="rating flex justify-center pt-2 pb-10">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl text-center mb-2 text-orange-500">Md.Mehedi Hassan</h2>
                        <p className='text-slate-500 px-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        <div className="rating flex justify-center pt-2 pb-10">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl text-center mb-2 text-orange-500">Md.Mehedi Hassan</h2>
                        <p className='text-slate-500 px-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        <div className="rating flex justify-center pt-2 pb-10">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Reviews;