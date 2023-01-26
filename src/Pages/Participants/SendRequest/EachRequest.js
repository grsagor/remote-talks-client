import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-hot-toast';


const EachRequest = ({mongouser, users}) => {
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
    return (
        <div>
            
            <h1>{mongouser.name}</h1>
            {
                !clicked?
                <>
                    <button onClick={() => handleRequest(mongouser)} className='btn'>Send Request</button>
                </>
                :
                <>
                    <button className='btn btn-disabled'>Request Sent</button>
                </>
                }
            

        </div>
    );
};

export default EachRequest;