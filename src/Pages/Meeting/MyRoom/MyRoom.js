import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import '../../../CommonStyles/CommonStyle.css';

//Live Link => https://zoom-c8b83.web.app

const MyRoom = () => {
  const {roomId} = useParams();

  const myMeeting = async (element) => {
    const appID = 85678622;
    const serverSecret = "f65699a52cbbeb407e9d90c4ff3889a7";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Shimul");
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy Link',
          url: `http://localhost:3000/meeting/room/${roomId}`
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