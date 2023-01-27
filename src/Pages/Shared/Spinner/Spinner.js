import React from 'react';

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-700'></div>
    </div>
  );
};

export default Spinner;