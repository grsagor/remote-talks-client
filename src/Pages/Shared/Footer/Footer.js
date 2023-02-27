// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../../CommonStyles/CommonStyle.css';
// import './Footer.css'
// // import footer from '../../../assets/Footer-img/footer-img.png';
// import logo from '../../../assets/Logo/logo.png'
// import footer from '../../../assets/Footer-img/water-backgroundps-10468862-removebg-preview.png';
// import { FaLinkedin } from 'react-icons/fa';


// const Footer = () => {
//   return (
//     <div className='main-footer '
//     //   style={{
//     //     background: `url(${footer})`,
//     //     backgroundSize: 'cover',
//     //     backgroundRepeat: 'no-repeat'
//     // }}
//     >
//       <div className='common-width'>
//         <footer className="footer text-base-content py-3 pt-10 shadow-xl md:shadow-none">
//           <div className='grid w-full  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6 md:gap-y-8 sm:gap-y-8'>
//             <div className='flex justify-center md:items-start items-center flex-col w-full'>
//               <img className='w-24 mb-2' src={logo} alt="" />
//               <p className='text-center md:text-start'>Call with Remote Talks<br />Providing reliable tech since 2022</p>
//             </div>
//             <div className='flex md:items-start items-center w-full flex-col gap-2'>
//               <span className="footer-title">Services</span>
//               <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1 gap-x-2 md:gap-1'>
//                 <Link className="link link-hover" to='/meeting'>Video Call</Link>
//                 <Link className="link link-hover" to='/message'>Live Chat</Link>
//                 <Link className="link link-hover">Photo Post</Link>
//                 <Link className="link link-hover">Advertisement</Link>
//               </div>
//             </div>
//             <div className='flex md:items-start items-center  w-full flex-col gap-2'>
//               <span className="footer-title">Company</span>
//               <div className='flex md:flex-col  gap-3 md:gap-1'>
//                 <Link className="link link-hover" to='/about'>About us</Link>
//                 <Link className="link link-hover">Contact</Link>
//                 <Link className="link link-hover">Jobs</Link>
//                 <Link className="link link-hover">Press kit</Link>
//               </div>
//             </div>
//             {/* <div className='flex md:items-start items-center w-full flex-col gap-1'>
//               <span className="footer-title">Our Team</span>
//               <div className=''>
//                 <div className='flex items-center gap-1'>
//                   <span className='text-lg text-blue-400'><FaLinkedin></FaLinkedin></span>
//                   <Link className="link link-hover">Golam Rahman Sagor</Link>
//                 </div>
//                 <div className='flex items-center gap-1'>
//                   <span className='text-lg text-blue-500'><FaLinkedin></FaLinkedin></span>
//                   <Link className="link link-hover">Nusrat Nova</Link>
//                 </div>
//                 <div className='flex items-center gap-1'>
//                   <span className='text-lg text-blue-500'><FaLinkedin></FaLinkedin></span>
//                   <Link className="link link-hover">Sharmin Akter</Link>
//                 </div>
//                 <div className='flex items-center gap-1'>
//                   <span className='text-lg text-blue-600'><FaLinkedin></FaLinkedin></span>
//                   <Link className="link link-hover">Md Anis Molla</Link>
//                 </div>
//                 <div className='flex items-center gap-1'>
//                   <span className='text-lg text-blue-700'><FaLinkedin></FaLinkedin></span>
//                   <Link className="link link-hover">Ft Sobuj Hasan</Link>
//                 </div>
//                 <div className='flex items-center gap-1'>
//                   <span className='text-lg text-blue-800'><FaLinkedin></FaLinkedin></span>
//                   <Link className="link link-hover">Sultan Mahmud</Link>
//                 </div>
//               </div>

//             </div> */}
//             <div className='w-full flex flex-col md:items-start items-center '>
//               <span className="footer-title">Newsletter</span>
//               <div>
//                 <div className="form-control w-full">
//                   <label className="label">
//                     <span className="label-text">Enter your email address</span>
//                   </label>
//                   <div className="relative">
//                     <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
//                     <button className="btn btn-primary bg-gradient-to-r from-primary to-blue-800 text-white absolute top-0 right-0 rounded-l-none">Send</button>
//                   </div>
//                 </div>
//                 <div className="grid grid-flow-col w-full pt-4 gap-4">
//                   <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
//                   <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
//                   <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>

