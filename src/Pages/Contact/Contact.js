import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaSearchLocation,FaMailBulk } from 'react-icons/fa';
import { toast } from 'react-hot-toast';



const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_st6fwnc', 'template_gn3vvme', form.current, '7aO1ykPe7-G3wM_L3')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
                toast.success('Your message has been sent. Thanks')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="hero p-5  mt-5 bg-base-100">
            <div className="hero-content grid md:grid-cols-2 gap-24 flex-col lg:flex-row mb-5">

                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl ml-3 bg-base-200">
                    <form ref={form} onSubmit={sendEmail} className="card-body">
                        <h2 className='text-2xl font-bold'>Contact With Us</h2>
                        <div className="form-control w-full">
                            <label><span className="label-text ">Name</span></label>
                            <input type="text" name="user_name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input {...register("email", { required: "Email Address is required" })} name="user_email" type="text" placeholder="" className="input input-bordered w-full" />
                            {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                        </div>
                        <div className='w-full'>
                            <label><span className="label-text">Message</span></label><br />
                            <textarea name="message" className="input input-bordered w-full " />
                        </div>
                        <input className='btn btn-primary bg-gradient-to-r from-primary to-blue-800 text-white w-full' value='SEND' type="submit" />
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <div className='flex m-10'>
                        <div ><FaSearchLocation className='h-10 w-10 text-blue-300 '></FaSearchLocation> </div>
                        <div className='mx-5'>
                            <p className='text-xl'>Address</p>
                            <p>Dhaka,Bangladesh.</p>
                        </div>

                    </div>
                    <div className='flex m-10'>
                        <div ><FaPhoneAlt className='h-10 w-10 text-blue-300'></FaPhoneAlt> </div>
                        <div className='mx-5'>
                            <p className='text-xl'>Phone</p>
                            <p>01724384380</p>
                        </div>
                    </div>
                    <div className='flex m-10'>
                        <div ><FaMailBulk className='h-10 w-10 text-blue-300'></FaMailBulk> </div>
                        <div className='mx-5'>
                            <p className='text-xl'>Email</p>
                            <a href="mailto:remotetalks6@gmail.com">remotetalks6@gmail.com</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default Contact;