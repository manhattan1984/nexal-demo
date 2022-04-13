import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const HomeAppBar = () => {
  const pages = ["Home"];
  function toggleMenu() {}
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container>
              <Grid item xs={6} md={3}>
                <Image height={50} width={50} src={Logo} />
              </Grid>
              <Grid
                item
                xs={6}
                display={{ xs: "flex", md: "none" }}
                justifyContent="flex-end"
              >
                <IconButton size="large">
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton size="large" onClick={toggleMenu}>
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid
                item
                md={9}
                display={{ xs: "none", md: "flex" }}
                justifyContent="flex-end"
              >
                {pages.map(({ page }, index) => (
                  <Link href="/" key={index}>
                    <Button>{page}</Button>
                  </Link>
                ))}
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default HomeAppBar;
