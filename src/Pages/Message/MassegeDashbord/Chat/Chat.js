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
                          <p className="px-6 py-3 rounded-b-full rounded-r-full bg-blue-700  max-w-xs lg:max-w-md text-gray-200">
                            {msg?.massege}
                          </p>
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
