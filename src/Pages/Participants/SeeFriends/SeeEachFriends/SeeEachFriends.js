import React from 'react';

const SeeEachFriends = ({showUser, allusers}) => {
    return (
        <div className='mb-5 bg-violet-900 p-4 rounded mx-4'>
            <h1 className='font-bold mb-3'>{showUser?.name}</h1>
            <div className=''>
                <p className='btn rounded-full'>See Profile</p>
                <p className='btn rounded-full ml-3'>Remove as friend</p>
            </div>
        </div>
    );
};

export default SeeEachFriends;