import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = () => {

  }

  const handleGoogleSignIn = () => {

  }
  return (
    <div className='w-3/4 mx-auto my-4'>
      <form onSubmit={handleSubmit(handleLogin)}>

        <div className="form-control w-full">
          <label className="label"><span className="label-text">Email</span></label>
          <input {...register("email", { required: "Email Address is required" })} type="text" placeholder="Enter email" className="input input-bordered w-full" />
          {errors.email && <p className='text-error'>{errors.email?.message}</p>}
        </div>

        <div className="form-control w-full">
          <label className="label"><span className="label-text">Password</span></label>
          <input {...register("password", { required: "Password is required" })} type="password" placeholder="Enter password" className="input input-bordered w-full" />
          {errors.password && <p className='text-error'>{errors.password?.message}</p>}
          <label className="label"><span className="label-text">Forgot Password?</span></label>
        </div>

        <input className='btn btn-primary w-full' value='Login' type="submit" />
      </form>

      <p>If you don't have any account, please <Link className='font-semibold' to='/signup'>Sign Up</Link>.</p>


      <button onClick={handleGoogleSignIn} className='btn btn-outline w-full my-4'>Continue With Google</button>
    </div>
  );
};

export default Login;