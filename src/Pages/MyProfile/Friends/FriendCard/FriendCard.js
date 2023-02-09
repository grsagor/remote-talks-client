import React from 'react';

<<<<<<< HEAD
const FriendCard = () => {
  return (
    <div className='flex flex-col w-full gap-3'>
      <div className='w-full'>
        <img className='w-full' src="https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/mialima160300025.jpg?ver=6" alt="" />
      </div>
      <p>User Name</p>
=======
const FriendCard = ({showUser, allusers}) => {
  const {name, img} = showUser;
  return (
    <div className='flex flex-col w-full gap-3'>
      <div className='w-full'>
        <img className='w-full h-20 md:h-28 lg:h-36' src={img} alt="" />
      </div>
      <p>{name}</p>
>>>>>>> 3dc6aa4cd8f2ac4f4dc762ec573f458718245bcd
    </div>
  );
};

export default FriendCard;