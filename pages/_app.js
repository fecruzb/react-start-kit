import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import * as React from "react";

import { emotionCache, theme } from "@/config";
import App from "@/app";

const clientSideEmotionCache = emotionCache();

const NextApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <App.Store>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App.Layout>
            <Component {...pageProps} />
          </App.Layout>
        </ThemeProvider>
      </App.Store>
    </CacheProvider>
  );
};

export default NextApp;
