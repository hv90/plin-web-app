import { createGlobalStyle } from 'styled-components';

import fontFaces from './fonts';

const GlobalStyles = createGlobalStyle`
  ${fontFaces}
  `;

export default GlobalStyles;
