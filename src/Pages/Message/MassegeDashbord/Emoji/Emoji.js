import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

function Emoji({ handleEmoji }) {
  return <Picker data={data} onEmojiSelect={handleEmoji} />;
}

export default Emoji