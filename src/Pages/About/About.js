import React from 'react';
import img1 from '../../assets/Team Member image/Golam Rahman Sagor.jpg';
import img2 from '../../assets/Team Member image/Nusrat Jahan.jpg';
import img3 from '../../assets/Team Member image/Sharmin.png';
import img4 from '../../assets/Team Member image/Md Shimul Molla.jpg';
import img5 from '../../assets/Team Member image/Md Anis Molla.jpg';
import img6 from '../../assets/Team Member image/Md Mahmudul Hasan.png';
import pdf1 from './Resume/Golam Rahman Sagor - Resume.pdf';
import pdf2 from './Resume/Nusrat-Jahan.pdf';
import pdf3 from './Resume/Sharmin-s Resume.pdf';
import pdf4 from './Resume/Md Shimul Molla Resume.pdf';
import pdf5 from './Resume/Md Anis Molla.pdf';
import pdf6 from './Resume/Md  Mahmudul Hasan.pdf';
import { Link } from 'react-router-dom';



const About = () => {
    return (
        <div className='text-center flex flex-col items-center my-4'>
            <h1 className='font-bold text-4xl p-2 mb-4'>Meet Our Team_ </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-8'>

                {/* About Golam Rahman Sagor */}
                <div className='card w-full h-100 text-center hover:bg-base-300 shadow-2xl'>
                    <figure className='w-80 h-80'>
                        <img src={img1} alt="" />
                    </figure>
                    <div className='m-2'>
                        <h2 className='text-2xl font-semibold'>Golam Rahman Sagor</h2>
                        <p className='text-xl'>Leader</p>
                        <div className="card-action m-2">
                            {/* <button className="btn btn-outline btn-secondary"><a href={pdf1} download={"Golam Rahman Sagor"}>Get Resume</a></button> */}
                            <button className="btn btn-outline btn-secondary"><Link to='/'>Visit</Link></button>

                        </div>
                    </div>
                </div>

                {/* About Nusrat Jahan */}
                <div className='card w-full h-100 text-center hover:bg-base-300 shadow-2xl'>
                    <figure className='w-80 h-80'>
                        <img src={img2} alt="" />
                    </figure>
                    <div className='m-2'>
                        <h2 className='text-2xl font-semibold'>Nusrat Jahan</h2>
                        <p className='text-xl'>Member</p>
                        <div className="card-action m-2">
                            {/* <button className="btn btn-outline btn-secondary"><a href={pdf2} download={'Nusrat Jahan'}>Get Resume</a></button> */}
                            <button className="btn btn-outline btn-secondary"><Link to='/'>Visit</Link></button>

                        </div>
                    </div>
                </div>

                {/* About Sharmin Akter */}
                <div className='card w-full h-100 text-center hover:bg-base-300 shadow-2xl'>
                    <figure className='w-80 h-80 pt-12'>
                        <img src={img3} alt="" />
                    </figure>
                    <div className='m-2'>
                        <h2 className='text-2xl font-semibold'>Sharmin Akter</h2>
                        <p className='text-xl'>Member</p>
                        <div className="card-action m-2">
                            {/* <button className="btn btn-outline btn-secondary"><a href={pdf3} download={"sharmin Akter"}>Get Resume</a></button> */}
                            <button className="btn btn-outline btn-secondary"><Link to='/sharminDetails'>Visit</Link></button>

                        </div>
                    </div>
                </div>

                {/* About Md Shimul Molla */}
                <div className='card w-full h-100 text-center hover:bg-base-300 shadow-2xl'>
                    <figure className='w-80 h-80 pt-20'>
                        <img src={img4} alt="" />
                    </figure>
                    <div className='m-2'>
                        <h2 className='text-2xl font-semibold'>Md Shimul Molla</h2>
                        <p className='text-xl'>Member</p>
                        <div className="card-action m-2">
                            {/* <button className="btn btn-outline btn-secondary"><a href={pdf4} download={"Md Shimul Molla"}>Get Resume</a></button> */}
                            <button className="btn btn-outline btn-secondary"><Link to='/'>Visit</Link></button>

                        </div>
                    </div>
                </div>

                {/* About Md Anis Molla */}
                <div className='card w-full h-100 text-center hover:bg-base-300 shadow-2xl'>
                    <figure className='w-80 h-80'>
                        <img src={img5} alt="" />
                    </figure>
                    <div className='m-2'>
                        <h2 className='text-2xl font-semibold'>Md Anis Molla</h2>
                        <p className='text-xl'>Member</p>
                        <div className="card-action m-2">
                            {/* <button className="btn btn-outline btn-secondary"><a href={pdf5} download={"Md Anis Molla"}>Get Resume</a></button> */}
                            <button className="btn btn-outline btn-secondary"><Link to='/'>Visit</Link></button>

                        </div>
                    </div>
                </div>

                {/* About Ft Sobuj Hasan */}
                <div className='card w-full h-100 text-center hover:bg-base-300 shadow-2xl'>
                    <figure className='w-80 h-80'>
                        <img src={img6} alt="Shoes" />
                    </figure>
                    <div className='m-2'>
                        <h2 className='text-2xl font-semibold'>Md Mahmudul Hasan</h2>
                        <p className='text-xl'>Member</p>
                        <div className="card-action m-2">
                            {/* <button className="btn btn-outline btn-secondary"><a href={pdf6} download={'Md Mahmudul Hasan'}>Get Resume</a></button> */}
                            <button className="btn btn-outline btn-secondary"><Link to='/'>Visit</Link></button>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;