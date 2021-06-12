import styled from 'styled-components';

export const ShowButtonContainer = styled.div`
  width: 280px;
  height: 47px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border: 0.5px solid #e5e4e2;
  border-radius: 5px 5px 0 0;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;

    justify-content: space-between;
    align-items: center;
    height: 47px;
    width: 264px;
    padding: 0;
    margin-left: 10px;
  }

  #title {
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
    color: #778899;
    margin: 0 0 0 10px;
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
