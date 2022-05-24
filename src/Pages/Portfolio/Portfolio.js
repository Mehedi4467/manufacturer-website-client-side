import React from 'react';
import mehedi from '../../Images/other/mehedi.jpg';
const Portfolio = () => {
    return (
        <div className='conatiner mx-auto w-3/4 min-h-screen mt-20'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w-200 h-280 p-4'><img className='rounded-full p-4 shadow-lg' src={mehedi} alt="Md.Mehedi Hassan" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-orange-500">Md.Mehedi Hassan</h2>
                    <p className='pb-0 mb-0'>mehedihassan4467@gmail.com</p>
                    <p className='p-0 m-0'>Studying Bachelor of Science in Computer Science at Daffodil International University</p>
                    <p><b>Skills: </b> HTML,CSS,Boostrap,Tailwind, JavaScript,Node js,React,Mongodb,firebase,Express</p>
                    <div className='mt-4'>
                        <h2 className='text-orange-600 font-bold'>Best Three Project</h2>
                    </div>
                    <div className="card-actions justify-center">

                        <a href="https://todo-app-63fad.web.app/login" target='blank' className="btn btn-primary">Todo App</a>
                        <a href="https://gym-zone-82f25.web.app/" target='blank' className="btn btn-primary">Gym Zone</a>
                        <a href="https://electronic-store-b6fef.web.app/" target='blank' className="btn btn-primary">Electronic Store</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;