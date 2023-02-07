import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { BsMessenger } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';
import '../../../CommonStyles/CommonStyle.css';


const EachRequest = ({ mongouser, users }) => {
    const { user } = useContext(AuthContext);
    const [showUser, setShowUser] = useState([]);
    const [loggedUser, setLoggedUser] = useState();
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        fetch(`https://remote-talks-server.vercel.app/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setLoggedUser(data[0]))
    }, [user])

    const showUsers = users.filter(user => {
        return loggedUser?.sentRequest?.every(mail => mail !== user.email);
    })

    const handleRequest = (mongouser) => {
        setClicked(true);
        const body = {
            requests: [user?.email, ...mongouser?.requests],
            id: mongouser?._id
        }

        fetch(`https://remote-talks-server.vercel.app/sendrequest`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Request Sent');
                }
            })

        const userbody = {
            sentRequest: [mongouser?.email, ...loggedUser?.sentRequest],
            id: loggedUser._id
        }

        fetch(`https://remote-talks-server.vercel.app/sendrequestsenderupdate`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userbody)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Request Sent');
                }
            })
    }
    console.log(mongouser)
    return (
        <div className='bg-base-200 p-4 rounded flex flex-col md:flex-row gap-3 relative'>
            <div className='flex gap-3'>
                <div>
                    <div class="avatar">
                        <div class="w-24 rounded">
                            <img src={mongouser.img} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold mb-3'>{mongouser.name}</h1>
                    <p>{mongouser.address}</p>
                    <p>{mongouser.friends}</p>
                    <p className='text-xs text-gray-200'>Joined: 12/02/2023</p>
                </div>
            </div>
            <div className='md:ml-10 lg:ml-16'>
                <p className='mb-3 pl-2'>Friends: {mongouser.friends.length}</p>
                {
                    !clicked ?
                        <>
                            <button onClick={() => handleRequest(mongouser)} className='btn md:rounded-full w-full '><span className='mr-2 text-xl '><AiOutlineUserAdd></AiOutlineUserAdd></span> Send Request</button>
                        </>
                        :
                        <>
                            <button className='btn btn-disabled md:rounded-full w-full'>Request Sent</button>
                        </>
                }
            </div>

            <div className='text-white font-bold text-4xl md:text-5xl absolute top-8 cursor-pointer hover:text-6xl right-5'>
                <BsMessenger></BsMessenger>
            </div>
        </div>
    );
};

export default EachRequest;