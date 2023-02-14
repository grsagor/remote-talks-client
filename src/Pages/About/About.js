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
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";



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
                            <div className=''>
                                <button className=''><a href="https://github.com/grsagor" alt=''><FaGithub className='w-7 h-7 my-2 mx-3'></FaGithub></a></button>
                                <button className=''><a href="https://www.linkedin.com/in/golam-rahman-sagor-937450217/"><FaLinkedin className='w-7 h-7 my-2 mx-3'></FaLinkedin></a></button>
                                <button className=''><a href="https://www.facebook.com/grsagor.official"><FaFacebook className='w-7 h-7 my-2 mx-3'></FaFacebook></a></button>
                            </div>
                            <button className="btn btn-outline btn-secondary rounded-full"><a href={pdf1} download={"Golam Rahman Sagor"}>Get Resume</a></button>
                            {/* <button className="btn btn-outline btn-secondary"><Link to='/'>Visit</Link></button> */}

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
                            <div className=''>
                                <button className=''><a href="https://github.com/nusratnova5"><FaGithub className='w-7 h-7 my-2 mx-3'></FaGithub></a></button>
                                <button className=''><a href="https://www.linkedin.com/in/nusrat-jahan-19311025a/"><FaLinkedin className='w-7 h-7 my-2 mx-3'></FaLinkedin></a></button>
                                <button className=''><a href="https://www.facebook.com/nusrat.nova.9216"><FaFacebook className='w-7 h-7 my-2 mx-3'></FaFacebook></a></button>
                            </div>
                            <button className="btn btn-outline btn-secondary rounded-full"><a href={pdf2} download={'Nusrat Jahan'}>Get Resume</a></button>
                            {/* <button className="btn btn-outline btn-secondary"><Link to='/'>Visit</Link></button> */}

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
                            {/* <button className="btn btn-outline btn-secondary"><Link to='/sharminDetails'>Visit</Link></button> */}
                            <div className=''>
                                <button className=''><a href="https://github.com/SharminAkter3"><FaGithub className='w-7 h-7 my-2 mx-3'></FaGithub></a></button>
                                <button className=''><a href="https://www.linkedin.com/in/sharmin-akter-2b52a6244/"><FaLinkedin className='w-7 h-7 my-2 mx-3'></FaLinkedin></a></button>
                                <button className=''><a href="https://www.facebook.com/profile.php?id=100050369974905"><FaFacebook className='w-7 h-7 my-2 mx-3'></FaFacebook></a></button>
                            </div>
                            <button className="btn btn-outline btn-secondary rounded-full"><a href={pdf3} download={"sharmin Akter"}>Get Resume</a></button>

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
                            <div className=''>
                                <button className=''><a href="https://github.com/sultanmahmud07"><FaGithub className='w-7 h-7 my-2 mx-3'></FaGithub></a></button>
                                <button className=''><a href="https://www.linkedin.com/in/md-shimul-molla-03b8b2259/"><FaLinkedin className='w-7 h-7 my-2 mx-3'></FaLinkedin></a></button>
                                <button className=''><a href="https://www.facebook.com/mesultan.mahmud"><FaFacebook className='w-7 h-7 my-2 mx-3'></FaFacebook></a></button>
                            </div>
                            <button className="btn btn-outline btn-secondary rounded-full"><a href={pdf4} download={"Md Shimul Molla"}>Get Resume</a></button>
                            {/* <button className="btn btn-outline btn-secondary"><Link to='/'>Visit</Link></button> */}

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
                            <div className=''>
                                <button className=''><a href="https://github.com/anichu"><FaGithub className='w-7 h-7 my-2 mx-3'></FaGithub></a></button>
                                <button className=''><a href="https://www.linkedin.com/in/md-anis-molla-19515417b/"><FaLinkedin className='w-7 h-7 my-2 mx-3'></FaLinkedin></a></button>
                                <button className=''><a href="https://www.facebook.com/mdanis.molla.750983"><FaFacebook className='w-7 h-7 my-2 mx-3'></FaFacebook></a></button>
                            </div>
                            <button className="btn btn-outline btn-secondary rounded-full"><a href={pdf5} download={"Md Anis Molla"}>Get Resume</a></button>
                            {/* <button className="btn btn-outline btn-secondary"><Link to='/'>Visit</Link></button> */}

                        </div>
                    </div>
                </div>

                {/* About Md Mahmudul Hasan */}
                <div className='card w-full h-100 text-center hover:bg-base-300 shadow-2xl'>
                    <figure className='w-80 h-80'>
                        <img src={img6} alt="Shoes" />
                    </figure>
                    <div className='m-2'>
                        <h2 className='text-2xl font-semibold'>Md Mahmudul Hasan</h2>
                        <p className='text-xl'>Member</p>
                        <div className="card-action m-2">
                            <div className=''>
                                <button className=''><a href="https://github.com/mahmudul474"><FaGithub className='w-7 h-7 my-2 mx-3'></FaGithub></a></button>
                                <button className=''><a href="https://www.linkedin.com/in/mahmudul474/"><FaLinkedin className='w-7 h-7 my-2 mx-3'></FaLinkedin></a></button>
                                <button className=''><a href="https://www.facebook.com/devloperSobujHasan"><FaFacebook className='w-7 h-7 my-2 mx-3'></FaFacebook></a></button>
                            </div>
                            <button className="btn btn-outline btn-secondary rounded-full"><a href={pdf6} download={'Md Mahmudul Hasan'}>Get Resume</a></button>
                            {/* <button className="btn btn-outline btn-secondary"><Link to='/'>Visit</Link></button> */}

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;


