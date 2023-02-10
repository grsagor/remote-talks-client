import React from 'react';

const EachReceivedRequest = ({showUser, allusers}) => {
    return (
        <div className='mb-5 bg-violet-900 p-4 rounded mx-4'>
            <h1 className='font-bold mb-3'>{showUser?.name}</h1>
            <div className=''>
                <p className='btn rounded-full w-1/5'>Accept</p>
                <p className='btn rounded-full w-1/5 ml-3'>Decline</p>
            </div>
        </div>
    );
};

export default EachReceivedRequest;