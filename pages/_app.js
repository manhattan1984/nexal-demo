import { CacheProvider } from "@emotion/react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import HomeAppBar from "../src/components/HomeAppBar";
import createEmotionCache from "../src/createEmotionCache";
import theme from "../src/theme";
import "../styles/globals.css";

const cache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomeAppBar />
        <Container sx={{ my: 1 }}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
