import React from "react";
import YouTube from "react-youtube";

const HomeYoutube = () => {
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoPlay: 1,
    },
  };
  return <YouTube videoId="gEzgU7qv44w" opts={opts} onReady={onPlayerReady} />;
};

export default HomeYoutube;
