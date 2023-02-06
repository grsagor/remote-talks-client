import React from 'react';

const FriendCard = () => {
  return (
    <div className='flex flex-col w-full gap-3'>
      <div className='w-full'>
        <img className='w-full' src="https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/mialima160300025.jpg?ver=6" alt="" />
      </div>
      <p>User Name</p>
    </div>
  );
};

export default FriendCard;