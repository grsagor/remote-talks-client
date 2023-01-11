import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const menuItems = <>
    <Link className='m-2 text-lg' to='/'>Home</Link>
    <Link className='m-2 text-lg' to='/participants'>Participants</Link>
    <Link className='m-2 text-lg' to='/message'>Messages</Link>
    <Link className='m-2 text-lg' to='/login'>Login</Link>
  </>

  return (
    <div>
      <div className="navbar h-20 mb-12">
        <div className="flex-1">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>

          <div>
            <a href='/' className="btn btn-ghost font-bold text-2xl normal-case">LOGO</a>
          </div>

          <div className='hidden lg:flex'>
            <div className="form-control flex justify-center px-60 ml-56 ">
              <input type="text" placeholder="Search" className="input input-bordered border-secondary h-12 py-0 w-80 rounded-3xl" />
            </div>
          </div>

        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems}
          </ul>
        </div>

        <div className="navbar-end">
          <div className='flex lg:hidden'>
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-5">
              <div className="w-10 rounded-full ">
                <img src="https://i.pinimg.com/originals/de/99/93/de9993e752fc52646579448542c411d3.jpg" alt='' />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li><a href='/'>Profile</a></li>
              <li><a href='/'>Settings</a></li>
              <li><a href='/logOut'>Log Out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;