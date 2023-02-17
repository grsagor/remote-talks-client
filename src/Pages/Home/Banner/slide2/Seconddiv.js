import React from 'react';
import vertuelmetting from './second.png'
import vercuye2 from "./seconnd2.png"
 import icon from "./mitingicon.png"
 import icon2 from "./slide2top.png"



 
const Seconddiv = () => {
    return (
      
      
          <div class="flex flex-wrap justify-between">
            <div class="relative w-full md:w-1/2">
              <img
                class="absolute top-0 right-0 rounded-xl"
                src={vercuye2}
                alt=""
              />
              <img
                src={icon2}
                className="absolute -top-24 w-56 left-4"
                alt=""
              />
            </div>

            <div class="relative w-full md:w-1/2">
              <img
                class="absolute rounded-xl bottom-0 left-0"
                src={vertuelmetting}
                alt=""
              />

              <img src={icon} className="absolute left-14 top-12 w-28" alt="" />
            </div>
          </div>

      
    );
};

export default Seconddiv;