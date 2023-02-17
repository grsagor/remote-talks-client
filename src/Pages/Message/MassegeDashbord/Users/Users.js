import React from 'react';
import { Link } from 'react-router-dom';


const Users = ({ user, setCurrentFriend, curentuser, onlineuser }) => {
  return (
    <div
      onClick={() => {
        setCurrentFriend(user);
      }}
      className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
    >
      <div className="text-sm text-center mr-4">
        <div className="p-1 border-4 border-transparent rounded-full">
          <div className="w-16 h-16 relative flex flex-shrink-0">
            <img
              className="shadow-md rounded-full w-full h-full object-cover"
              src={user.img}
              alt=""
            />

            {/* {onlineuser?.some((usr) => usr.userId ===user._id) ? (
              <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                <div className="bg-green-500 rounded-full w-3 h-3" />
              </div>
            ) : (
              <div className="absolute bg-gray-400 p-1 rounded-full bottom-0 right-0">
                <div className="bg-gray-600-500 rounded-full w-3 h-3" />
              </div>
            )} */}
          </div>
        </div>
      </div>

      <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
        <p>{user.name}</p>
       
      </div>

      </div>

  );
};

export default Users;