import React from 'react';
import User from '../MassegeUSerSidebar/User';
import Users from '../MassegeUSerSidebar/Users';
import Massegebox from '../Massege_box/Massegebox';
import "./Setting.css"

const SettingsBar = () => {
    return (
      <div className="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
        <div className="flex-1 flex flex-col">
          <div className="border-b-2 border-gray-800 p-2 flex flex-row z-20">
            <div className="bg-red-600 w-3 h-3 rounded-full mr-2" />
            <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2" />
            <div className="bg-green-500 w-3 h-3 rounded-full mr-2" />
          </div>
          <main className="flex-grow flex flex-row min-h-0">
            <section className="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
              <div className="header p-4 flex flex-row justify-between items-center flex-none">
                <div
                  className="w-16 h-16 relative flex flex-shrink-0"
                  style={{ filter: "invert(100%)" }}
                >
                  <img
                    className="rounded-full w-full h-full object-cover"
                    alt="ravisankarchinnam"
                    src="https://avatars3.githubusercontent.com/u/22351907?s=60"
                  />
                </div>
                <p className="text-md font-bold hidden md:block group-hover:block">
                  Messenger
                </p>
                <a
                  href="#"
                  className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 hidden md:block group-hover:block"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full fill-current"
                  >
                    <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
                  </svg>
                </a>
              </div>
              <div className="search-box p-4 flex-none">
                <form onSubmit={(event) => {}}>
                  <div className="relative">
                    <label>
                      <input
                        className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                        type="text"
                        value={true}
                        placeholder="Search Messenger"
                      />
                      <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                        <svg viewBox="0 0 24 24" className="w-6 h-6">
                          <path
                            fill="#bbb"
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                          />
                        </svg>
                      </span>
                    </label>
                  </div>
                </form>
              </div>
            
        

 <Users></Users>



            </section>
           <Massegebox></Massegebox>
          </main>
        </div>
      </div>
    );
};

export default SettingsBar;