import React from 'react';

const About = () => {
    return (
        <div className='text-center flex flex-col items-center my-4'>
            <h1 className='font-bold text-4xl border-set p-2 mb-4'>Meet Our Team </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8'>
                <div className='card w-50 h-100 text-center hover:bg-base-300 px-5 py-10 shadow-2xl'>
                    <h2 className='text-2xl font-semibold'>Golam Rahman Sagor</h2>
                    <p className='text-xl'>Leader</p>
                </div>
                <div className='card w-50 h-100 text-center hover:bg-base-300 px-5 py-10 shadow-2xl'>
                    <h2 className='text-2xl font-semibold'>Nusrat Nova</h2>
                    <p className='text-xl'>Member</p>
                </div>
                <div className='card w-50 h-100 text-center hover:bg-base-300 px-5 py-10 shadow-2xl'>
                    <h2 className='text-2xl font-semibold'>Sharmin Akter</h2>
                    <p className='text-xl'>Member</p>
                </div>
                <div className='card w-50 h-100 text-center hover:bg-base-300 px-5 py-10 shadow-2xl'>
                    <h2 className='text-2xl font-semibold'>Md Shimul Molla</h2>
                    <p className='text-xl'>Member</p>
                </div>
                <div className='card w-50 h-100 text-center hover:bg-base-300 px-5 py-10 shadow-2xl'>
                    <h2 className='text-2xl font-semibold'>Md Anis Molla</h2>
                    <p className='text-xl'>Member</p>
                </div>
                <div className='card w-50 h-100 text-center hover:bg-base-300 px-5 py-10 shadow-2xl'>
                    <h2 className='text-2xl font-semibold'>Ft Sobuj Hasan</h2>
                    <p className='text-xl'>Member</p>
                </div>
            </div>

        </div>
    );
};

export default About;