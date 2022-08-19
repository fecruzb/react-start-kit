import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import * as React from "react";

import { emotionCache, theme } from "@/config";
import { Layout, Store } from "@/components";

const clientSideEmotionCache = emotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Store>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Store>
    </CacheProvider>
  );
}
