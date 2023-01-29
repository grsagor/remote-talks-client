import React from 'react';
import { Link } from 'react-router-dom';


const Users = ({ user, setCurrentFriend }) => {
  return (
    <div
      onClick={() => {
        setCurrentFriend(user);
      }}
      className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md"
    >
      <div className="flex-2">
        <div className="w-12 h-12 relative">
          {user.img ? (
            <img
              className="w-12 h-12 rounded-full mx-auto"
              src={user.img}
              alt="chat-user"
            />
          ) : (
            <img
              className="w-12 h-12 rounded-full mx-auto"
              src="https://i.ibb.co/N3JmqhX/images-2.png"
              alt="chat-user"
            />
          )}

          <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white" />
        </div>
      </div>
      <div className="flex-1 px-2">
        <div className="truncate w-32">
          <span className="text-gray-800">{user.name}</span>
        </div>
        <div>
          <small className="text-gray-600">Yea, Sure!</small>
        </div>
      </div>
      <div className="flex-2 text-right">
        <div>
          <small className="text-gray-500">15 April</small>
        </div>
        <div>
          <small className="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
            23
          </small>
        </div>
      </div>
    </div>
  );
};

export default Users;