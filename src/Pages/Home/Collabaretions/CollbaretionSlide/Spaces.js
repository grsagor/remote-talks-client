import React from 'react';
import { FaConfluence, FaRestroom } from "react-icons/fa";
import { MdOutlineHomeWork } from 'react-icons/md';
 

const Spaces = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Workspaces reimagined
              </h2>
              <p className="text-base text-yellow-50 md:text-lg">
                Innovative room solutions for every <br /> meeting space.
              </p>

              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 my-8 ">
                <div className="flex items-center ">
                  <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                    <FaConfluence></FaConfluence>
                  </span>
                  <h2>Conference Room <br /> Systems</h2>
                </div>
                <div className="flex items-center ">
                  <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                    <FaRestroom></FaRestroom>
                  </span>
                  <h2>Connected Conference Rooms</h2>
                </div>
                <div className="flex items-center ">
                  <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                    <MdOutlineHomeWork></MdOutlineHomeWork>
                  </span>
                  <h2>Workspaces</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img
              className="object-cover w-full h-56   rounded-xl shadow-lg sm:h-96"
              src="https://i.ibb.co/H2zY1Vv/1627094900591.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Spaces;