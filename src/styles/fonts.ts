import { css } from 'styled-components';

// Importing fonts
import LatoBold from '../assets/fonts/LatoBold.ttf';
import LatoRegular from '../assets/fonts/LatoRegular.ttf';
import RalewaySemiBold from '../assets/fonts/RalewaySemiBold.ttf';
import RalewayBold from '../assets/fonts/RalewayBold.ttf';

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

  @font-face {
    font-family: 'RalewaySemiBold';
    src: url(${RalewaySemiBold});
    font-weight: 600;
    font-style: semibold;
    font-display: swap;
  }

  @font-face {
    font-family: 'RalewaySemiBold';
    src: url(${RalewaySemiBold});
    font-weight: 600;
    font-style: semibold;
    font-display: swap;
  }

  @font-face {
    font-family: 'RalewayBold';
    src: url(${RalewayBold});
    font-weight: 700;
    font-style: bold;
    font-display: swap;
  }
`;

export default fontFaces;