//       </div>
//       <div className='border-t-2 mt-4'>
//         <span className='text-center text-gray-300 block py-5'>© Copyright 2023 Remote Talks</span>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../CommonStyles/CommonStyle.css';
import './Footer.css'
// import footer from '../../../assets/Footer-img/footer-img.png';
import logo from '../../../assets/Logo/logo.png'
import footer from '../../../assets/Footer-img/water-backgroundps-10468862-removebg-preview.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { toast } from 'react-hot-toast';


const Footer = () => {
  const navigate = useNavigate();

  const handleConnect = () => {
    toast.success("Waiting for response!!!")
    navigate('/connect')
  }
  return (
    <div className='main-footer '
    //   style={{
    //     background: `url(${footer})`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat'
    // }}
    >
      <div className='common-width'>
        <footer className="footer text-base-content py-3 pt-10 shadow-xl md:shadow-none">
          <div className='grid w-full  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 md:gap-y-8 sm:gap-y-8'>
            <div className='flex justify-center md:items-start items-center flex-col w-full'>
              <img className='w-24 mb-2' src={logo} alt="" />
              <p className='text-center md:text-start'>Call with Remote Talks<br />Providing reliable tech since 2022</p>
            </div>
            <div className='flex md:items-start items-center w-full flex-col gap-2'>
              <span className="footer-title">Services</span>
              <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1 gap-x-2 md:gap-1'>
                <Link to="/meeting" className="link link-hover">Video Call</Link>
                <Link to="/meeting" className="link link-hover">Audio Call</Link>
                <Link to="/message" className="link link-hover">Live Chat</Link>
                <Link to="/participants" className="link link-hover">Add Friend</Link>
                <Link to="/message" className="link link-hover">Live Streaming</Link>
                {/* <Link className="link link-hover">Advertisement</Link> */}
              </div>
            </div>
            <div className='flex md:items-start items-center  w-full flex-col gap-2'>
              <span className="footer-title">Company</span>
              <div className='flex md:flex-col  gap-3 md:gap-1'>
                <Link to="/about" className="link link-hover">About us</Link>
                <Link to="/connect" className="link link-hover">Contact</Link>
                <Link to="/review" className="link link-hover">Review</Link>
                <Link className="link link-hover">Collaboration</Link>
                <Link to="/" className="link link-hover">Return home</Link>
              </div>
            </div>
            <div className='flex md:items-start items-center w-full flex-col gap-1'>
              <span className="footer-title">Our Team</span>
              <div className=''>
                <div className='flex items-center gap-1'>
                  <span className='text-lg text-blue-400'><FaCode></FaCode></span>
                  <a href="https://grsagor-portfolio.web.app/" target="blank" className="link link-hover">G.R. Sagor</a>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-lg text-blue-500'><FaCode></FaCode></span>
                  <a href="https://portfolio-88a84.web.app/" target="blank" className="link link-hover">Nusrat Nova</a>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-lg text-blue-500'><FaCode></FaCode></span>
                  <a href="https://transcendent-syrniki-78a004.netlify.app/" target="blank" className="link link-hover">Sharmin Akter</a>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-lg text-blue-600'><FaCode></FaCode></span>
                  <a href="https://sina-porfolio.web.app/" target="blank" className="link link-hover">Md Anis Molla</a>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-lg text-blue-700'><FaCode></FaCode></span>
                  <a href="https://mahmudul-protfolio.netlify.app/" target="blank" className="link link-hover">Ft Sobuj Hasan</a>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-lg text-blue-800'><FaCode></FaCode></span>
                  <a href="https://md-shimul-molla-07.netlify.app/" target="blank" className="link link-hover">Md Shimul Molla</a>
                </div>
                {/* <div className='flex items-center gap-1'>
                  <span className='text-lg text-blue-800'><FaCode></FaCode></span>
                  <Link to="/teams" className="link link-hover">Sultan Mahmud</Link>
                </div> */}
              </div>

            </div>
            <div className='w-full flex flex-col md:items-start items-center '>
              <span className="footer-title">Connect Us</span>
              <div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Enter your email address</span>
                  </label>
                  <div className="relative">
                    <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" required />
                    <button onClick={handleConnect} className="btn btn-primary bg-gradient-to-r from-primary to-blue-800 text-white absolute top-0 right-0 rounded-l-none">Send</button>
                  </div>
                </div>
                <div className="grid grid-flow-col w-full pt-4 gap-4">
                  <a href='https://twitter.com/' target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                  <a href='https://www.youtube.com/' target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                  <a href='https://www.facebook.com/' target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
      <div className='border-t-2 mt-4'>
        <span className='text-center text-gray-300 block py-5'>© Copyright 2023 Remote Talks</span>
      </div>
    </div>
  );
};

export default Footer;