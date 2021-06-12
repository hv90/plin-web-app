import styled from 'styled-components';

import popoverNew from '../../assets/images/icons/popoverNew.png';

export const TopMenuContainer = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  margin-left: 46px;

  #plus:after {
    content: url(${popoverNew});
    position: absolute;
    margin-left: -35px;
    margin-top: -25px;
    visibility: hidden;
  }

  #plus:hover:after {
    visibility: visible;
  }
`;

export const TopMenuContainerCover = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  margin-left: 0;
  background-color: #f9f9f9;
  box-shadow: 4px 0 4px rgba(0, 0, 0, 0.25);
`;

export const MainContainer = styled.div`
  width: 135px;
  display: flex;

  p {
    text-align: left;
    margin-left: 10px;
  }
`;
