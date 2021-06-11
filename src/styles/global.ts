import { createGlobalStyle } from 'styled-components';

import fontFaces from './fonts';

const GlobalStyles = createGlobalStyle`
  ${fontFaces}

  * {
  margin: 0;
  padding: 0;
  }

  html, body {
    min-height: 100%;
    height:100%;

  }
  body {
    width: 100%;
    overflow-x: hidden;
    display: block;
  }
  `;

export default GlobalStyles;
