import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import SendRequest from './SendRequest/SendRequest';
import ReceivedRequest from './ReceivedRequest/ReceivedRequest'
import { useLoaderData } from 'react-router-dom';
import SeeFriends from './SeeFriends/SeeFriends';
import '../../CommonStyles/CommonStyle.css';

const Participants = () => {
    const { user } = useContext(AuthContext);
    const receivedusers = useLoaderData();
    // const { data: receivedusers = [], refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch('https://remote-talks-server.vercel.app/users');
    //         const data = await res.json();
    //         return data;
    //     }
    // });
    const filter = ['asadkhan01862@gmail.com', 'hasanmdmahmudul222@gmail.com'];
    const users = receivedusers.filter(receiveduser => {
        return receiveduser.email !== user?.email
        // &&
        // filter?.every(mail=> mail !== receiveduser.email)
    });
    console.log(receivedusers);
    return (
        <div className=' '>
            <div className='common-width'>
                
                {
                    user &&
                    <>
                        <SendRequest users={users}></SendRequest>
                        {/* <ReceivedRequest></ReceivedRequest> */}
                        {/* <SeeFriends></SeeFriends> */}
                    </>

                }

                
            </div>
        </div>
    );
};

export default Participants;