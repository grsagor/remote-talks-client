import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import EachReceivedRequest from './EachReceivedRequest.js/EachReceivedRequest';

const ReceivedRequest = () => {
    const {user} = useContext(AuthContext);
    const [loggedUser, setLoggedUser] = useState();

    useEffect(() => {
        refetch();
        fetch(`https://remote-talks-server.vercel.app/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setLoggedUser(data[0]))
    }, [])

    const { data: allusers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://remote-talks-server.vercel.app/users`);
            const data = await res.json();
            return data;
        }
    });
    const showUsers = allusers?.filter(user=> {
        return loggedUser?.requests?.every(mail => mail == user?.email);
    })
    console.log(allusers);
    return (
        <div>
            <h1 className='font-extrabold text-xl my-2'>Received Request</h1>
            {
                
                user ?
                    <>{
                            showUsers?.map(showUser => <EachReceivedRequest
                                key={showUser._id}
                                showUser={showUser}
                                allusers={allusers}
                            ></EachReceivedRequest>)
                            }
                        </>
                    :
                    <>
                        <h1>Loading</h1>
                    </>
            }
        </div>
    );
};

export default ReceivedRequest;