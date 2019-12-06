import React from "react";
import TweetEmbed from "react-tweet-embed";

const RichTweet = props => {
  return (
    <div>
      <TweetEmbed
        id="1200807516529147904"
        options={{ cards: "hidden", dnt: true, conversation: "none" }}
      />
    </div>
  );
};

export default RichTweet;
