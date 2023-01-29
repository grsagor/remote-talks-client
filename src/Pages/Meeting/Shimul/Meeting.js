import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CommonStyles/CommonStyle.css';

// https://brilliant-salamander-5f1195.netlify.app/

const Meeting = () => {
  const navigate = useNavigate();

  const handleJoin = (event) => {
    event.preventDefault();
    const roomId = event.target.roomCode.value;
    console.log(roomId);
    navigate(`room/${roomId}`)
  }
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="lg:text-5xl text-3xl md:text-4xl lg:w-5/6 font-bold">Premium video meetings. Now free for everyone.</h1>
            <p className="py-6 text-xl text-gray-400">We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.</p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleJoin}  className="card-body">
                <div className='text-center'>
                <h1 className='text-2xl inline-block text-white font-semibold text-center room-create-border p-2'>Create a new meeting</h1>
                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your room code</span>
                </label>
                <input name='roomCode' type="text" required placeholder="Enter your room code" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Create" className="btn btn-primary bg-gradient-to-r from-primary to-blue-800 text-white" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;