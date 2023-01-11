import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navber from '../../Pages/Shared/Navber/Navber';

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;