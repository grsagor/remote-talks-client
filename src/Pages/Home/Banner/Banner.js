import React from "react";

import mainb from "./BannerAssests/mainBanner.avif"
import subBanner2 from "./BannerAssests/sub2.webp"
import feature from "./BannerAssests/fiture.png"
import arow from "./BannerAssests/10601296_41883-removebg-preview.png"
import help from "./BannerAssests/help.webp"
import event from "./BannerAssests/7741855_3703471.jpg"
import interviw from "./BannerAssests/intrerviw.webp"
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';



const Banner = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6 ">
            <h1 className="font-sans text-3xl lg:text-4xl md:text-4xl  capitalize text-white font-bold tracking-tight   sm:leading-none max-w-lg mb-6">
              Remote talks is best <br />
              <div class="flex">
                <div class="mr-2">For</div>
                <Typewriter
                  options={{
                    strings: [
                      "Virtual meetings",
                      "Online presentations",
                      "Video conferencing",
                      "Audio conferencing",
                      "Virtual classroom",
                      "Self-paced learning"
                    ],
                    autoStart: true,
                    loop: true
                  }}
                ></Typewriter>
              </div>
            </h1>
            <p className="text-white capitalize text-base md:text-lg">
              A platform for virtual meetings, training, and learning, allowing
              real-time collaboration and interaction from any location.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/meeting">
              <button className="btn btn-primary bg-gradient-to-r from-primary to-blue-800 hover:text-white">
                Make a Metting
              </button>
            </Link>
          </div>
        </div>
        <div className="  lg:w-1/2 relative  m-auto">
          <div className="flex">
            <div className="w-1/4 pb-5">
              <img className="object-cover rounded-xl " src={event} alt="" />
            </div>
            <div className="w-1/4 mx-2">
              <img className="object-cover rounded-xl" src={interviw} alt="" />
            </div>

            <div className="w-3/5 -m-9 mx-4">
              <img
                className="object-cover rounded-xl"
                src={subBanner2}
                alt=""
              />
            </div>
          </div>
          <div className=" flex  mt-6 relative">
            <div className="absolute  w-2/4  -top-10 ">
              <img src={feature} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img className="rounded-lg" src={mainb} alt="" />

              <div className="w-20 h-14  right-1/4 top-7  absolute  ">
                <img
                  className="object-cover rounded-full ml-3"
                  src={help}
                  alt=""
                />
              </div>
            </div>
            <div>
              <img src={arow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


