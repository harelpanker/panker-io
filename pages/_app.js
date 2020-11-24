import React, { useEffect } from 'react';
import Head from 'next/head'
import '../styles/global.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import Layout from '../components/Layout';
import { StylesProvider } from '@material-ui/core/styles';


import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// AOS - animate on scroll
import 'aos/dist/aos.css';
import Aos from 'aos';

function MyApp({ Component, pageProps}) {

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    Aos.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 200, // offset (in px) from the original trigger point
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 300, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      mirror: true, // whether elements should animate out while scrolling past them
    });
  }, []);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
  <>
    <Head>
      <title>Web Next</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <StylesProvider injectFirst>
      <ThemeProvider theme={Theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyles />
      </ThemeProvider>
    </StylesProvider>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body, html {
  font-family: 'Montserrat', sans-serif;
  color: ${(props) => props.theme.colors.black};
  font-size: 10px;
  background-color: ${(props) => props.theme.colors.white};
  color:${(props) => props.theme.colors.black};
  scroll-behavior: smooth;
}
ul {margin: 0; list-style-type: none;}
`;

export default MyApp;