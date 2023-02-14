import React, { useContext } from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo/titleLogo/Title Logo.png';
import { AuthContext } from '../../../context/AuthProvider';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error);
      })
  }

  const menuItems = <>
    <Link className='m-2 text-lg hover:text-primary' to='/'>Home</Link>
    <Link className='m-2 text-lg hover:text-primary' to='/participants'>Participants</Link>
    <Link className='m-2 text-lg hover:text-primary' to='/message'>Messages</Link>
    <Link className='m-2 text-lg hover:text-primary' to='/about'>About Us</Link>
    <Link className='m-2 text-lg hover:text-primary' to='/whiteboard'>Whiteboard</Link>
    {user?.uid ?
      // <Link onClick={handleLogOut} className='m-2 text-lg hover:text-primary' to='/login'>Sign out</Link>
      <Link></Link>
      : <Link className='m-2 text-lg hover:text-primary' to='/login'>Login</Link>
    }
  </>

  const img = <>
    {
      user ?
        <>
          <img src={user?.photoURL} alt="" />
        </>
        :
        <>
          <button className='w-full h-full'><FaUserCircle className='w-full h-full'></FaUserCircle></button>
        </>
    }
  </>

  return (
    <div className='shadow-lg'>
      <div className='w-full'>
        <div className="navbar h-20">
          <div className="flex-1">

            <div className='flex-1'>
              {/* <a href='/' className="btn btn-ghost font-bold text-2xl normal-case "><img className='w-40 md:w-60 lg:w-80' src={Logo} alt=''></img></a> */}
              <Link to='/'><img className='btn btn-ghost h-16' src={Logo} alt="" /></Link>
            </div>

            {/* <div className='hidden lg:flex flex-1'>
              <div className="form-control relative flex justify-center">
                <input type="text" placeholder="Search" className="input input-bordered border-secondary h-12 w-80 rounded-3xl" />
                <button className="btn btn-secondary text-xl bg-secondary rounded-3xl text-white absolute top-0 right-0 rounded-l-none"><FaSearch></FaSearch></button>
              </div>
            </div> */}
          </div>

          {/* <div className='lg:hidden'>
            <div className="dropdown dropdown-left mt-4">
              <button className="btn btn-ghost btn-circle">
                <FaSearch className="h-5 w-5 mb-4 text-secondary"></FaSearch>
              </button>
              <ul tabIndex={0} className="flex dropdown-content">
                <div className="form-control flex justify-center">
                  <input type="text" placeholder="Search" className="input input-bordered border-secondary h-8 w-40 md:w-60 rounded-3xl" />
                </div>
              </ul>
            </div>
          </div> */}

          <div className="dropdown mr-2">
            <div className="dropdown-end">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>

              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <label tabIndex={0} className="flex btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ">
                    {img}
                  </div>
                </label>
                <Link className='m-2 text-lg hover:text-primary' to='/profile'>Profile</Link>
                {menuItems}
                <Link onClick={handleLogOut} className='m-2 text-lg hover:text-primary' to='/login'>Sign Out</Link>

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
                    {img}
                  </div>
                </label>
                <ul tabIndex={0} className="shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li><Link to='/profile'>Profile</Link></li>
                  <li><a onClick={handleLogOut} href='/login'>Sign Out</a></li>
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