// import React from 'react';
// import img from '../../assets/About us-img/story2.png';
// import serviceimg from '../../assets/About us-img/service.jpg';
// import visionimg from '../../assets/About us-img/vision.png';
// import missionimg from '../../assets/About us-img/mission.png';
// import '../../CommonStyles/CommonStyle.css';


// const About = () => {
//     return (
//         <div className='common-width py-5' >
//             <div className='flex flex-col md:flex-row gap-5'>
//                 <div class="w-full md:w-4/5 lg:w-8/12">
//                     <img className='w-full' src={img} alt=''></img>
//                 </div>
//                 <div class="lg:py-5">
//                     <h3 className='text-2xl font-semibold lg:pt-10 lg:py-3'>OUR STORY</h3>
//                     <p className='text-gray-400'>Our story is simple but inspirational.In just one month, we went from nothing to successfully launching our first team project. Our determination and tireless efforts were instrumental in our achievements. You can trust us to consistently deliver our best and we're always available to assist you.</p>
//                 </div>
//             </div>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
//                 <div className=' hover:bg-base-200 rounded-md p-5 pb-8'>
//                     <div className={`py-4 lg:pb-6`}>
//                         <img src={missionimg} alt='' className='h-24 w-24'></img>
//                     </div>
//                     <div className='col-span-2'>
//                         <h3 className='text-2xl font-semibold pb-3'>MISSIONS</h3>
//                         <p className='text-gray-400'>
//                             1.Provide seamless virtual communication solutions for businesses and individuals worldwide.<br />
//                             2.Simplify and enhance remote communication and collaboration.<br />
//                             3.Providing an exceptional web conferencing experience that integrates with the latest technology, delivering real-time engagement.<br />
//                             4.Bring people together through the power of technology, bridging geographical boundaries.
//                         </p>
//                     </div>
//                 </div>
//                 <div className='hover:bg-base-200 rounded-md p-5 pb-8'>
//                     <div className={`py-4 lg:pb-6`}>
//                         <img src={serviceimg} alt='' className='h-20 w-20'></img>
//                     </div>
//                     <div>

//                         <h3 className='text-2xl font-semibold pb-3'>SERVICES</h3>
//                         <p className='text-gray-400'>
//                             1.Video and audio conferencing.<br />
//                             2.Screen sharing.<br />
//                             3.Recording.<br />
//                             4.Interactive features like chat, virtual hand raising, and polls.<br />
//                             5.Collaboration tools ike whiteboarding.

//                         </p>
//                     </div>
//                 </div>
//                 <div className=' hover:bg-base-200 rounded-md p-5 pb-8'>
//                     <div className={`py-4 lg:pb-6`}>
//                         <img src={visionimg} alt='' className='h-20 w-20'></img>
//                     </div>
//                     <div>
//                         <h3 className='text-2xl font-semibold pb-3'>VISIONS</h3>
//                         <p className='text-gray-400'>
//                             1.Deliver the highest quality with a user-friendly interface, reliable technology and responsive customer support.<br />
//                             2.Integrate with other tools like calendars, project management software, and email.<br />
//                             3.Mobile compatibility.
//                         </p>
//                     </div>
//                 </div>

//             </div>


//         </div>
//     );
// };

// export default About;