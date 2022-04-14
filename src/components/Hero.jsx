import { Carousel } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { Box } from "@mui/material";
import Image from "next/image";
import Fortnite from "../../assets/fortnite.jpeg";
import MobileLegends from "../../assets/mobilelegends.jpeg";
import Pubg from "../../assets/pubg.jpg";

const Hero = () => {
  function onChange() {}

  const contentStyle = {
    height: "160px",
    color: "rgb(247, 222, 222)255, 255, 255)",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel afterChange={onChange}>
      <Box>
        <Image src={MobileLegends} layout="responsive" />
      </Box>
      <Box>
        <Image src={Pubg} layout="responsive" />
      </Box>
      <Box>
        <Image src={Fortnite} layout="responsive" />
      </Box>
    </Carousel>
  );
};

export default Hero;
