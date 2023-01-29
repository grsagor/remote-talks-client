import { Tab } from "@headlessui/react";
import React from "react";
import Contact from "./CollbaretionSlide/Contact";
import Events from "./CollbaretionSlide/Events";
import Expreiench from "./CollbaretionSlide/Expreiench";

import RemotTalk from "./CollbaretionSlide/RemotTalk";
import Spaces from "./CollbaretionSlide/Spaces";

const Collabaretions = () => {
  return (
    <div className="m-auto my-10 w-full">
      <Tab.Group>
        <Tab.List>
          <div className="justify-center flex items-center  flex-wrap">
            <Tab
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Remote Talk One
            </Tab>
            <Tab
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                m-0
                
                dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Events
            </Tab>
            <Tab
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Contact Center
            </Tab>
            <Tab
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Spaces
            </Tab>

            <Tab
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Expriences
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="justify-center flex w-full ">
              <RemotTalk></RemotTalk>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="justify-center flex w-full ">
              <Events></Events>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="justify-center flex w-full ">
              <Contact></Contact>{" "}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="justify-center flex w-full ">
              <Spaces></Spaces>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="justify-center flex w-full ">
              <Expreiench></Expreiench>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Collabaretions;
