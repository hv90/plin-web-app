import styled from 'styled-components';

import print from '../../assets/images/icons/print.png';
import printHover from '../../assets/images/icons/printHover.png';
import download from '../../assets/images/icons/download.png';
import downloadHover from '../../assets/images/icons/downloadHover.png';
import share from '../../assets/images/icons/share.png';
import shareHover from '../../assets/images/icons/shareHover.png';
import r0 from '../../assets/images/icons/refreshing/Refreshing-0.png';
import r1 from '../../assets/images/icons/refreshing/Refreshing-1.png';
import r2 from '../../assets/images/icons/refreshing/Refreshing-2.png';
import r3 from '../../assets/images/icons/refreshing/Refreshing-3.png';

export const ContentContainer = styled.div`
  margin-left: 66px;
  margin-top: -456px;
  display: flex;
  flex-direction: column;
  p {
    font-family: RalewaySemiBold;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: #172765;
  }
`;

export const PrintIcon = styled.div`
  width: 80px;
  height: 40px;
  background-image: url(${print});
  cursor: pointer;
  margin: 0 15px 0 15px;

  &:hover {
    background-image: url(${printHover});
  }
`;
export const DownloadIcon = styled.div`
  width: 80px;
  height: 40px;
  background-image: url(${download});
  cursor: pointer;
  margin: 0 15px 0 15px;

  &:hover {
    background-image: url(${downloadHover});
  }
`;
export const ShareIcon = styled.div`
  width: 80px;
  height: 40px;
  background-image: url(${share});
  cursor: pointer;
  margin: 0 15px 0 15px;

  &:hover {
    background-image: url(${shareHover});
  }
`;

export const BalanceDropdownArea = styled.div`
  width: 280px;
  margin-top: 33px;
  height: 47px;
  display: flex;
  align-items: center;
  border-radius: 5px 5px 0 0;
  background-color: #f9f9f9;
  border: 0.5px solid #e5e4e2;
`;

export const BalanceDropdownInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  #title {
    text-align: left;
    font-size: 12px;
    line-height: 14px;
    color: #622ee5;
    font-family: LatoRegular;
    font-weight: 400;
  }

  #date {
    text-align: left;
    font-size: 16px;
    line-height: 19px;
    color: #172765;
    font-family: LatoRegular;
    font-weight: 400;
  }
`;

export const BalanceDropdownRefreshArea = styled.div`
  display: flex;
  margin-left: 15px;

  position: absolute;
  margin-top: 102px;

  #time {
    font-family: LatoRegular;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #172765;
  }
`;

export const AnimatedRefreshIcon = styled.div`
  div {
    margin-left: 170px;
    margin-top: -5px;
    background-color: transparent;
    animation: loading 4s;
  }

  @keyframes loading {
    0% {
      background-image: url(${r0});
      width: 24px;
      height: 24px;
    }
    33% {
      background-image: url(${r1});
      width: 24px;
      height: 24px;
    }
    66% {
      background-image: url(${r2});
      width: 24px;
      height: 24px;
    }
    100% {
      background-image: url(${r3});
      width: 24px;
      height: 24px;
    }
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  margin-top: 250px;
  z-index: 2;
  width: 280px;
  height: 193px;
  box-shadow: 0 2px 20px rgba(44, 74, 125, 0.2175);
  background-image: linear-gradient(#f9f9f9, #e5e4e2);
  border-radius: 0 0 5px 5px;
`;

export const DropdownInfo = styled.div`
  margin-left: 30px;
  .title {
    margin-top: 20px;
    font-family: RalewaySemiBold;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #172765;
    height: 20px;
  }

  .description {
    display: flex;
    p {
      font-family: LatoRegular;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }

    display: flex;
    margin-left: 30;
  }

  .value {
    color: #69d531;
  }
`;

export const ShareMenuContainer = styled.div`
  margin-top: 75px;
  margin-left: 455px;
  position: absolute;
  width: 164px;
  height: 108px;
  border-radius: 5px;
  padding: 6px 16px;
  background-color: #ffffff;
  overflow-y: scroll;
  box-shadow: 0 2px 20px rgba(44, 74, 125, 0.2175);

  p {
    margin-top: 18px;
    font-weight: 400;
    font-family: LatoRegular;
    font-size: 14px;
    line-height: 20px;
    color: #172765;
  }
`;

export const DownloadMenuContainer = styled.div`
  margin-top: 60%;
  height: 68px;
  width: 100%;
  margin-left: -66px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 2px 20px rgba(44, 74, 125, 0.2175);
  color: #172765;

  .loading {
    font-family: LatoRegular;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-left: 40px;
  }

  #name {
    font-family: RalewaySemiBold;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    margin-left: 10px;
  }
`;
