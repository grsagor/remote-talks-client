import React from 'react';
import { Link } from 'react-router-dom';
import Features from '../Features/Features';

const Home = () => {
  return (
    <div>
      <h1 className='py-40'>This is home page!!</h1>
      {/* Add Yur banner section  */}
     <Features></Features>
    </div>
  );
};

export default Home;