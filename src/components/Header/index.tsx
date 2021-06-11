import React, { useState } from 'react';

import logo from '../../assets/images/logo.svg';

import {
  AccountArea,
  AccountDropdownArea,
  AccountDropdownInfo,
  AccountInfo,
  BalanceArea,
  HeaderContainer,
  LogoArea,
  SearchBar,
  SearchBarArea,
} from './styles';

import Divider from './Divider';

import caretDown from '../../assets/images/icons/caretDown.png';
import copy from '../../assets/images/icons/copy.png';
import shield from '../../assets/images/icons/shield.png';
import eye from '../../assets/images/icons/eye.png';
import notEye from '../../assets/images/icons/notEye.png';
import magnifyingGlass from '../../assets/images/icons/magnifyingGlass.png';
import bell from '../../assets/images/icons/bell.png';
import calendar from '../../assets/images/icons/calendar.png';
import chatText from '../../assets/images/icons/chatText.png';
import userArea from '../../assets/images/icons/userArea.png';

const Header: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [shouldShowBalance, setShouldShowBalance] = useState(false);

  const dropDownHandler = () => {
    setIsClicked(current => !current);
  };

  const showBalanceHandler = () => {
    setShouldShowBalance(current => !current);
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
          {isClicked && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img src={caretDown} alt="caret up" id="caretUp" />
              <AccountDropdownArea>
                <AccountDropdownInfo>
                  <p className="accountTitle">Conta Corrente</p>
                  <div style={{ display: 'flex' }}>
                    <p>Ag. hello-1</p>
                    <p style={{ marginLeft: 15 }}>
                      C.C. 00000000000000000020-1
                    </p>
                  </div>
                </AccountDropdownInfo>
                <AccountDropdownInfo>
                  <p className="accountTitle">Conta Corrente</p>
                  <div style={{ display: 'flex' }}>
                    <p>Ag. hello-1</p>
                    <p style={{ marginLeft: 15 }}>
                      C.C. 00000000000000000020-1
                    </p>
                  </div>
                </AccountDropdownInfo>
                <AccountDropdownInfo>
                  <p className="accountTitle">Conta Corrente</p>
                  <div style={{ display: 'flex' }}>
                    <p>Ag. hello-1</p>
                    <p style={{ marginLeft: 15 }}>
                      C.C. 00000000000000000020-1
                    </p>
                  </div>
                </AccountDropdownInfo>
                <AccountDropdownInfo>
                  <p className="accountTitle">Conta Corrente</p>
                  <div style={{ display: 'flex' }}>
                    <p>Ag. hello-1</p>
                    <p style={{ marginLeft: 15 }}>
                      C.C. 00000000000000000020-1
                    </p>
                  </div>
                </AccountDropdownInfo>
                <AccountDropdownInfo>
                  <p className="accountTitle">Conta Corrente</p>
                  <div style={{ display: 'flex' }}>
                    <p>Ag. hello-1</p>
                    <p style={{ marginLeft: 15 }}>
                      C.C. 00000000000000000020-1
                    </p>
                  </div>
                </AccountDropdownInfo>
                <AccountDropdownInfo>
                  <p className="accountTitle">Conta Corrente</p>
                  <div style={{ display: 'flex' }}>
                    <p>Ag. hello-1</p>
                    <p style={{ marginLeft: 15 }}>
                      C.C. 00000000000000000020-1
                    </p>
                  </div>
                </AccountDropdownInfo>
                <AccountDropdownInfo>
                  <p className="accountTitle">Conta Corrente</p>
                  <div style={{ display: 'flex' }}>
                    <p>Ag. hello-1</p>
                    <p style={{ marginLeft: 15 }}>
                      C.C. 00000000000000000020-1
                    </p>
                  </div>
                </AccountDropdownInfo>
              </AccountDropdownArea>
            </div>
          )}
        </button>
        <AccountInfo>
          <p>Ag. 00005-1</p>
          <p style={{ marginLeft: 15 }}>C.C. 00000000000000000020-1</p>
        </AccountInfo>
      </AccountArea>
      <img
        src={copy}
        alt="copy"
        style={{
          marginTop: 28,
          right: 20,
          width: 16,
          height: 16,
          cursor: 'pointer',
        }}
      />
      <BalanceArea>
        <button type="button" onClick={showBalanceHandler}>
          {!shouldShowBalance && (
            <>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: 15,
                }}
              >
                <img
                  src={shield}
                  alt="shield"
                  style={{ width: 24, height: 24 }}
                />
                <p>Saldo</p>
              </div>
              <img src={eye} alt="eye" style={{ width: 24, height: 24 }} />
            </>
          )}
          {shouldShowBalance && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: 20,
                }}
              >
                <p id="show">Saldo</p>
                <img
                  src={notEye}
                  alt="closed eye"
                  style={{ width: 16, height: 16, marginLeft: 10 }}
                />
              </div>
              <p id="balance">R$40.000,00</p>
            </div>
          )}
        </button>
      </BalanceArea>
      <SearchBarArea>
        <img
          src={magnifyingGlass}
          alt="magnifying glass"
          style={{
            width: 16,
            height: 16,
            position: 'absolute',
            marginLeft: 134,
            cursor: 'pointer',
          }}
        />
        <SearchBar placeholder="Pesquisar" />
        <img
          src={chatText}
          alt="chat text"
          style={{ width: 24, height: 24, marginLeft: 20, cursor: 'pointer' }}
        />
        <img
          src={calendar}
          alt="calendar"
          style={{ width: 24, height: 24, marginLeft: 20, cursor: 'pointer' }}
        />
        <img
          src={bell}
          alt="bell"
          style={{ width: 24, height: 24, marginLeft: 20, cursor: 'pointer' }}
        />
        <img
          src={userArea}
          alt="userArea"
          style={{ width: 50, height: 50, marginLeft: 20, cursor: 'pointer' }}
        />
      </SearchBarArea>
    </HeaderContainer>
  );
};

export default Header;
