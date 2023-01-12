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

          <div className='flex-1'>
            <a href='/' className="btn btn-ghost font-bold text-2xl normal-case">LOGO</a>
          </div>

          <div className='hidden lg:flex flex-1'>
            <div className="form-control flex justify-center">
              <input type="text" placeholder="Search" className="input input-bordered border-secondary h-12 w-80 rounded-3xl" />
            </div>
          </div>
        </div>

        <div className='lg:hidden'>
          <div className="dropdown dropdown-left mt-4">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <ul tabIndex={0} className="flex dropdown-content">
              <div className="form-control flex justify-center">
                <input type="text" placeholder="Search" className="input input-bordered border-secondary h-8 w-60 rounded-3xl" />
              </div>
            </ul>
          </div>
        </div>

        <div className="dropdown mr-2">
          <div className="dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <label tabIndex={0} className="flex btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img src="https://i.pinimg.com/originals/de/99/93/de9993e752fc52646579448542c411d3.jpg" alt='' />
                </div>
              </label>

              <Link className='m-2 text-lg' to='/'>Profile</Link>
              {menuItems}
              <Link className='m-2 text-lg' to='/'>Setting</Link>
              <Link className='m-2 text-lg' to='/logOut'>Log Out</Link>

            </ul>
          </div>
        </div>

        <div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menuItems}
            </ul>
          </div>

          <div className="navbar-end hidden lg:flex">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img src="https://i.pinimg.com/originals/de/99/93/de9993e752fc52646579448542c411d3.jpg" alt='' />
                </div>
              </label>
              <ul tabIndex={0} className="shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li><a href='/'>Profile</a></li>
                <li><a href='/'>Settings</a></li>
                <li><a href='/logOut'>Log Out</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
