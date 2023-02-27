import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Users = ({ user, setCurrentFriend, curentuser, }) => {
   const { data: conversation = [] } = useQuery({
     queryKey: ["conversation", curentuser._id, user._id],
     queryFn: async () => {
       const res = await fetch(
         `https://remote-server-devsobuj910.vercel.app/getmsg/${curentuser._id}/${user._id}`
       );
       const data = await res.json();

       return data;
     }
   });

   const lastObject = conversation[conversation.length - 1];
   const lastObjectValue = lastObject ? lastObject.massege : "";



const [active, setActive] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setCurrentFriend(user);
        }}
        className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative"
      >
        <div className="w-16 h-16 relative flex flex-shrink-0">
          {user?.img ? (
            <img
              className="shadow-md rounded-full w-full h-full object-cover"
              src={user.img}
              alt=""
            />
          ) : (
            <img
              className="shadow-md rounded-full w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKpQUy8JP90MAZxFjU0P9bPqkUWL35fd8Ag&usqp=CAU"
              alt=""
            />
          )}
        </div>
        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
          <p>{user.name}</p>
          <div className="flex items-center text-sm text-gray-600">
            {lastObjectValue ? (
              <div className="min-w-0">
                <p className="truncate text-cyan-50">last-msg: {lastObjectValue}</p>
              </div>
            ) : (
              "no message send yet"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;