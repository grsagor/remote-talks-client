import { useQuery } from "@tanstack/react-query";

import React from "react";
import { useEffect } from "react";
import { useRef } from "react";



const Chat = ({conversation , curentFriend, curentuser, }) => {
  const scrollref = useRef();

  //smooth scroll bar
  useEffect(() => {
    scrollref.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  
  return (
    <>
      <div
        ref={scrollref}
        className="flex-1 sm:p-6 justify-between flex flex-col h-screen"
      >
        <div
          id="messages"
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          {conversation && conversation.length > 0
            ? conversation.map((msg) =>
                msg.senderId === curentuser._id ? (
                  <div className="flex flex-row justify-end">
                    <div className="messages text-sm text-white grid grid-flow-row gap-2">
                      <div className="flex items-center flex-row-reverse group">
                        <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                          {msg.massege}
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

                      {msg.img && (
                        <div className="flex items-center flex-row-reverse group">
                          <a
                            className="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md"
                            href="#"
                          >
                            <img
                              className="absolute shadow-md w-full h-full rounded-l-lg object-cover"
                              src={msg.img}
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
                      )}
                    </div>
                  </div>
                ) : (
                  <div ref={scrollref}>
                    <div className="flex flex-row justify-start">
                      <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                        <img
                          className="shadow-md rounded-full w-full h-full object-cover"
                          src={curentFriend.img}
                          alt=""
                        />
                      </div>
                      <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                        <div className="flex items-center group">
                          <p className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                            {msg?.massege}
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

                    {msg.img && (
                      <div className="flex items-center  group">
                        <a
                          className="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md"
                          href="#"
                        >
                          <img
                            className=" shadow-md w-full h-full rounded-r-lg object-cover"
                            src={msg.img}
                            alt="img"
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
                    )}

                    <p className="p-4 text-center text-sm text-gray-500">
                      {msg.time}
                    </p>
                  </div>
                )
              )
            : ""}
        </div>
      </div>

      <style>{`
.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}
`}</style>

      <script>{`
	const el = document.getElementById('messages')
	el.scrollTop = el.scrollHeight
`}</script>
    </>
  );
};

export default Chat;
