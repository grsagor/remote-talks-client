import moment from "moment/moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import LeftSideMessege from "./left-sidemesege/LeftSideMessege";
import RightsideMassege from "./RightSideMassege/RightsideMassege";

const Chat = ({ curentFriend, curentuser }) => {

  const [conversation,setConversation]=useState([])


  const handelmassege = (event) => {
    event.preventDefault();
    const from = event.target;
    const massege = from.massege.value;
    const time = moment().format("LT");

    const createMassge = {
      massege: massege ? massege : <e>😀</e>,
      massegeSendTime: time,
      senderId: curentuser._id,
      sendeName: curentuser.name,
      
      senderPhoto: curentuser.img,
      reciberName: curentFriend.name,
      riciberphto: curentFriend.img,
      reciberId: curentFriend._id,
    };

    console.log(createMassge);

    fetch("http://localhost:5000/massege", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(createMassge)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };



//get messages

useEffect(()=>{
fetch(`http://localhost:5000/msg/${curentFriend._id}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    setConversation(data)
  });

},[curentFriend._id])



  return (
    <>
      {/* component */}
      <div className="flex-1 sm:p-6 justify-between flex flex-col h-screen">
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
                        <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md"></p>
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

                      {
                        <div className="flex items-center flex-row-reverse group">
                          <a
                            className="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md"
                            href="#"
                          >
                            <img
                              className="absolute shadow-md w-full h-full rounded-l-lg object-cover"
                              src=""
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
                      }
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-row justify-start">
                      <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                        <img
                          className="shadow-md rounded-full w-full h-full object-cover"
                          src={""}
                          alt=""
                        />
                      </div>
                      <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                        <div className="flex items-center group">
                          <p className="px-6 py-3 rounded-b-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">
                            harrt
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
                  </div>
                )
              )
            : ""}
        </div>
        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <form onSubmit={handelmassege} className="relative flex">
            <input
              type="text"
              name="massege"
              placeholder="Write your message!"
              className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
            />
            <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              >
                <span className="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </form>
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
