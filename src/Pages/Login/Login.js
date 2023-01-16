import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import img from '../Login/images/login.png';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = () => {

  }

  const handleGoogleSignIn = () => {

  }
  return (
    <div className='grid grid-cols-4 mx-auto my-4 gap-5 '>
      <div className='col-span-2 w-2/4 mx-auto bg-violet-400 p-5 text-black rounded'>
        <form onSubmit={handleSubmit(handleLogin)}>

          <div className="form-control w-full ">
            <label className="label"><span className="label-text text-black font-bold">Email</span></label>
            <input {...register("email", { required: "Email Address is required" })} type="text" placeholder="Enter your email" className="input input-bordered w-full" />
            {errors.email && <p className='text-error'>{errors.email?.message}</p>}
          </div>

          <div className="form-control w-full ">
            <label className="label"><span className="label-text text-black font-bold">Password</span></label>
            <input {...register("password", { required: "Password is required" })} type="password" placeholder="Enter  your password" className="input input-bordered w-full" />
            {errors.password && <p className='text-error'>{errors.password?.message}</p>}
            <label className="label"><span className="label-text text-black font-bold">Forgot Password?</span></label>
          </div>

          <input className='btn btn-primary w-full font-bold' value='Login' type="submit" />
        </form>

        <p className='pt-1'>New to the website!please <Link className='font-semibold' to='/signup'>SIGN UP</Link> first.</p>


        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full my-4 text-black'>Continue With Google</button>
      </div>
      <div className='col-span-2 w-3/4'>
         <img src={img}></img>
      </div>
      

    </div>
  );
};

export default Login;