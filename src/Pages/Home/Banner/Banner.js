import React, { useState } from "react";
import baner2 from "../../.././assets/Footer-img/mainbanner.svg";
import baner4 from "../../.././assets/Footer-img/banner4.svg";
import baner5 from "../../.././assets/Footer-img/homeBanner.svg";

const Banner = () => {
  return (
    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                New Colaboration
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Great teamwork starts <br /> with Remote Talk
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              You can operate quicker and more flexibly than ever before with
              all of your employees, tools, and communication in one location.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Apply Now
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <div className=" flex  flex-col relative">
          <div className="w-full ">
            <img src={baner4} className="max-w-screen-lg absolute" alt="" />
          </div>
          <div className="w-full block m-auto ">
            <img className="w-full" src={baner2} alt="" />
          </div>

          <div className="absolute  right-0">
            <img src={baner5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
