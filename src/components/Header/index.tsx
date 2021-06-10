import React, { useState } from 'react';

import logo from '../../assets/images/logo.svg';

import { AccountArea, AccountInfo, HeaderContainer, LogoArea } from './styles';

import Divider from './Divider';

import caretDown from '../../assets/images/icons/caretDown.png';

const Header: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const dropDownHandler = () => {
    setIsClicked(current => !current);
  };

  return (
    <HeaderContainer>
      <LogoArea>
        <img src={logo} style={{ width: 130, height: 21 }} alt="logo" />
      </LogoArea>
      <Divider />
      <AccountArea>
        <button type="button" onClick={dropDownHandler}>
          <p>Conta Corrente &nbsp;</p>
          {!isClicked && <img src={caretDown} alt="caret down" />}
          {isClicked && <img src={caretDown} alt="caret up" id="caretUp" />}
        </button>
        <AccountInfo>
          <p>Ag. 00005-1</p>
          <p>C.C. 00000000000000000020-1</p>
        </AccountInfo>
      </AccountArea>
    </HeaderContainer>
  );
};

export default Header;
