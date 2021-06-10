import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 71px;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid black;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: 13px;
  height: 100%;
`;

export const AccountArea = styled.div`
  width: 255px;
  height: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  #caretUp {
    transform: rotate(180deg);
  }

  p {
    font-family: 'LatoRegular';
    color: #172765;
    font-size: 16px;
    line-height: 19px;
  }

  button {
    height: 19px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

export const AccountInfo = styled.div`
  width: 255px;
  height: 14px;
  display: flex;

  p {
    font-family: 'LatoRegular';
    color: #622ee5;
    font-size: 12px;
    line-height: 14px;
    margin-top: 5px;
  }
`;
