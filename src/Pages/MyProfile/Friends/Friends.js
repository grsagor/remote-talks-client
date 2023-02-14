import React from 'react';
import { useQuery } from '@tanstack/react-query';
import FriendCard from './FriendCard/FriendCard';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useEffect } from 'react';

const Friends = ({ data }) => {

  const { user } = useContext(AuthContext);
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
  const showUsers = allusers?.filter(user => {
    return loggedUser?.friends?.find(mail => mail == user?.email);
  })

  return (
    <div>
      <h1 className='p-5 w-full text-2xl font-bold'>All Connected {showUsers.length}</h1>

      <div className='grid grid-cols-3 gap-5'>
        {

          user ?
            <>{
              showUsers?.map(showUser => <FriendCard
                key={showUser._id}
                showUser={showUser}
                allusers={allusers}
              ></FriendCard>)
            }
            </>
            :
            <>
              <h1>Loading</h1>
            </>
        }
      </div>
    </div>
  );
};

export default Friends;