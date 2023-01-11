import React from 'react';
import { Link } from 'react-router-dom';
import '../../../CommonStyles/CommonStyle.css';
import logo from '../../../assets/Logo/video-call (1).png'
import { FaSearch } from 'react-icons/fa';


const Navbar = () => {

  const menuItems = <>
    <Link className='m-2 text-lg' to='/'>Home</Link>
    <Link className='m-2 text-lg' to='/participants'>Participants</Link>
    <Link className='m-2 text-lg' to='/message'>Messages</Link>
    <Link className='m-2 text-lg' to='/login'>Login</Link>
  </>

  return (
    <div className='shadow-lg'>
     <div className='common-width'>
     <div className="navbar h-20 mb-12">
        <div className="flex-1">

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-hover menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>

          <div className='flex-1'>
            <div className='flex items-end'>
            <img className='w-12 md:w-14 hidden md:block' src={logo} alt="" />
            <div>
              <span className='md:text-2xl  text-xl ml-2'><span className='text-3xl text-primary font-bold'>R</span>emote <span className='text-3xl text-secondary font-bold'>T</span>alks</span>
            </div>
            </div>
          </div>

          <div className='hidden lg:flex flex-1'>
            <div className="form-control flex justify-center relative">
              <input type="text" placeholder="Search" className="input  input-bordered border-secondary h-12 w-full lg:w-80 rounded-3xl" />
              <button className="btn btn-secondary absolute top-0 right-0 rounded-3xl rounded-l-none"><span className='text-white text-xl'><FaSearch></FaSearch></span></button>
            </div>
          </div>
        </div>

        <div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-hover menu-horizontal px-1">
              {menuItems}
            </ul>
          </div>
          <div className='lg:hidden'>
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>

          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img src="https://i.pinimg.com/originals/de/99/93/de9993e752fc52646579448542c411d3.jpg" alt='' />
                </div>
              </label>
              <ul tabIndex={0} className="menu-hover shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li><a href='/'>Profile</a></li>
                <li><a href='/'>Settings</a></li>
                <li><a href='/logOut'>Log Out</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
     </div>
    </div>
  );
};

export default Navbar;