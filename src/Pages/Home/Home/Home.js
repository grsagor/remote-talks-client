import React from 'react';
import { Link } from 'react-router-dom';
import Features from '../Features/Features';

const Home = () => {
  return (
    <div>
      <h1 className=''>This is home page!!</h1>
      {/* Add Yur banner section Component */}
     <Features></Features>
    </div>
  );
};

export default Home;