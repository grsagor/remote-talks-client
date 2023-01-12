import React from 'react';
import { MdRealEstateAgent, MdSupportAgent } from "react-icons/md";
const Contact = () => {
    return (
      <div className="hero bg-base-200 py-12">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-11">
            <img
              className="h-auto max-w-full rounded-xl "
              src="https://i.ibb.co/VHVJ8JZ/Contact-Us-720x300.jpg"
              alt="contact"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Modern customer support</h1>
            <p className="mb-6 text-xl">
              An omnichannel cloud contact center solution <br /> optimized for
              video.
            </p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 my-8 ">
              <div className="flex items-center ">
                <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                  <MdSupportAgent></MdSupportAgent>
                </span>
                <h2>Virtual Agent</h2>
              </div>
              <div className="flex items-center ">
                <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                  <MdRealEstateAgent></MdRealEstateAgent>
                </span>
                <h2>Cloud Contact Center</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;