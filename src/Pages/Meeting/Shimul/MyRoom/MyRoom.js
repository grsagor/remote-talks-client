import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import '../../../CommonStyles/CommonStyle.css';
import { AuthContext } from '../../../context/AuthProvider';

//Live Link => https://zoom-c8b83.web.app

const MyRoom = () => {
  const {roomId} = useParams();
  const {user} =useContext(AuthContext);
  const navigate =useNavigate();
  // console.log(user.displayName);
  

  const myMeeting = async (element) => {
    // if(user?.displayName){
    //   navigate("/login")
    // }
    const appID = 85678622;
    const serverSecret = "f65699a52cbbeb407e9d90c4ff3889a7";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Your Name");
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy Link',
          url: `https://remote-talks.web.app/meeting/room/${roomId}`
        }
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showScreenSharingButton: true,
    })
  }
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default MyRoom;