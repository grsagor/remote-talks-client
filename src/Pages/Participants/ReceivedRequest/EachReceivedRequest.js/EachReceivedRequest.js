import React from 'react';

const EachReceivedRequest = ({showUser, allusers}) => {
    return (
        <div>
            <h1>{showUser?.name}</h1>
        </div>
    );
};

export default EachReceivedRequest;