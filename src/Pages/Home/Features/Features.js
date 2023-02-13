import React from 'react';
import '../../../CommonStyles/CommonStyle.css';
import { FaHeadphones } from 'react-icons/fa';
import { MdOutlineScreenShare } from 'react-icons/md';
import { SiGooglemessages } from 'react-icons/si';
import { Link } from 'react-router-dom';
import FeatureCard from './FeatureCard/FeatureCard';

const Features = () => {
  const headphones = <FaHeadphones></FaHeadphones>;
  const screenShare = <MdOutlineScreenShare></MdOutlineScreenShare>;
  const Googlemessages = <SiGooglemessages></SiGooglemessages>;
  
  const cardData = [
    {
        id: 1,
        name: 'Audio and HD video calling',
        description: 'Remote Talks’s video-conferencing app can stream high-quality HD video and audio, giving participants great picture quality. If you are struggling to get a stable connection, you can lower the picture quality, but most high-speed internet connections will be able to stream high-quality video.',
        icon: headphones,
        bgClass: 'text-primary'
    },
    {
        id: 2,
        name: 'Screen Sharing',
        description: 'The screen-sharing feature lets the host and – with permission – participants share their screen with other meeting participants on the call. You can choose to share your entire desktop or phone screen, a specific app, a portion of your screen, a Whiteboard, and more. Participant screen sharing can be restricted by the host. Screen-sharing is a useful tool for collaboration among and between teams, helping you save time and communicate more effectively. Whether it’s for business or personal use, screen-sharing is one of the most commonly used and convenient features',
        icon: screenShare,
        bgClass: 'text-accent'
    },
    {
        id: 3,
        name: 'Smart Messageing',
        description: 'Remote Talks video-conferencing can be done using the desktop client, the mobile app, and the browser client. All versions support cross-platform communication, from video, to audio, to instant messaging. App versions will automatically sync so you can access your meetings no matter how you sign in to Remote Talks',
        icon: Googlemessages,
        bgClass: 'text-secondary'
    },
]
  return (
    <div className='common-width'>
      <div className='py-20'>
        <div className='text-center flex flex-col items-center mb-3'>
          <h1 className='font-bold text-4xl border-set p-2 mb-4'>Check Out All Features</h1>
          <p className='w-full sm:w-3/4 lg:w-1/2 text-center text-gray-400'>Although Remote Tasks app is primarily a video-conferencing app that facilitates video and audio calling, Remote Tasks provides users with an instant messaging ... Try some of our features</p>
        </div>
        {/* all features card */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            cardData.map(card => <FeatureCard
            key={card.id}
            card={card}
            ></FeatureCard>)
          }
          {/* <div className='text-center hover:bg-base-200 p-5'>
            <div className='text-center flex justify-center items-center py-4 lg:py-6 text-5xl text-primary'>
              <FaHeadphones></FaHeadphones>
            </div>
            <div>
              <h3 className='text-2xl font-semibold pb-3'>Audio and HD video calling</h3>
              <p className='text-gray-400'>Remote Talks’s video-conferencing app can stream high-quality HD video and audio, giving participants great picture quality. If you are struggling to get a stable connection, you can..<span className='text-blue-700 '><Link>Read more</Link></span></p>
            </div>
          </div>
          <div className='text-center hover:bg-base-200 p-5'>
            <div className='text-center flex justify-center items-center py-4 lg:py-6 text-5xl text-accent'>
              <MdOutlineScreenShare></MdOutlineScreenShare>
            </div>
            <div>
              <h3 className='text-2xl font-semibold pb-3'>Screen Sharing</h3>
              <p className='text-gray-400'>The screen-sharing feature lets the host and – with permission – participants share their screen with other meeting participants on the call. You can choose to share your entire deskt..<span className='text-blue-700 '><Link>Read more</Link></span></p>
            </div>
          </div>
          <div className='text-center hover:bg-base-200 p-5'>
            <div className='text-center flex justify-center items-center py-4 lg:py-6 text-5xl text-secondary'>
              <SiGooglemessages></SiGooglemessages>
            </div>
            <div>
              <h3 className='text-2xl font-semibold pb-3'>Smart Messageing</h3>
              <p className='text-gray-400'>Remote Talks video-conferencing can be done using the desktop client, the mobile app, and the browser client. All versions support cross-platform communication, from video, to audio, ..<span className='text-blue-700 '><Link>Read more</Link></span></p>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Features;