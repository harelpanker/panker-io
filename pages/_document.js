import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/styles';

import { GA_TRACKING_ID } from '../lib/gtag'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const styledComponentsSheet = new ServerStyleSheet()
    const materialSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: App => props => styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />))
          })
        const initialProps = await Document.getInitialProps(ctx)
        return {
          ...initialProps,
          styles: (
            <React.Fragment>
              {initialProps.styles}
              {materialSheets.getStyleElement()}
              {styledComponentsSheet.getStyleElement()}
            </React.Fragment>
          )
        }
      } finally {
        styledComponentsSheet.seal()
      }
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Harel Panker | Web Developer & Designer" />
        <meta property="og:description" content="I build websites for companies, small businesses, restaurants, law firms, clinics, etc. I'm an expert in building and designing those websites using the most modern tools and technologies that exist." />
        <meta property="og:url" content="https://panker.io/" />
        <meta property="og:site_name" content="Harel Panker | Web Developer & Designer" />
        <meta property="og:image" content="https://panker.io/images/open-grhpe-panker.png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
