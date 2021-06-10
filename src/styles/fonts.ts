import { css } from 'styled-components';

// Importing fonts
import LatoBold from '../assets/fonts/LatoBold.ttf';
import LatoRegular from '../assets/fonts/LatoRegular.ttf';

const fontFaces = css`
  @font-face {
    font-family: 'LatoBold';
    src: url(${LatoBold});
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'LatoRegular';
    src: url(${LatoRegular});
    font-weight: 400;
    font-style: regular;
    font-display: swap;
  }
`;

export default fontFaces;
