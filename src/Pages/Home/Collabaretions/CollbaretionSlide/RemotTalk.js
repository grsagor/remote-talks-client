import React from 'react';
import { AiTwotoneVideoCamera } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import { MdOutlineClass ,MdBorderColor, MdEvent} from "react-icons/md";
import { FiAperture } from "react-icons/fi";
 
const RemotTalk = () => {
    return (
      <div className="px-4 my-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl ">
              <h2 className="max-w-lg mb-4 font-sans   tracking-tight text-yellow-50 capitalize leading-relaxed   text-2xl  sm:leading-none">
                Make meaningful relationships with meetings, team chat,
                whiteboard, phone, and other features all in one package
              </h2>
              <p className="text-gray-500 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 my-6 ">
              <div className="flex items-center ">
                <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                  <AiTwotoneVideoCamera></AiTwotoneVideoCamera>
                </span>
                <h2>Virtual Meetings</h2>
              </div>
              <div className="flex items-center ">
                <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                  <BsFillChatFill></BsFillChatFill>
                </span>
                <h2>Team Chat</h2>
              </div>
              <div className="flex items-center ">
                <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                  <MdOutlineClass></MdOutlineClass>
                </span>
                <h2>Online Classes</h2>
              </div>
              <div className="flex items-center ">
                <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                  <FiAperture></FiAperture>
                </span>
                <h2>Unlimetet Perticipent</h2>
              </div>
              <div className="flex items-center ">
                <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                  <MdBorderColor></MdBorderColor>
                </span>
                <h2>Online WhitBord</h2>
              </div>
              <div className="flex items-center ">
                <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                  <MdEvent></MdEvent>
                </span>
                <h2>Event Polling</h2>
              </div>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
            <a
              href="/"
              aria-label="Play Video"
              className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
            ></a>
          </div>
        </div>
      </div>
    );
};

export default RemotTalk;