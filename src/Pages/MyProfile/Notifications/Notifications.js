import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Request from './Request/Request';

const Notifications = () => {
  const {user} = useContext(AuthContext);
    const [loggedUser, setLoggedUser] = useState();

    useEffect(() => {
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
        return loggedUser?.requests?.find(mail => mail == user?.email);
    })


    return (
    <div className='flex flex-col gap-5'>
      {
        showUsers?.map(showUser => <Request
          key={showUser._id}
          showUser={showUser}
          allusers={allusers}
        ></Request>)
      }
    </div>
  );
};

export default Notifications;