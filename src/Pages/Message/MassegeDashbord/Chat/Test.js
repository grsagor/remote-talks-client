import React from 'react';

const Test = () => {
    return (
      <>
       

        {/* Messenger Clone */}
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
                <div className="active-users flex flex-row p-2 overflow-auto w-0 min-w-full">
                  <div className="text-sm text-center mr-4">
                    <button
                      className="flex flex-shrink-0 focus:outline-none block bg-gray-800 text-gray-600 rounded-full w-20 h-20"
                      type="button"
                    >
                      <svg
                        className="w-full h-full fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z" />
                      </svg>
                    </button>
                    <p>Your Story</p>
                  </div>
                  <div className="text-sm text-center mr-4">
                    <div className="p-1 border-4 border-blue-600 rounded-full">
                      <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img
                          className="shadow-md rounded-full w-full h-full object-cover"
                          src="https://randomuser.me/api/portraits/women/12.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p>Anna</p>
                  </div>
                  <div className="text-sm text-center mr-4">
                    <div className="p-1 border-4 border-transparent rounded-full">
                      <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img
                          className="shadow-md rounded-full w-full h-full object-cover"
                          src="https://randomuser.me/api/portraits/men/75.jpg"
                          alt=""
                        />
                        <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                          <div className="bg-green-500 rounded-full w-3 h-3" />
                        </div>
                      </div>
                    </div>
                    <p>Jeff</p>
                  </div>
                  <div className="text-sm text-center mr-4">
                    <div className="p-1 border-4 border-blue-600 rounded-full">
                      <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img
                          className="shadow-md rounded-full w-full h-full object-cover"
                          src="https://randomuser.me/api/portraits/women/42.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p>Cathy</p>
                  </div>
                  <div className="text-sm text-center mr-4">
                    <div className="p-1 border-4 border-transparent rounded-full">
                      <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img
                          className="shadow-md rounded-full w-full h-full object-cover"
                          src="https://randomuser.me/api/portraits/women/87.jpg"
                          alt=""
                        />
                        <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                          <div className="bg-green-500 rounded-full w-3 h-3" />
                        </div>
                      </div>
                    </div>
                    <p>Madona</p>
                  </div>
                  <div className="text-sm text-center mr-4">
                    <div className="p-1 border-4 border-transparent rounded-full">
                      <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img
                          className="shadow-md rounded-full w-full h-full object-cover"
                          src="https://randomuser.me/api/portraits/women/23.jpg"
                          alt=""
                        />
                        <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                          <div className="bg-green-500 rounded-full w-3 h-3" />
                        </div>
                      </div>
                    </div>
                    <p>Emma</p>
                  </div>
                  <div className="text-sm text-center mr-4">
                    <div className="p-1 border-4 border-blue-600 rounded-full">
                      <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img
                          className="shadow-md rounded-full w-full h-full object-cover"
                          src="https://randomuser.me/api/portraits/men/65.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p>Mark</p>
                  </div>
                  <div className="text-sm text-center mr-4">
                    <div className="p-1 border-4 border-blue-600 rounded-full">
                      <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img
                          className="shadow-md rounded-full w-full h-full object-cover"
                          src="https://randomuser.me/api/portraits/women/65.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p>Eva</p>
                  </div>
                  <div className="text-sm text-center mr-4">
                    <div className="p-1 border-4 border-transparent rounded-full">
                      <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img
                          className="shadow-md rounded-full w-full h-full object-cover"
                          src="https://randomuser.me/api/portraits/men/31.jpg"
                          alt=""
                        />
                        <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                          <div className="bg-green-500 rounded-full w-3 h-3" />
                        </div>
                      </div>
                    </div>
                    <p>Max</p>
                  </div>
                  <div className="text-sm text-center mr-4">
                    <div className="p-1 border-4 border-blue-600 rounded-full">
                      <div className="w-16 h-16 relative flex flex-shrink-0">
                        <img
                          className="shadow-md rounded-full w-full h-full object-cover"
                          src="https://randomuser.me/api/portraits/men/81.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <p>Adam</p>
                  </div>
                </div>
                <div className="contacts p-2 flex-1 overflow-y-scroll">
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/women/61.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>Angelina Jolie</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">
                            Ok, see you at the subway in a bit.
                          </p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">Just now</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/men/97.jpg"
                        alt=""
                      />
                      <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                        <div className="bg-green-500 rounded-full w-3 h-3" />
                      </div>
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p className="font-bold">Tony Stark</p>
                      <div className="flex items-center text-sm font-bold">
                        <div className="min-w-0">
                          <p className="truncate">Hey, Are you there?</p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">10min</p>
                      </div>
                    </div>
                    <div className="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/women/33.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>Scarlett Johansson</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">You sent a photo.</p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">1h</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/men/12.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>John Snow</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">You missed a call John.</p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">4h</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/women/23.jpg"
                        alt="User2"
                      />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>Emma Watson</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">You sent a video.</p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">11 Feb</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 flex flex-shrink-0 hidden md:block group-hover:block">
                      <img
                        className="rounded-full w-full h-full object-cover"
                        alt="user2"
                        src="https://randomuser.me/api/portraits/women/23.jpg"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/women/87.jpg"
                        alt="User2"
                      />
                      <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                        <div className="bg-green-500 rounded-full w-3 h-3" />
                      </div>
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>Sunny Leone</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">
                            Ah, it was an awesome one night stand.
                          </p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">1 Feb</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        alt="User2"
                      />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>Bruce Lee</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">
                            You are a great human being.
                          </p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">23 Jan</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 flex flex-shrink-0 hidden md:block group-hover:block">
                      <img
                        className="rounded-full w-full h-full object-cover"
                        alt="user2"
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-10 h-10 object-cover absolute ml-6"
                        src="https://randomuser.me/api/portraits/men/22.jpg"
                        alt="User2"
                      />
                      <img
                        className="shadow-md rounded-full w-10 h-10 object-cover absolute mt-6"
                        src="https://randomuser.me/api/portraits/men/55.jpg"
                        alt="User2"
                      />
                      <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                        <div className="bg-green-500 rounded-full w-3 h-3" />
                      </div>
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>TailwindCSS Group</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">
                            Adam: Hurray, Version 2 is out now!!.
                          </p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">23 Jan</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/men/34.jpg"
                        alt="User2"
                      />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>Will Smith</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">
                            WTF dude!! absofuckingloutely.
                          </p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">13 Dec</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/men/22.jpg"
                        alt="User2"
                      />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>Brad Pitt</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">you called Brad.</p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">31 Dec</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/men/99.jpg"
                        alt="User2"
                      />
                      <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                        <div className="bg-green-500 rounded-full w-3 h-3" />
                      </div>
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>Tom Hanks</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">Tom called you.</p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">31 Dec</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/men/41.jpg"
                        alt="User2"
                      />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>Dwayne Johnson</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">
                            How can i forget about that man!.
                          </p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">12 Nov</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 flex flex-shrink-0 hidden md:block group-hover:block">
                      <img
                        className="rounded-full w-full h-full object-cover"
                        alt="user2"
                        src="https://randomuser.me/api/portraits/men/41.jpg"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/men/70.jpg"
                        alt="User2"
                      />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>Johnny Depp</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">
                            Alright! let's catchup tomorrow!.
                          </p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">4 Nov</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/men/20.jpg"
                        alt="User2"
                      />
                      <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                        <div className="bg-green-500 rounded-full w-3 h-3" />
                      </div>
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>Leonardo Dicaprio</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">
                            How can you leave Rose dude. I hate you!
                          </p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">26 Oct</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="User2"
                      />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>Tom Cruise</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="min-w-0">
                          <p className="truncate">
                            Happy birthday to you my friend!
                          </p>
                        </div>
                        <p className="ml-2 whitespace-no-wrap">2 Oct</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 flex flex-shrink-0 hidden md:block group-hover:block">
                      <img
                        className="rounded-full w-full h-full object-cover"
                        alt="user2"
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex flex-col flex-auto border-l border-gray-800">
                <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
                  <div className="flex">
                    <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/women/33.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-bold">Scarlett Johansson</p>
                      <p>Active 1h ago</p>
                    </div>
                  </div>

                  <div className="flex">
                    <a
                      href="#"
                      className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current text-blue-500"
                      >
                        <path d="M11.1735916,16.8264084 C7.57463481,15.3079672 4.69203285,12.4253652 3.17359164,8.82640836 L5.29408795,6.70591205 C5.68612671,6.31387329 6,5.55641359 6,5.00922203 L6,0.990777969 C6,0.45097518 5.55237094,3.33066907e-16 5.00019251,3.33066907e-16 L1.65110039,3.33066907e-16 L1.00214643,8.96910337e-16 C0.448676237,1.13735153e-15 -1.05725384e-09,0.445916468 -7.33736e-10,1.00108627 C-7.33736e-10,1.00108627 -3.44283713e-14,1.97634814 -3.44283713e-14,3 C-3.44283713e-14,12.3888407 7.61115925,20 17,20 C18.0236519,20 18.9989137,20 18.9989137,20 C19.5517984,20 20,19.5565264 20,18.9978536 L20,18.3488996 L20,14.9998075 C20,14.4476291 19.5490248,14 19.009222,14 L14.990778,14 C14.4435864,14 13.6861267,14.3138733 13.2940879,14.7059121 L11.1735916,16.8264084 Z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current text-blue-500"
                      >
                        <path d="M0,3.99406028 C0,2.8927712 0.894513756,2 1.99406028,2 L14.0059397,2 C15.1072288,2 16,2.89451376 16,3.99406028 L16,16.0059397 C16,17.1072288 15.1054862,18 14.0059397,18 L1.99406028,18 C0.892771196,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M8,14 C10.209139,14 12,12.209139 12,10 C12,7.790861 10.209139,6 8,6 C5.790861,6 4,7.790861 4,10 C4,12.209139 5.790861,14 8,14 Z M8,12 C9.1045695,12 10,11.1045695 10,10 C10,8.8954305 9.1045695,8 8,8 C6.8954305,8 6,8.8954305 6,10 C6,11.1045695 6.8954305,12 8,12 Z M16,7 L20,3 L20,17 L16,13 L16,7 Z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current text-blue-500"
                      >
                        <path d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="chat-body p-4 flex-1 overflow-y-scroll">
                  <div className="flex flex-row justify-start">
                    <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/women/33.jpg"
                        alt=""
                      />
                    </div>
                    <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                      <div className="flex items-center group">
                        <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                          Hey! How are you?
                        </p>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z\n M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8\nC15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full fill-current"
                          >
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center group">
                        <p className="px-6 py-3 rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                          Shall we go for Hiking this weekend?
                        </p>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z\n M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8\nC15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full fill-current"
                          >
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center group">
                        <p className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Volutpat lacus laoreet non
                          curabitur gravida.
                        </p>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z\n M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8\nC15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full fill-current"
                          >
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="p-4 text-center text-sm text-gray-500">
                    FRI 3:04 PM
                  </p>
                  <div className="flex flex-row justify-end">
                    <div className="messages text-sm text-white grid grid-flow-row gap-2">
                      <div className="flex items-center flex-row-reverse group">
                        <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                          Hey! How are you?
                        </p>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z\n\t M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8\n\tC15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full fill-current"
                          >
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center flex-row-reverse group">
                        <p className="px-6 py-3 rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                          Shall we go for Hiking this weekend?
                        </p>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z\n\t M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8\n\tC15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full fill-current"
                          >
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center flex-row-reverse group">
                        <p className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Volutpat lacus laoreet non
                          curabitur gravida.
                        </p>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z\n\t M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8\n\tC15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full fill-current"
                          >
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="p-4 text-center text-sm text-gray-500">
                    SAT 2:10 PM
                  </p>
                  <div className="flex flex-row justify-start">
                    <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/women/33.jpg"
                        alt=""
                      />
                    </div>
                    <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                      <div className="flex items-center group">
                        <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                          Hey! How are you?
                        </p>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z\n M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8\nC15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full fill-current"
                          >
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center group">
                        <p className="px-6 py-3 rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                          Shall we go for Hiking this weekend?
                        </p>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z\n M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8\nC15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full fill-current"
                          >
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center group">
                        <p className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Volutpat lacus laoreet non
                          curabitur gravida.
                        </p>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z\n M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8\nC15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full fill-current"
                          >
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="p-4 text-center text-sm text-gray-500">
                    12:40 PM
                  </p>
                  <div className="flex flex-row justify-end">
                    <div className="messages text-sm text-white grid grid-flow-row gap-2">
                      <div className="flex items-center flex-row-reverse group">
                        <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                          Hey! How are you?
                        </p>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z\n\t M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8\n\tC15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full fill-current"
                          >
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center flex-row-reverse group">
                        <p className="px-6 py-3 rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                          Shall we go for Hiking this weekend?
                        </p>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z\n\t M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8\n\tC15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full fill-current"
                          >
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center flex-row-reverse group">
                        <a
                          className="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md"
                          href="#"
                        >
                          <img
                            className="absolute shadow-md w-full h-full rounded-l-lg object-cover"
                            src="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640"
                            alt="hiking"
                          />
                        </a>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z\n\t M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8\n\tC15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full fill-current"
                          >
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center flex-row-reverse group">
                        <p className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Volutpat lacus laoreet non
                          curabitur gravida.
                        </p>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z\n\t M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8\n\tC15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M19,16.685c0,0-2.225-9.732-11-9.732V2.969L1,9.542l7,6.69v-4.357C12.763,11.874,16.516,12.296,19,16.685z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-full h-full fill-current"
                          >
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-footer flex-none">
                  <div className="flex flex-row items-center p-4">
                    <button
                      type="button"
                      className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current"
                      >
                        <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current"
                      >
                        <path d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current"
                      >
                        <path d="M0,6.00585866 C0,4.89805351 0.893899798,4 2.0048815,4 L5,4 L7,2 L13,2 L15,4 L17.9951185,4 C19.102384,4 20,4.89706013 20,6.00585866 L20,15.9941413 C20,17.1019465 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1029399 0,15.9941413 L0,6.00585866 Z M10,16 C12.7614237,16 15,13.7614237 15,11 C15,8.23857625 12.7614237,6 10,6 C7.23857625,6 5,8.23857625 5,11 C5,13.7614237 7.23857625,16 10,16 Z M10,14 C11.6568542,14 13,12.6568542 13,11 C13,9.34314575 11.6568542,8 10,8 C8.34314575,8 7,9.34314575 7,11 C7,12.6568542 8.34314575,14 10,14 Z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current"
                      >
                        <path d="M9,18 L9,16.9379599 C5.05368842,16.4447356 2,13.0713165 2,9 L4,9 L4,9.00181488 C4,12.3172241 6.6862915,15 10,15 C13.3069658,15 16,12.314521 16,9.00181488 L16,9 L18,9 C18,13.0790094 14.9395595,16.4450043 11,16.9378859 L11,18 L14,18 L14,20 L6,20 L6,18 L9,18 L9,18 Z M6,4.00650452 C6,1.79377317 7.79535615,0 10,0 C12.209139,0 14,1.79394555 14,4.00650452 L14,8.99349548 C14,11.2062268 12.2046438,13 10,13 C7.790861,13 6,11.2060545 6,8.99349548 L6,4.00650452 L6,4.00650452 Z" />
                      </svg>
                    </button>
                    <div className="relative flex-grow">
                      <label>
                        <input
                          className="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                          type="text"
                          value={true}
                          placeholder="Aa"
                        />
                        <button
                          type="button"
                          className="absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-blue-600 hover:text-blue-700 w-6 h-6"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z" />
                          </svg>
                        </button>
                      </label>
                    </div>
                    <button
                      type="button"
                      className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current"
                      >
                        <path d="M11.0010436,0 C9.89589787,0 9.00000024,0.886706352 9.0000002,1.99810135 L9,8 L1.9973917,8 C0.894262725,8 0,8.88772964 0,10 L0,12 L2.29663334,18.1243554 C2.68509206,19.1602453 3.90195042,20 5.00853025,20 L12.9914698,20 C14.1007504,20 15,19.1125667 15,18.000385 L15,10 L12,3 L12,0 L11.0010436,0 L11.0010436,0 Z M17,10 L20,10 L20,20 L17,20 L17,10 L17,10 Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </>
    );
};

export default Test;