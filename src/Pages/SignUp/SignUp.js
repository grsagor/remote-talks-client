import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../src/assets/images/loginImage5.jpg';
import img2 from '../../../src/assets/images/loginImage3.jpg';
import img3 from '../../../src/assets/images/banner6.webp';
import { AuthContext } from '../../context/AuthProvider';
import { success } from 'daisyui/src/colors';
import { toast } from 'react-hot-toast';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Successfully signed up');
        navigate('/login');
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="hero p-5 bg-base-100">
      <div className="hero-content grid md:grid-cols-2 gap-8 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className='w-full h-full rounded-3xl' src={img2} alt="" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl ml-3 bg-base-200">

          <form className='card-body' onSubmit={handleSubmit(handleSignUp)}>
            <h2 className='text-2xl font-bold'>Please Register !!!</h2>
            <div className="form-control w-full">
              <label className="label"><span className="label-text">Name</span></label>
              <input {...register("name")} type="text" placeholder="Enter name" className="input input-bordered w-full" />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Enter Picture</span></label>
              <input {...register("image")} type="file" placeholder="Enter Picture" className="input input-bordered w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Email</span></label>
              <input {...register("email")} type="email" placeholder="Enter email" className="input input-bordered w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Password</span></label>
              <input {...register("password")} type="password" placeholder="Enter password" className="input input-bordered w-full" />
            </div>

            <input className='btn btn-primary w-full mt-3 bg-gradient-to-r from-primary to-blue-800 text-white' value='Sign Up' type="submit" />
          </form>
          <p className='text-center mt-0 mb-3'>If you don't have any account, please <Link className='font-semibold' to='/login'>Login</Link>.</p>

        </div>
      </div>
    </div>
  );
};

export default SignUp;