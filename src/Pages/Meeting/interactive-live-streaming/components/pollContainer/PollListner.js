import { usePubSub } from "@videosdk.live/react-sdk";
import { useSnackbar } from "notistack";
import { sideBarModes } from "../../../utils/common";

const PollListner = ({ pollId, setCreatedPolls }) => {
  usePubSub(`SUBMIT_A_POLL_${pollId}`, {
    onMessageReceived: ({ message, senderId: participantId, timestamp }) => {
      setCreatedPolls((s) =>
        s.map((_poll) =>
          pollId === _poll.id
            ? {
                ..._poll,
                submissions: [
                  ..._poll.submissions,
                  { optionId: message.optionId, participantId, timestamp },
                ],
              }
            : _poll
        )
      );
    },
    onOldMessagesReceived: (messages) => {
      const sortedMappedMessages = messages.map(
        ({ senderId: participantId, timestamp, message }) => {
          const { optionId } = message;

          return {
            optionId,
            participantId,
            timestamp,
          };
        }
      );

      setCreatedPolls((s) => {
        return s.map((_poll) => {
          if (pollId === _poll.id) {
            return { ..._poll, submissions: sortedMappedMessages };
          } else {
            return _poll;
          }
        });
      });
    },
  });

  return <></>;
};

const PollsListner = ({
  polls,
  setDraftPolls,
  setCreatedPolls,
  setEndedPolls,
  setSideBarMode,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  usePubSub(`CREATE_POLL`, {
    onMessageReceived: ({ message, timestamp }) => {
      setCreatedPolls((s) => [
        { ...message, createdAt: timestamp, submissions: [] },
        ...s,
      ]);

      new Audio(
        `https://static.videosdk.live/prebuilt/notification.mp3`
      ).play();

      enqueueSnackbar("New Poll Asked 📊");
      setSideBarMode(sideBarModes.POLLS);
    },
    onOldMessagesReceived: (messages) => {
      setCreatedPolls((s) => [
        ...s,
        ...messages
          .sort((a, b) =>
            a.timestamp > b.timestamp ? -1 : a.timestamp < b.timestamp ? 1 : 0
          )
          .map(({ message, timestamp }) => ({
            ...message,
            createdAt: timestamp,
            submissions: [],
          })),
      ]);
    },
  });

  usePubSub(`END_POLL`, {
    onMessageReceived: ({ message }) => {
      setEndedPolls((s) => [...s, { pollId: message.pollId }]);
    },
    onOldMessagesReceived: (messages) => {
      setEndedPolls((s) => [
        ...s,
        ...messages.map(({ message }) => ({ pollId: message.pollId })),
      ]);
    },
  });

  usePubSub(`DRAFT_A_POLL`, {
    onMessageReceived: ({ message }) => {
      setDraftPolls((s) => [...s, message]);
    },
    onOldMessagesReceived: (messages) => {
      const sortedMessage = messages.sort((a, b) => {
        if (a.timestamp > b.timestamp) {
          return -1;
        }
        if (a.timestamp < b.timestamp) {
          return 1;
        }
        return 0;
      });
      const newPolls = sortedMessage.map(({ message }) => {
        return { ...message };
      });
      setDraftPolls(newPolls);
    },
  });

  usePubSub(`REMOVE_POLL_FROM_DRAFT`, {
    onMessageReceived: ({ message }) => {
      setDraftPolls((s) => {
        return s.filter((_poll) => {
          if (message.pollId === _poll.id) {
            return false;
          } else {
            return true;
          }
        });
      });
    },
    onOldMessagesReceived: (messages) => {
      setDraftPolls((s) =>
        s.filter(
          (_poll) =>
            messages.findIndex(({ message }) => {
              return message.pollId === _poll.id;
            }) === -1
        )
      );
    },
  });

  return (
    <>
      {polls?.map((poll) => (
        <PollListner
          key={`poll_listner_${poll.id}`}
          pollId={poll.id}
          setCreatedPolls={setCreatedPolls}
        />
      ))}
      {/* {draftPolls?.map((poll) => {
        return <PollListner poll={poll} />;
      })} */}
    </>
  );
};

export default PollsListner;
