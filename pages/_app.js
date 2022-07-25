import { createGlobalStyle } from 'styled-components';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Component {...pageProps} />
    <GlobalStyle />
    </>
  )
}

export default MyApp

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rubik';
    src: url('/fonts/RubikRegular.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

   @font-face {
    font-family: 'Rubik';
    src: url('/fonts/RubikMedium.woff') format('woff');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  html, body {
    font-family: 'Rubik';
  }
  a {
    color: #50caff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
