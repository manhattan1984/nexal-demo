import React from "react";
import YouTube from "react-youtube";
import { Container } from "@mui/material";

const HomeYoutube = () => {
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: "360",
    width: "360",
    playerVars: {
      autoPlay: 1,
    },
  };

  return (
    <Container align="center" maxWidth="md">
      <YouTube videoId="gEzgU7qv44w" opts={opts} onReady={onPlayerReady} />;
    </Container>
  );
};

export default HomeYoutube;
