import { useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { CornerDisplayName } from "../utils/common";

export function ParticipantView({ participantId }) {
  const {
    displayName,
    webcamStream,
    micStream,
    webcamOn,
    micOn,
    isLocal,
    mode,
  } = useParticipant(participantId);

  const micRef = useRef(null);
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);
        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);
  const webcamMediaStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);
  return mode === "CONFERENCE" ? (
    <div
      onMouseEnter={() => {
        setMouseOver(true);
      }}
      onMouseLeave={() => {
        setMouseOver(false);
      }}
      className={`h-full w-full  relative overflow-hidden rounded-lg video-cover`}
    >
      <audio ref={micRef} autoPlay muted={isLocal} />
      {webcamOn ? (
        <ReactPlayer
          //
          playsinline // very very imp prop
          playIcon={<></>}
          //
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          //
          url={webcamMediaStream}
          //
          // className='w-full h-full'
          height={"100%"}
          width={"100%"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      ) : (
        <div className="h-full  w-full flex items-center justify-center">
          <div className="h-full  max-h-[373px]  w-full flex items-center justify-center bg-gray-800">
          <div
            className={`z-10 flex items-center justify-center rounded-full bg-base-200 2xl:h-[92px] h-[52px] 2xl:w-[92px] w-[52px]`}
          >
            <p className="text-2xl font-bold text-white">
              {String(displayName).charAt(0).toUpperCase()}
            </p>
          </div>
        </div>
        </div>
      )}
      <CornerDisplayName
        {...{
          isLocal,
          displayName,
          micOn,
          webcamOn,
          isPresenting: false,
          participantId,
          mouseOver,
        }}
      />
    </div>
  ) : null;
}
