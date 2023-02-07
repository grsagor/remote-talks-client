import {Link} from 'react-router-dom';

export function LeaveScreen({ setIsMeetingLeft }) {
  return (
    <div className="h-screen flex flex-col flex-1 items-center justify-center">
      <h1 className="text-white text-4xl">You left the meeting!</h1>
      <div className="mt-12">
        <button
          className="`w-full bg-purple-350 text-white px-16 py-3 rounded-lg text-sm"
          onClick={() => {
            setIsMeetingLeft(false);
          }}
        >
          Rejoin the Meeting
        </button>
      </div>
      <div>
        <Link to='/' className='btn mt-12'>Return to home page</Link>
      </div>
    </div>
  );
}
