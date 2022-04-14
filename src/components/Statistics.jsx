import { Card, CardMedia, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import Image from "next/image";
import ReactVisibilitySensor from "react-visibility-sensor";
import Twitch from "../../assets/twitch.svg";
import YouTube from "../../assets/youtube.svg";
import GamePad from "../../assets/gamepad.svg";
import Team from "../../assets/team.svg";

const Statistics = () => {
  const statistics = [
    {
      icon: Twitch,
      number: 1300,
      title: "TWITCH STREAMS",
    },
    {
      icon: YouTube,
      number: 1100,
      title: "YOUTUBE STREAMS",
    },
    {
      icon: GamePad,
      number: 900,
      title: "PAST GAMES",
    },
    {
      icon: Team,
      number: 256,
      title: "PRO TEAMS",
    },
  ];

  const StatisticsItem = ({ icon, number, title }) => {
    return (
      <Grid item xs={6}>
        <Card>
          <CardMedia sx={{ mt: 2 }}>
            <Image width={50} height={50} src={icon} />
          </CardMedia>
          <CardContent>
            <CountUp end={number} redraw={true} suffix="+">
              {({ countUpRef, start }) => (
                <ReactVisibilitySensor onChange={start} delayCall>
                  <Typography
                    color="text.primary"
                    variant="h3"
                    ref={countUpRef}
                  >
                    {number}
                  </Typography>
                </ReactVisibilitySensor>
              )}
            </CountUp>
            <Typography color="text.primary" variant="subtitle1">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  return (
    <Grid textAlign="center" container spacing={2} mt={2}>
      {statistics.map(({ icon, title, number }, index) => (
        <StatisticsItem icon={icon} title={title} number={number} key={index} />
      ))}
    </Grid>
  );
};

export default Statistics;
