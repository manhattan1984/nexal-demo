import React, { useState } from "react";
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
import Logo from "../../public/logo-yellow.jpeg";
import Link from "next/link";
import Image from "next/image";

const HomeAppBar = () => {
  const pages = [
    { page: "Home", link: "/" },
    { page: "Products", link: "/products" },
  ];
  const [toggle, setToggle] = useState(false);
  function toggleMenu() {
    setToggle(!toggle);
  }
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
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
                <Link href="/products">
                  <IconButton size="large">
                    <ShoppingCartIcon />
                  </IconButton>
                </Link>
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
      {toggle ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          justifyContent="center"
          alignItems="center"
        >
          {pages.map(({ page, link }) => (
            <Link href={link}>
              <Button
                color="secondary"
                key={page}
                sx={{ width: "100%" }}
                onClick={toggleMenu}
              >
                {page}
              </Button>
            </Link>
          ))}
        </Box>
      ) : null}
    </>
  );
};

export default HomeAppBar;
