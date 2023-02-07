import React from 'react';

const FriendCard = ({showUser, allusers}) => {
  const {name, img} = showUser;
  return (
    <div className='flex flex-col w-full gap-3'>
      <div className='w-full'>
        <img className='w-full h-20 md:h-28 lg:h-36' src={img} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default FriendCard;