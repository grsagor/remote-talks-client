import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import SeeEachFriends from './SeeEachFriends/SeeEachFriends';

const SeeFriends = () => {
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
        return loggedUser?.friends?.every(mail => mail == user?.email);
    })
    console.log(showUsers);
    return (
        <div>
            <h1 className='font-extrabold text-xl my-2'>Frineds</h1>
            {
                
                user ?
                    <>{
                            showUsers?.map(showUser => <SeeEachFriends
                                key={showUser._id}
                                showUser={showUser}
                                allusers={allusers}
                            ></SeeEachFriends>)
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

export default SeeFriends;