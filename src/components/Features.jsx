import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import Twitch from "../../assets/twitch.svg";
import GamePad from "../../assets/gamepad.svg";
import Trophy from "../../assets/trophy.svg";
import Image from "next/image";

const features = [
  {
    icon: Twitch,
    title: "Twitch Streaming",
    text: "New streams every day from our best players",
  },
  {
    icon: GamePad,
    title: "eSports News",
    text: "Get top streams and results from World Cyber Games",
  },
  {
    icon: Trophy,
    title: "Game Tournaments",
    text: "Create your own games tournaments and share results.",
  },
];

const FeatureItem = ({ icon, title, text }) => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardMedia sx={{ mt: 2 }}>
          <Image src={icon} height={50} width={50} />
        </CardMedia>
        <CardContent>
          <Typography color="text.primary" variant="h6">
            {title}
          </Typography>
          <Typography variant="body1">{text}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Features = () => {
  return (
    <Grid container textAlign="center" spacing={2}>
      {features.map(({ icon, text, title }, index) => (
        <FeatureItem icon={icon} title={title} text={text} key={index} />
      ))}
    </Grid>
  );
};

export default Features;
