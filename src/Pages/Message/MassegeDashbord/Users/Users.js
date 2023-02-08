import React from 'react';
import { Link } from 'react-router-dom';


const Users = ({ user, setCurrentFriend }) => {
  return (
 <div 
 onClick={() => {
        setCurrentFriend(user);
      }}
 
 
 className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src={user?.img}
                        alt="User2"
                      />
                    </div>
                    <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                      <p>{user.name}</p>
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







  );
};

export default Users;