import React from 'react';

const Profile = ({curentFriend}) => {
  
  
  
  return (
    <div className="user-profile text-center">
      <div className="">
        <img
          src={curentFriend.img}
          alt="user"
          className="w-32 h-32 rounded-full m-auto mt-16 border-2 border-white bg-white shadow-lg "
        />
      </div>
      <div className="text-gray-800 mt-8">
        {curentFriend?.name ? curentFriend.name : "user" + Math.random()}
        <span className="inline-block align-text-bottom">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
      <div className="menu mt-8">
        <a
          className="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
          href="javascript:return false;"
        >
          <span className="inline-block align-text-bottom mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </span>
          Home
        </a>
        <a
          className="block py-4 px-12 border-l-4 border-gray-800 bg-gray-300 text-black hover:bg-gray-300 hover:text-black"
          href="javascript:return false;"
        >
          <span className="inline-block align-text-bottom mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          Chat
        </a>
        <a
          className="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
          href="javascript:return false;"
        >
          <span className="inline-block align-text-bottom mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          Calendar
        </a>
        <a
          className="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
          href="javascript:return false;"
        >
          <span className="inline-block align-text-bottom mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
          </span>
          Files
        </a>
        <a
          className="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
          href="javascript:return false;"
        >
          <span className="inline-block align-text-bottom mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </span>
          Jobs
        </a>
        <a
          className="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
          href="javascript:return false;"
        >
          <span className="inline-block align-text-bottom mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          Settings
        </a>
      </div>
    </div>
  );
};

export default Profile;