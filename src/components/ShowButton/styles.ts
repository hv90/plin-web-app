import styled from 'styled-components';

export const ShowButtonContainer = styled.div`
  width: 150px;
  margin-left: 32px;
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 264px;
    padding: 0;
    margin-left: 10px;
  }

  p {
    font-family: LatoRegular;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #622ee5;
    margin-left: 5px;
  }

  #shownTitle {
    font-family: LatoRegular;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #172765;
    margin: 0;
  }

  #shownValue {
    font-family: LatoRegular;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #69d531;
    margin: 0 0 0 10px;
    width: 30px;
  }
`;

export const outro = styled.div``;
