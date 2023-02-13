import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Request = ({showUser, loggedUser, refetch}) => {
  const [updateReceive, setUpdateReceive] = useState([]);

  const handleAccept = () => {
    /* 1 */
    const updatedRequest = loggedUser?.requests?.filter(request => request !== showUser?.email);
    const bodyupdatedRequest = {
      requests: updatedRequest,
      id: loggedUser?._id
  }
    // console.log(updatedRequest);
    fetch(`https://remote-talks-server.vercel.app/acceptupdatedRequest`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bodyupdatedRequest)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // toast.success('Request Accepted');
                }
            })
    /* 1 */

    /* 2 */


    const updateSendRequest = showUser?.sentRequest?.filter(request => request !== loggedUser?.email);
    const bodyupdateSendRequest = {
      sentRequest: updateSendRequest,
      id: showUser?._id
  }
    console.log(updateSendRequest);

    fetch(`https://remote-talks-server.vercel.app/acceptupdateSendRequest`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bodyupdateSendRequest)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // toast.success('Request Accepted');
                }
            })

    /* 2 */

    /* 3 */

    const updateShowuserFriend = [loggedUser.email, ...showUser.friends];
    const bodyupdateShowuserFriend = {
      friends: updateShowuserFriend,
      id: showUser?._id
  }
    console.log(updateSendRequest);

    fetch(`https://remote-talks-server.vercel.app/acceptupdateShowuserFriend`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bodyupdateShowuserFriend)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // toast.success('Request Accepted');
                }
            })


    /* 3 */

    /* 4 */

    const updateLoggeduserFriend = [showUser.email, ...loggedUser.friends];
    const bodyupdateLoggeduserFriend = {
      friends: updateLoggeduserFriend,
      id: loggedUser?._id
  }
    console.log(updateSendRequest);

    fetch(`https://remote-talks-server.vercel.app/acceptupdateShowuserFriend`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bodyupdateLoggeduserFriend)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Request Accepted');
                    refetch();
                }
            })

    /* 4 */
  }

  /* **********************************************************************************
  Handle Remove Started
  ***********************************************************************************/
 const handleRemove = ( ) => {
      /* 1 */
      const updatedRequest = loggedUser?.requests?.filter(request => request !== showUser?.email);
      const bodyupdatedRequest = {
        requests: updatedRequest,
        id: loggedUser?._id
    }
      // console.log(updatedRequest);
      fetch(`https://remote-talks-server.vercel.app/acceptupdatedRequest`, {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(bodyupdatedRequest)
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data)
                  if (data.modifiedCount > 0) {
                      // toast.success('Request Accepted');
                  }
              })
      /* 1 */
  
      /* 2 */
  
  
      const updateSendRequest = showUser?.sentRequest?.filter(request => request !== loggedUser?.email);
      const bodyupdateSendRequest = {
        sentRequest: updateSendRequest,
        id: showUser?._id
    }
      console.log(updateSendRequest);
  
      fetch(`https://remote-talks-server.vercel.app/acceptupdateSendRequest`, {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(bodyupdateSendRequest)
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data)
                  if (data.modifiedCount > 0) {
                      toast.success('Request Removed');
                  }
              })
  
      /* 2 */
 }
  /* **********************************************************************************
  Handle Remove End
  ***********************************************************************************/

  return (
    <div className='flex gap-5 p-4 shadow-xl rounded-sm bg-base-200'>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={showUser.img} />
        </div>
      </div>
      <div className='w-full'>
        <div className='flex justify-between items-center'>
        <p className='font-bold m-0'>{showUser?.name}</p>
        {/* <span className='text-xs text-gray-300'>21-01-2023</span> */}
        </div>
        <span className='text-xs text-gray-300'>{showUser?.email}</span>
        <div className='flex justify-start items-center'>
        <button onClick={handleAccept} className="connect-btn mr-3">Connect</button>
        <button onClick={handleRemove} className="remove-btn">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Request;