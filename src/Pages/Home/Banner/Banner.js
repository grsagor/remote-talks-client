import React, { useEffect, useState } from "react";

 
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Firstdiv from "./slide1/Firstdiv";
import Seconddiv from "./slide2/Seconddiv";
import Fourthdivs from "./slide4/Fourthdivs";
import Thirddivs from "./Sllide3/Thirddivs";


const Banner = () => {
  const [visibleDiv, setVisibleDiv] = useState(1);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisibleDiv(visibleDiv === 5 ? 1 : visibleDiv + 1);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [visibleDiv]);

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
                      "web-Confarenching",
                      "Virtual meetings",
                      "Online presentations",
                      "Virtual classroom",
                      "Video conferencing"
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
          <div style={{ display: visibleDiv === 1 ? "block" : "none" }}>
            <Firstdiv></Firstdiv>
          </div>
          <div style={{ display: visibleDiv === 2 ? "block" : "none" }}>
            <Seconddiv></Seconddiv>
          </div>
          <div style={{ display: visibleDiv === 3 ? "block" : "none" }}>
            <Thirddivs></Thirddivs>
          </div>
          <div style={{ display: visibleDiv === 4 ? "block" : "none" }}>
            <Fourthdivs></Fourthdivs>
          </div>
          <div style={{ display: visibleDiv === 5 ? "block" : "none" }}>
            <Firstdiv></Firstdiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
