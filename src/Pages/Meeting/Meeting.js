import React, { useEffect, useState } from 'react';
import { getMeetingId, getToken, createMeeting } from './Api/Api';
import { Row, Col } from 'react-simple-flex-grid';
import '../../CommonStyles/CommonStyle.css';
import "react-simple-flex-grid/lib/main.css";
import { BsMic } from 'react-icons/bs';
import { FiCamera } from 'react-icons/fi';
import { MdOutlineScreenShare } from 'react-icons/md';
import createMeetingImg from '../../assets/Meeitng-img/84726-business-meeting-animation.gif';
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant
} from "@videosdk.live/react-sdk";
import { useRef } from 'react';

const chunk = (arr) => {
  const newArr = [];
  while (arr.length) newArr.push(arr.splice(0, 3));
  return newArr;
};

function ParticipantView(props) {
  const webcamRef = useRef(null);
  const micRef = useRef(null);
  const screenShareRef = useRef(null);

  const {
    displayName,
    webcamStream,
    micStream,
    screenShareStream,
    webcamOn,
    micOn,
    screenShareOn
  } = useParticipant(props.participantId);

  useEffect(() => {
    if (webcamRef.current) {
      // if(!webcamOn){
      //   webcamRef.current.srcObject = null;
      // }
      if (webcamOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);

        webcamRef.current.srcObject = mediaStream;
        webcamRef.current
          .play()
          .catch((error) =>
            console.log("videoElem.current.play() failed", error)
          );
      }
      else {
        webcamRef.current.srcObject = null;
      }
    }
  }, [webcamOn]);
  // },[webcamStream,webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.log("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micOn])
  // },[micStream, micOn])

  useEffect(() => {
    if (screenShareRef.current) {
      if (screenShareOn) {
        const mediaStream = new MediaStream();
        mediaStream?.addTrack(screenShareStream?.track);

        screenShareRef.current.srcObject = mediaStream;
        screenShareRef.current
          .play()
          .catch((error) =>
            console.log("videoElem.current.play() failed", error)
          );
      } else {
        screenShareRef.current.srcObject = null;
      }
    }
  }, [screenShareStream, screenShareOn])

  return (
    <div key={props.participantId}>
      <audio ref={micRef} autoPlay />
      {webcamRef ?
        (
          <div className='w-full flex justify-center items-center'>
            <div>
              <h2>{displayName}</h2>
              <video
                height={"100%"}
                width={"100%"}
                ref={webcamRef}
                autoPlay
              />
            </div>
          </div>
        )
        :
        null
      }
      {
        screenShareOn ? (
          <div>
            <h2>Screen Shared</h2>
            <video
              height={"100%"}
              width={"100%"}
              ref={screenShareRef}
              autoPlay
            />
          </div>)
          :
          null
      }
      <br />
      <span>
        Mic:{micOn ? "Yes" : "No"}
        Camera: {webcamOn ? "Yes" : "No"}
        ScreenShare: {screenShareOn ? "Yes" : "No"}
      </span>
    </div>
  )
}

function MeetingGrid(props) {
  const [joined, setJoined] = useState(false);
  const {
    join,
    leave,
    toggleMic,
    toggleWebcam,
    toggleScreenShare,
  } = useMeeting();
  const { participants } = useMeeting();
  const joinMeeting = () => {
    setJoined(true);
    join();
  }
  return (
    <div className='meeting-bg h-screen '>
      <div className='common-width'>
        {/* <header>Meeting Id: {props.meetingId}</header> */}
        {
          joined ?
            (
              <div className='w-9/12 mx-auto flex justify-around pt-8'>
                <button onClick={() => toggleMic()} class="btn btn-outline btn-secondary">
                  <span className='text-2xl text-white mr-2'><BsMic></BsMic></span>  toggle Mic
                </button>
                <button onClick={() => toggleWebcam()} class="btn btn-outline btn-secondary">
                  <span className='text-2xl text-white mr-2'><FiCamera></FiCamera></span> Toggle Webcam
                </button>
                <button onClick={toggleScreenShare} class="btn btn-outline btn-secondary">
                  <span className='text-2xl text-white mr-2'><MdOutlineScreenShare></MdOutlineScreenShare></span> Screen Share
                </button>
                <button onClick={leave} className="btn btn-error">
                  Leave
                </button>
              </div>
            ) :
            (
              <div className='w-full h-screen flex justify-center items-center'>
                <button onClick={joinMeeting} class="btn btn-active btn-secondary text-white">
                  Join Now
                </button>
              </div>
            )
        }
        <div>
          {chunk([...participants.keys()]).map((k) => (
            <Row
              key={k}
              gutter={80}
            >
              {
                k.map((l) => (
                  <Col span={4}>
                    <ParticipantView
                      key={l}
                      participantId={l}
                    />
                  </Col>
                ))
              }
            </Row>
          ))}
        </div>
      </div>
    </div>
  )
}

function JoinScreen({ updateMeetingID, getMeetingAndToken }) {
  return (
    <div className='meeting-bg pb-20 lg:pb-0 lg:h-screen'>
      <div className='common-width '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-24'>
          <div className='flex items-center justify-center'>
            <img className='w-full md:w-3/4' src={createMeetingImg} alt="" />
          </div>
          <div className=''>
            <h1 className='text-4xl font-bold py-5'>Premium video meetings. Now free for everyone.</h1>
            <p className='pb-8 text-gray-300'>We re-engineered the service we built for secure business meetings, Remote Talks, to make it free and available for all.</p>
            <div className='w-full  lg:w-3/4 py-7'>
              <div className='w-full pb-4 relative'>
                <input type="text" placeholder='Enter Your Meeting ID' className="input input-bordered input-secondary w-full " onChange={(e) => {
                  updateMeetingID(e)
                }} />
                <button onClick={getMeetingAndToken} className="btn  btn-secondary bg-gradient-to-r from-secondary to-blue-800 text-white absolute top-0 right-0">Join</button>
              </div>
              <button onClick={getMeetingAndToken} className="btn btn-outline btn-secondary w-full">Create Meeting</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Meeting = () => {
  const [token, setToken] = useState(null);
  const [meetingId, setMeetingId] = useState(null);
  const getMeetingToken = async () => {
    const token = await getToken();
    setToken(token);
    setMeetingId(meetingId ? meetingId : (await createMeeting({ token })));
  };

  const updateMeetingID = (meetingId) => {
    setMeetingId(meetingId);
  }
  // console.log("meetingId", meetingId);
  // useEffect(()=> {
  //   getMeetingToken();
  // },[])
  // console.log(token);

  return token && meetingId ? (
    <MeetingProvider
      config={
        {
          meetingId,
          micEnabled: false,
          webcamEnabled: false,
          name: "John doe",
        }
      }
      token={token}
    >
      <MeetingConsumer>
        {() => <MeetingGrid meetingId={meetingId} getMeetingAndToken={getMeetingToken}></MeetingGrid>}
      </MeetingConsumer>
    </MeetingProvider>
  )
    :
    (
      <JoinScreen
        updateMeetingID={updateMeetingID} getMeetingAndToken={getMeetingToken}
      ></JoinScreen>
    )
};

export default Meeting;