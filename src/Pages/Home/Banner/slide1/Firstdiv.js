import React from 'react';

import subBanner2 from "../BannerAssests/sub2.webp";
import feature from "../BannerAssests/fiture.png";
import arow from "../BannerAssests/10601296_41883-removebg-preview.png";
import help from "../BannerAssests/help.webp";
import event from "../BannerAssests/7741855_3703471.jpg";
import interviw from "../BannerAssests/intrerviw.webp";
import mainpi from "../BannerAssests/mainBanner.avif"
const Firstdiv = () => {
    return (
      <>
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
              <img className="rounded-lg" src={mainpi} alt="" />

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
   
      </>
    );
};

export default Firstdiv;