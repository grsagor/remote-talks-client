import { useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import useIsTab from "../hooks/useIsTab";
import useResponsiveSize from "../hooks/useResponsiveSize";
import { CloseOutlined, MicOff } from "@material-ui/icons";
import NetworkIcon from "../icons/NetworkIcon";
import { Popover } from "@material-ui/core";

export const json_verify = (s) => {
  try {
    JSON.parse(s);
    return true;
  } catch (e) {
    return false;
  }
};

export function getQualityScore(stats) {
  const packetLossPercent = stats.packetsLost / stats.totalPackets || 0;
  const jitter = stats.jitter;
  const rtt = stats.rtt;
  let score = 100;
  score -= packetLossPercent * 50 > 50 ? 50 : packetLossPercent * 50;
  score -= ((jitter / 30) * 25 > 25 ? 25 : (jitter / 30) * 25) || 0;
  score -= ((rtt / 300) * 25 > 25 ? 25 : (rtt / 300) * 25) || 0;
  return score / 10;
}

export function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

export const trimSnackBarText = (text = "") => {
  const maxLength = 52;

  return text.length > maxLength ? `${text.substr(0, maxLength - 5)}...` : text;
};

export const nameTructed = (name, tructedLength) => {
  if (name?.length > tructedLength) {
    if (tructedLength === 15) {
      return `${name.substr(0, 12)}...`;
    } else {
      return `${name.substr(0, tructedLength)}...`;
    }
  } else {
    return name;
  }
};

export const sideBarModes = {
  PARTICIPANTS: "PARTICIPANTS",
  CHAT: "CHAT",
  LAYOUT: "LAYOUT",
  POLLS: "POLLS",
  CREATE_POLL: "CREATE_POLL",
  ECOMMERCE: "ECOMMERCE",
};

export const meetingTypes = {
  MEETING: "MEETING",
  ILS: "ILS",
};

export const meetingLayoutTopics = {
  MEETING_LAYOUT: "MEETING_LAYOUT",
  RECORDING_LAYOUT: "RECORDING_LAYOUT",
  LIVE_STREAM_LAYOUT: "LIVE_STREAM_LAYOUT",
  HLS_LAYOUT: "HLS_LAYOUT",
};

export function debounce(func, wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

export const CornerDisplayName = ({
  participantId,
  isPresenting,
  displayName,
  isLocal,
  micOn,
  screenShareStream,
  mouseOver,
}) => {
  const isMobile = useIsMobile();
  const isTab = useIsTab();

  const analyzerSize = useResponsiveSize({
    xl: 32,
    lg: 28,
    md: 24,
    sm: 20,
    xs: 18,
  });

  const show = useMemo(() => mouseOver, [mouseOver]);

  const {
    webcamStream,
    micStream,
    getVideoStats,
    getAudioStats,
    getShareStats,
  } = useParticipant(participantId);

  const statsIntervalIdRef = useRef();
  const [score, setScore] = useState({});
  const [audioStats, setAudioStats] = useState({});
  const [videoStats, setVideoStats] = useState({});

  const [downArrow, setDownArrow] = useState(null);
  const handleClick = (event) => {
    setDownArrow(event.currentTarget);
  };

  const handleClose = () => {
    setDownArrow(null);
  };

  const updateStats = async () => {
    let stats = [];
    let audioStats = [];
    let videoStats = [];
    if (isPresenting) {
      stats = await getShareStats();
    } else if (webcamStream) {
      stats = await getVideoStats();
    } else if (micStream) {
      stats = await getAudioStats();
    }

    if (webcamStream || micStream || isPresenting) {
      videoStats = isPresenting ? await getShareStats() : await getVideoStats();
      audioStats = isPresenting ? [] : await getAudioStats();
    }

    // setScore(stats?.score);
    let score = stats
      ? stats.length > 0
        ? getQualityScore(stats[0])
        : 100
      : 100;

    setScore(score);
    setAudioStats(audioStats);
    setVideoStats(videoStats);
  };

  const qualityStateArray = [
    { label: "", audio: "Audio", video: "Video" },
    {
      label: "Latency",
      audio:
        audioStats && audioStats[0]?.rtt ? `${audioStats[0]?.rtt} ms` : "-",
      video:
        videoStats && videoStats[0]?.rtt ? `${videoStats[0]?.rtt} ms` : "-",
    },
    {
      label: "Jitter",
      audio:
        audioStats && audioStats[0]?.jitter
          ? `${parseFloat(audioStats[0]?.jitter).toFixed(2)} ms`
          : "-",
      video:
        videoStats && videoStats[0]?.jitter
          ? `${parseFloat(videoStats[0]?.jitter).toFixed(2)} ms`
          : "-",
    },
    {
      label: "Packet Loss",
      audio: audioStats
        ? audioStats[0]?.packetsLost
          ? `${parseFloat(
              (audioStats[0]?.packetsLost * 100) / audioStats[0]?.totalPackets
            ).toFixed(2)}%`
          : "-"
        : "-",
      video: videoStats
        ? videoStats[0]?.packetsLost
          ? `${parseFloat(
              (videoStats[0]?.packetsLost * 100) / videoStats[0]?.totalPackets
            ).toFixed(2)}%`
          : "-"
        : "-",
    },
    {
      label: "Bitrate",
      audio:
        audioStats && audioStats[0]?.bitrate
          ? `${parseFloat(audioStats[0]?.bitrate).toFixed(2)} kb/s`
          : "-",
      video:
        videoStats && videoStats[0]?.bitrate
          ? `${parseFloat(videoStats[0]?.bitrate).toFixed(2)} kb/s`
          : "-",
    },
    {
      label: "Frame rate",
      audio: "-",
      video:
        videoStats &&
        (videoStats[0]?.size?.framerate === null ||
          videoStats[0]?.size?.framerate === undefined)
          ? "-"
          : `${videoStats ? videoStats[0]?.size?.framerate : "-"}`,
    },
    {
      label: "Resolution",
      audio: "-",
      video: videoStats
        ? videoStats && videoStats[0]?.size?.width === null
          ? "-"
          : `${videoStats[0]?.size?.width}x${videoStats[0]?.size?.height}`
        : "-",
    },
    {
      label: "Codec",
      audio: audioStats && audioStats[0]?.codec ? audioStats[0]?.codec : "-",
      video: videoStats && videoStats[0]?.codec ? videoStats[0]?.codec : "-",
    },
    {
      label: "Cur. Layers",
      audio: "-",
      video:
        videoStats && !isLocal
          ? videoStats && videoStats[0]?.currentSpatialLayer === null
            ? "-"
            : `S:${videoStats[0]?.currentSpatialLayer || 0} T:${
                videoStats[0]?.currentTemporalLayer || 0
              }`
          : "-",
    },
    {
      label: "Pref. Layers",
      audio: "-",
      video:
        videoStats && !isLocal
          ? videoStats && videoStats[0]?.preferredSpatialLayer === null
            ? "-"
            : `S:${videoStats[0]?.preferredSpatialLayer || 0} T:${
                videoStats[0]?.preferredTemporalLayer || 0
              }`
          : "-",
    },
  ];

  useEffect(() => {
    if (webcamStream || micStream) {
      updateStats();

      if (statsIntervalIdRef.current) {
        clearInterval(statsIntervalIdRef.current);
      }

      statsIntervalIdRef.current = setInterval(updateStats, 500);
    } else {
      if (statsIntervalIdRef.current) {
        clearInterval(statsIntervalIdRef.current);
        statsIntervalIdRef.current = null;
      }
    }

    return () => {
      if (statsIntervalIdRef.current) clearInterval(statsIntervalIdRef.current);
    };
  }, [webcamStream, micStream]);

  return (
    <>
      <div
        className="absolute bottom-2 left-2 rounded-md flex items-center justify-center p-2"
        style={{
          backgroundColor: "#00000066",
          transition: "all 200ms",
          transitionTimingFunction: "linear",
          transform: `scale(${show ? 1 : 0})`,
        }}
      >
        {!micOn && !isPresenting && (
          <MicOff fontSize="small" style={{ color: "white" }}></MicOff>
        )}
        <p className="text-sm text-white">
          {isPresenting
            ? isLocal
              ? `You are presenting`
              : `${nameTructed(displayName, 15)} is presenting`
            : isLocal
            ? "You"
            : nameTructed(displayName, 26)}
        </p>
      </div>

      {(webcamStream || micStream || screenShareStream) && (
        <div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleClick(e);
            }}
            className="absolute top-2 right-2 rounded-md flex items-center justify-center p-2 cursor-pointer"
            style={{
              backgroundColor:
                score > 7 ? "#3BA55D" : score > 4 ? "#faa713" : "#FF5D5D",
              transition: "all 200ms",
              transitionTimingFunction: "linear",
              transform: `scale(${show ? 1 : 0})`,
            }}
          >
            <NetworkIcon
              color1={"#ffffff"}
              color2={"#ffffff"}
              color3={"#ffffff"}
              color4={"#ffffff"}
              style={{
                height: analyzerSize * 0.6,
                width: analyzerSize * 0.6,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: show ? (isMobile ? 4 : isTab ? 8 : 12) : -32,
              right: show ? (isMobile ? 4 : isTab ? 8 : 12) : -42,
            }}
          >
            <Popover
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              anchorEl={downArrow}
              open={Boolean(downArrow)}
              onClose={(e) => {
                e.stopPropagation();
                handleClose();
              }}
            >
              <div>
                <div
                  className={`p-[9px] flex items-center justify-between `}
                  style={{
                    backgroundColor:
                      score > 7 ? "#3BA55D" : score > 4 ? "#faa713" : "#FF5D5D",
                  }}
                >
                  <p className="text-sm text-white font-semibold">{`Quality Score : ${
                    score > 7 ? "Good" : score > 4 ? "Average" : "Poor"
                  }`}</p>

                  <button className="cursor-pointer" onClick={handleClose}>
                    <CloseOutlined style={{ height: 16, width: 16 }} />
                  </button>
                </div>
                <div className="flex">
                  <div className="flex flex-col">
                    {qualityStateArray.map((item, index) => {
                      return (
                        <div
                          className="flex"
                          style={{
                            borderBottom:
                              index === qualityStateArray.length - 1
                                ? ""
                                : `1px solid #ffffff33`,
                          }}
                        >
                          <div className="flex flex-1 items-center w-[120px]">
                            {index !== 0 && (
                              <p className="text-xs my-[6px] ml-2">
                                {item.label}
                              </p>
                            )}
                          </div>
                          <div
                            className="flex flex-1 items-center justify-center"
                            style={{ borderLeft: `1px solid #ffffff33` }}
                          >
                            <p className="text-xs my-[6px] w-[65px] text-center">
                              {item.audio}
                            </p>
                          </div>
                          <div
                            className="flex flex-1 items-center justify-center"
                            style={{
                              borderLeft: `1px solid #ffffff33`,
                            }}
                          >
                            <p className="text-xs my-[6px] w-[65px] text-center">
                              {item.video}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Popover>
          </div>
        </div>
      )}
    </>
  );
};
