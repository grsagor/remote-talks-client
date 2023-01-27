import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import SendRequest from './SendRequest/SendRequest';

const Participants = () => {
    const {user} = useContext(AuthContext);
    const { data: receivedusers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://remote-talks-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
    const filter = ['asadkhan01862@gmail.com', 'hasanmdmahmudul222@gmail.com'];
    const users = receivedusers.filter(receiveduser => {
        return receiveduser.email !== user?.email 
        // &&
        // filter?.every(mail=> mail !== receiveduser.email)
    } );
    return (
        <div>
            {/* Sending Friend Request */}
            <h1>Friend Request</h1>
            <SendRequest users={users}></SendRequest>

            {/* See all friend request */}
        </div>
    );
};

export default Participants;