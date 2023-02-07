import React from 'react';
import FriendCard from './FriendCard/FriendCard';

const Friends = () => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      <FriendCard></FriendCard>
      <FriendCard></FriendCard>
      <FriendCard></FriendCard>
      <FriendCard></FriendCard>
      <FriendCard></FriendCard>
      <FriendCard></FriendCard>
    </div>
  );
};

export default Friends;