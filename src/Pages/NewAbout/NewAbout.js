
import React from 'react';
import img from '../../assets/About us-img/story2.png';
import serviceimg from '../../assets/About us-img/service.jpg';
import visionimg from '../../assets/About us-img/vision.png';
import missionimg from '../../assets/About us-img/mission.png';
import '../../CommonStyles/CommonStyle.css';
import About from '../About/About';


const NewAboutSection = () => {
    return (
       <div>
         <div className='common-width py-5' >
            <div className='flex flex-col md:flex-row gap-5'>
                <div class="w-full md:w-4/5 lg:w-8/12">
                    <img className='w-full' src={img} alt=''></img>
                </div>
                <div class="lg:py-5">
                    <h3 className='text-2xl font-semibold lg:pt-10 lg:py-3'>OUR STORY</h3>
                    <p className='text-gray-400'>Our story is simple but inspirational.In just one month, we went from nothing to successfully launching our first team project. Our determination and tireless efforts were instrumental in our achievements. You can trust us to consistently deliver our best and we're always available to assist you.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className=' hover:bg-base-200 rounded-md p-5 pb-8'>
                    <div className={`py-4 lg:pb-6`}>
                        <img src={missionimg} alt='' className='h-24 w-24'></img>
                    </div>
                    <div className='col-span-2'>
                        <h3 className='text-2xl font-semibold pb-3'>MISSIONS</h3>
                        <p className='text-gray-400'>
                            1.Provide seamless virtual communication solutions for businesses and individuals worldwide.<br />
                            2.Simplify and enhance remote communication and collaboration.<br />
                            3.Providing an exceptional web conferencing experience that integrates with the latest technology, delivering real-time engagement.<br />
                            4.Bring people together through the power of technology, bridging geographical boundaries.
                        </p>
                    </div>
                </div>
                <div className='hover:bg-base-200 rounded-md p-5 pb-8'>
                    <div className={`py-4 lg:pb-6`}>
                        <img src={serviceimg} alt='' className='h-20 w-20'></img>
                    </div>
                    <div>

                        <h3 className='text-2xl font-semibold pb-3'>SERVICES</h3>
                        <p className='text-gray-400'>
                            1.Video and audio conferencing.<br />
                            2.Screen sharing.<br />
                            3.Recording.<br />
                            4.Interactive features like chat, virtual hand raising, and polls.<br />
                            5.Collaboration tools ike whiteboarding.

                        </p>
                    </div>
                </div>
                <div className=' hover:bg-base-200 rounded-md p-5 pb-8'>
                    <div className={`py-4 lg:pb-6`}>
                        <img src={visionimg} alt='' className='h-20 w-20'></img>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold pb-3'>VISIONS</h3>
                        <p className='text-gray-400'>
                            1.Deliver the highest quality with a user-friendly interface, reliable technology and responsive customer support.<br />
                            2.Integrate with other tools like calendars, project management software, and email.<br />
                            3.Mobile compatibility.
                        </p>
                    </div>
                </div>

            </div>


        </div>
        <About></About>
       </div>
    );
};

export default NewAboutSection;