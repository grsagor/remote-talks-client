import React from 'react';
import mainb from "./BannerAssests/mainBanner.avif";
import subBanner2 from "./BannerAssests/sub2.webp";
import feature from "./BannerAssests/fiture.png";
import arow from "./BannerAssests/10601296_41883-removebg-preview.png";
import help from "./BannerAssests/help.webp";
import event from "./BannerAssests/7741855_3703471.jpg";
import interviw from "./BannerAssests/intrerviw.webp";
import { motion } from "framer-motion";

const SecondBanner = () => {
    return (
      <div className="  lg:w-1/2 relative  m-auto">
        <div className="flex">
          <div className="w-1/4 pb-5">
            <img className="object-cover rounded-xl " src={event} alt="" />
          </div>
          <div className="w-1/4 mx-2">
            <img className="object-cover rounded-xl" src={interviw} alt="" />
          </div>

          <div className="w-3/5 -m-9 mx-4">
            <motion.img
              animate={{
                width: "100%",
                animation: "ease-in",
                y: "10px",
                transitionDuration: "5s"
              }}
              transition={{ duration: 2 }}
              className="object-cover w-0 rounded-xl  "
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
            <motion.img
              animate={{ width: "100%", transitionDuration: "3s" }}
              transition={{ duration: 2 }}
              className="w-1"
              src={arow}
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default SecondBanner;