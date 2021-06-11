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
    padding-left: 0;
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

export const BalanceArea = styled.div`
  width: 280px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0;
  }

  p {
    font-family: LatoRegular;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #622ee5;
    margin-left: 10px;
  }

  #show {
    font-family: LatoRegular;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #172765;
    margin: 0;
  }

  #balance {
    font-family: LatoRegular;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #69d531;
    margin: 0 0 0 20px;
  }
`;

export const SearchBarArea = styled.div`
  width: 370px;
  height: 100%;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 160px;
  height: 30px;
  border-radius: 5px;
  border: 0.5px solid #778899;

  ::placeholder {
    padding-left: 16px;
    color: #778899;
  }
`;
