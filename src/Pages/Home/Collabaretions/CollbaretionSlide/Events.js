import React from 'react';
import { BsExclude } from 'react-icons/bs';
import { DiWebplatform} from 'react-icons/di';
import { GrTemplate } from "react-icons/gr";
import { BiCommand } from "react-icons/bi";
 
 

const Events = () => {
    return (
      <div className="hero  my-10 ">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <img
              className=" max-w-full   rounded-xl"
              src="https://i.ibb.co/DpFnWZD/cb125v4-career-ops-corporate-functions.webp"
              alt="imag"
            />
          </div>

          <div className="ml-4">
            <h1 className="text-3xl font-bold">Event Pull Expreiench</h1>
            <p className='py-4 pr-6 '>
              Returns information about one or more pull request <br /> events.  The
              pull request event type about which you want to 
               return
              information. Possible values:
            </p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 my-8 ">
              <div className="flex items-center ">
                <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                  <DiWebplatform></DiWebplatform>
                </span>
                <h2>Online Webinars</h2>
              </div>
              <div className="flex items-center ">
                <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                  <GrTemplate></GrTemplate>
                </span>
                <h2>Event Platform</h2>
              </div>
              <div className="flex items-center ">
                <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                  <BsExclude></BsExclude>
                </span>
                <h2>Claoud Events</h2>
              </div>

              <div className="flex items-center ">
                <span className="text-xl  text-white-700 p-2 mr-2 bg-slate-900 rounded-full">
                  <BiCommand></BiCommand>
                </span>
                <h2>Community Events</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Events;