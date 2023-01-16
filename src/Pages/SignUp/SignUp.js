import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignUp = () => {

  }

  return (
    <div>
      <form className='w-3/4 mx-auto' onSubmit={handleSubmit(handleSignUp)}>

        <div className="form-control w-full">
          <label className="label"><span className="label-text">Name</span></label>
          <input {...register("name")} type="text" placeholder="Enter name" className="input input-bordered w-full" />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label"><span className="label-text">Enter Picture</span></label>
          <input {...register("image")} type="file" placeholder="Enter Picture" className="input input-bordered w-full max-w-xs" />
        </div>

        <div className="form-control w-full">
          <label className="label"><span className="label-text">Email</span></label>
          <input {...register("email")} type="email" placeholder="Enter email" className="input input-bordered w-full" />
        </div>

        <div className="form-control w-full">
          <label className="label"><span className="label-text">Password</span></label>
          <input {...register("password")} type="password" placeholder="Enter password" className="input input-bordered w-full" />
        </div>

        <input className='btn btn-primary w-full mt-4' value='Sign Up' type="submit" />
      </form>
      <p>If you don't have any account, please <Link className='font-semibold' to='/login'>Lonin</Link>.</p>

    </div>
  );
};

export default SignUp;