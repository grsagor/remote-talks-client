import React from 'react';
import Request from './Request/Request';

const Notifications = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Request></Request>
      <Request></Request>
      <Request></Request>
      <Request></Request>
      <Request></Request>
    </div>
  );
};

export default Notifications;