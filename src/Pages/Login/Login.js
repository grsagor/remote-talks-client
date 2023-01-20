import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../src/assets/images/loginImage3.jpg';
import img2 from '../../../src/assets/images/loginImage5.jpg';
import img3 from '../../../src/assets/images/banner6.webp';
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from '@firebase/auth';
import { toast } from 'react-hot-toast';


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {LogIn,googleLogIn} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();


  const handleLogin = (data) => {
      console.log(data);
      LogIn(data.email,data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('Login Successfully');
            navigate('/');
        })
        .catch(error =>{
            console.log(error)
        });
  }

  const handleGoogleSignIn = () => {
    googleLogIn(googleProvider)
    .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Login Successfully');
            navigate('/');
        })
        .catch(error => {
            console.error(error);
        })
  }

  return (
    <div className="hero p-5 bg-base-100">
      <div className="hero-content grid md:grid-cols-2 gap-8 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className='w-full h-4/5 rounded-3xl' src={img2} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl ml-3 bg-base-200">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <h2 className='text-2xl font-bold'>Please Login !!!</h2>
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

            <input className='btn btn-primary bg-gradient-to-r from-primary to-blue-800 text-white' value='Login' type="submit" />
          </form>

          <p className='text-center'>If you don't have any account, please <Link className='font-semibold' to='/signup'>Sign Up</Link>.</p>

          <button onClick={handleGoogleSignIn} className='btn btn-outline text-secondary w-full mt-4'>Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;