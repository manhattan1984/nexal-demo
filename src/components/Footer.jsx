import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "../../public/logo-yellow.jpeg";

const Footer = () => {
  return (
    <Box mt={2}>
      <Image src={Logo} width={50} height={50} />
      <TextField fullWidth label="Enter your email" variant="standard" />
      <Button sx={{ mb: 1 }}>Subscribe</Button>
      <Typography variant="body2" gutterBottom>
        The world without photography will be meaningless to us.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Address</Typography>
          <Typography variant="p">Baker Street Lagos, CA 70413</Typography>
          <Typography variant="body1">Phone: +234 xxxxxxx</Typography>
          <Typography variant="body1">Email: something@mail.com</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Recent Posts</Typography>
          <Typography variant="body1" color="GrayText">
            Kills You Slowly
          </Typography>
          <Typography variant="body1">November 8, 2022</Typography>

          <Typography variant="body1" color="GrayText">
            Clout
          </Typography>
          <Typography variant="body1">November 8, 2022</Typography>

          <Typography variant="body1" color="GrayText">
            Jerome
          </Typography>
          <Typography variant="body1">November 8, 2022</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6">Recent Comments</Typography>

          <Box>
            <Typography color="GrayText" variant="p">
              Elena Cobsky
            </Typography>
            <Typography variant="p"> - Driving Engagement Online</Typography>
          </Box>

          <Box>
            <Typography color="GrayText" variant="p">
              John Michel
            </Typography>
            <Typography variant="p"> - Designing Web3</Typography>
          </Box>

          <Box>
            <Typography color="GrayText" variant="p">
              Anton Stockman
            </Typography>
            <Typography variant="p"> - Age of Extinction</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Instagram />
        <Facebook />
        <Twitter />
      </Box>

      <Divider />
      <Typography variant="caption" color="primary">
        2022, JACKINTHEBOX. All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
