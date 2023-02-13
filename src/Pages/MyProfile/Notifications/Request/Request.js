import React from 'react';

const Request = ({showUser}) => {
  return (
    <div className='flex gap-5 p-4 shadow-xl rounded-sm bg-base-200'>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={showUser.img} />
        </div>
      </div>
      <div className='w-full'>
        <div className='flex justify-between items-center'>
        <p className='font-bold m-0'>{showUser?.name}</p>
        {/* <span className='text-xs text-gray-300'>21-01-2023</span> */}
        </div>
        <span className='text-xs text-gray-300'>{showUser?.email}</span>
        <div className='flex justify-start items-center'>
        <button className="connect-btn mr-3">Connect</button>
        <button className="remove-btn">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Request;