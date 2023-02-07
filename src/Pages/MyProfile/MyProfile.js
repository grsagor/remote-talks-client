// import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Spinner from '../Shared/Spinner/Spinner';
import { BiEdit } from 'react-icons/bi';
import Request from './Notifications/Request/Request';
import Notifications from './Notifications/Notifications';
import { toast } from 'react-hot-toast';
import Friends from './Friends/Friends';


const MyProfile = () => {
  const { user, loading } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true);

  // const url = `http://localhost:5000/users/asadkhan01862@gmail.com`

  const url = `https://remote-talks-server-two.vercel.app/users/${user?.email}`
  // if (user) {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data)
  //       console.log(data);
  //       setLoader(false)
  //     })
  // }

  useEffect( () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setData(data)
      console.log(data);
      setLoader(false)
    })
  },[user])


  const handleUpdateProfules = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const img = form.photoURL.value;
    const university = form.university.value;
    const address = form.address.value;
    const newData = {
      name,
      email,
      img,
      university,
      address
    }
    console.log(newData);

    fetch(`https://remote-talks-server-two.vercel.app/users/${data._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success("Your Information Update Successfully")
          navigate('/')
          // navigate('/profile')
          setLoader(false)
        }
        console.log(data);
      })

  }

  if (loader) {
    return <div className='py-28'><Spinner></Spinner></div>
  }

  return (
    <div className='common-width'>
      {/* <h1>This is Profile section</h1> */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pb-24'>
        <div className='w-full'>
          <div className='flex justify-end bg-base-300'> <label htmlFor="my-modal-3" className="btn btn-outline btn-primary mt-4 mr-4 text-2xl"><BiEdit></BiEdit></label></div>
          <div className='flex flex-col bg-base-300 items-center justify-center'>
            <div className='w-full'>
              <div className="avatar justify-center w-full">
                <div className="w-1/2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {
                    user ? <img className='w-full' src={data.img} alt="" /> : <img className='w-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                  }
                </div>
              </div>
            </div>
            <div className='p-3 lg:p-6 text-center w-full'>
              <div className='flex justify-between'>
                <p className='text- font-semibold w-full text-center'>Name </p><span className='font-normal w-full text-start'>: {data.name}</span>
              </div>
              <div className='flex justify-between'>
                <p className='text- font-semibold w-full text-center'>Email </p><span className='font-normal w-full text-start'>: {data.email}</span>
              </div>
              <div className='flex justify-between'>
                <p className='text- font-semibold w-full text-center'>Address </p><span className='font-normal w-full text-start'>: {data.address}</span>
              </div>
              <div className='flex justify-between'>
                <p className='text- font-semibold w-full text-center'>University </p><span className='font-normal w-full text-start'>: {data.university}</span>
              </div>
              {/* <p className='text-xl font-semibold'>Email: <span className='font-normal'>{data.email}</span></p>
              <p className='text-xl font-semibold'>Address: <span className='font-normal'>{data.location}</span></p>
              <p className='text-xl font-semibold'>University/Collage: <span className='font-normal'>{data.university}</span></p> */}
            </div>
          </div>
          {/* The button to open modal */}
          {/* <label htmlFor="my-modal-3" className="btn btn-accent">Edit</label> */}

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative modal-bg-color shadow-2xl">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Update your profiles information</h3>
              {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
              <div>
                <form onSubmit={handleUpdateProfules} className='grid grid-cols-1 gap-3 mt-10'>
                  <span className='p-0 m-0 font-semibold'>Full name</span>
                  <input name="name" type="text" defaultValue={data.name} placeholder="Your Name" className="input w-full input-bordered" required />
                  <span className='p-0 m-0 font-semibold'>Email</span>
                  <input name="email" type="email" defaultValue={user?.email} readOnly placeholder="Email Address" className="input w-full input-bordered" required />
                  <span className='p-0 m-0 font-semibold'>University/Collage</span>
                  <input name="university" type="text" defaultValue={data.university} placeholder="Your University" className="input w-full input-bordered" required />
                  <span className='p-0 m-0 font-semibold'>Address</span>
                  <input name="address" type="text" defaultValue={data.address} placeholder="Your address" className="input w-full input-bordered" required />
                  <span className='p-0 m-0 font-semibold'>Profile URL</span>
                  <input name="photoURL" type="url" defaultValue={data.img} placeholder="Your address" className="input w-full input-bordered" required />
                  {/* <textarea name="location" placeholder="Your Meeting location" className="textarea w-full textarea-bordered" required ></textarea> */}
                  <br />
                  {
                    user?.email ? <input className='btn btn-primary bg-green-700 hover:bg-warning text-white w-full' type="submit" value="Update Now" /> : <Link to='/login'><input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full' type="text" value="Please login before the Update" /></Link>
                  }
                </form>
              </div>
            </div>
          </div>



          {/*========================================
                   Friends Request section  
           ======================================= */}
          <div className=''>
            <p className='p-5 w-full text-2xl font-bold'>All Connected</p>
              <Friends></Friends>
          </div>
        </div>
        

        {/* Rigth section code hare >>>> */}
        <div>
          <h1 className='p-5 font-bold text-3xl'>Recently activity</h1>
          <div className='flex flex-row gap-5'>
            <div className='flex flex-col items-center'>
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
                </div>
              </div>
              <p className='text-sm'>Sultan Ma..</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://st3.depositphotos.com/7158420/16888/i/600/depositphotos_168883958-stock-photo-bearded-man-portrait.jpg" />
                </div>
              </div>
              <p className='text-sm'>Sultan Ma..</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
                </div>
              </div>
              <p className='text-sm'>Sultan Ma..</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://media.istockphoto.com/id/481864562/photo/passport-picture-of-a-cool-guy-in-a-blue-shirt.jpg?b=1&s=170667a&w=0&k=20&c=s0m7NeznKVBuoei_pCPuvUUoX7TUCsC9ZjEEedz2H_o=" />
                </div>
              </div>
              <p className='text-sm'>Sultan Ma..</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://st4.depositphotos.com/16122460/25466/i/600/depositphotos_254661340-stock-photo-man-showing-thank-you-gesture.jpg" />
                </div>
              </div>
              <p className='text-sm'>Sultan Ma..</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://thumbs.dreamstime.com/b/stay-away-me-reluctant-young-man-step-back-hands-stretch-out-defensive-gesture-protecting-himself-standing-over-white-229609711.jpg" />
                </div>
              </div>
              <p className='text-sm'>Sultan Ma..</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://thumbs.dreamstime.com/b/satisfied-young-man-smiling-showing-okay-gesture-approve-something-good-praising-excellent-thing-standing-blue-satisfied-208636260.jpg" />
                </div>
              </div>
              <p className='text-sm'>Sultan Ma..</p>
            </div>

          </div>



          {/*========================================
                      Activity Notifications  
           ======================================= */}
          <div>
            <h2 className='p-5 mt-10 font-bold text-3xl'>Notifications</h2>
            <Notifications></Notifications>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;