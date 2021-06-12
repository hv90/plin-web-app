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
import copiedBranch from '../../assets/images/icons/copiedBranch.png';
import copiedAccount from '../../assets/images/icons/copiedAccount.png';

const Header: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isAccountCopied, setIsAccountCopied] = useState(false);
  const [isBranchCopied, setIsBranchCopied] = useState(false);
  const [shouldShowBalance, setShouldShowBalance] = useState(false);

  const dropDownHandler = () => {
    setIsClicked(current => !current);
  };

  const showBalanceHandler = () => {
    setShouldShowBalance(current => !current);
  };

  const copyBothHandler = () => {
    setIsAccountCopied(current => !current);
    setIsBranchCopied(current => !current);
    setTimeout(() => {
      setIsAccountCopied(current => !current);
      setIsBranchCopied(current => !current);
    }, 2000);
  };

  const copyAccountHandler = () => {
    setIsAccountCopied(current => !current);
    setTimeout(() => {
      setIsAccountCopied(current => !current);
    }, 2000);
  };

  const copyBranchHandler = () => {
    setIsBranchCopied(current => !current);
    setTimeout(() => {
      setIsBranchCopied(current => !current);
    }, 2000);
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
          {!isClicked && (
            <img
              src={caretDown}
              alt="caret down"
              style={{ width: 10, height: 5, marginTop: 5 }}
            />
          )}
        </button>
        {isClicked && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img
              src={caretDown}
              alt="caret up"
              id="caretUp"
              style={{ width: 10, height: 5, marginTop: -8, marginLeft: 236 }}
            />
            <AccountDropdownArea>
              <AccountDropdownInfo>
                <p className="accountTitle">Conta Corrente</p>
                <div style={{ display: 'flex' }}>
                  <p>Ag. hello-1</p>
                  <p style={{ marginLeft: 15 }}>C.C. 00000000000000000020-1</p>
                </div>
              </AccountDropdownInfo>
              <AccountDropdownInfo>
                <p className="accountTitle">Conta Corrente</p>
                <div style={{ display: 'flex' }}>
                  <p>Ag. hello-1</p>
                  <p style={{ marginLeft: 15 }}>C.C. 00000000000000000020-1</p>
                </div>
              </AccountDropdownInfo>
              <AccountDropdownInfo>
                <p className="accountTitle">Conta Corrente</p>
                <div style={{ display: 'flex' }}>
                  <p>Ag. hello-1</p>
                  <p style={{ marginLeft: 15 }}>C.C. 00000000000000000020-1</p>
                </div>
              </AccountDropdownInfo>
              <AccountDropdownInfo>
                <p className="accountTitle">Conta Corrente</p>
                <div style={{ display: 'flex' }}>
                  <p>Ag. hello-1</p>
                  <p style={{ marginLeft: 15 }}>C.C. 00000000000000000020-1</p>
                </div>
              </AccountDropdownInfo>
              <AccountDropdownInfo>
                <p className="accountTitle">Conta Corrente</p>
                <div style={{ display: 'flex' }}>
                  <p>Ag. hello-1</p>
                  <p style={{ marginLeft: 15 }}>C.C. 00000000000000000020-1</p>
                </div>
              </AccountDropdownInfo>
              <AccountDropdownInfo>
                <p className="accountTitle">Conta Corrente</p>
                <div style={{ display: 'flex' }}>
                  <p>Ag. hello-1</p>
                  <p style={{ marginLeft: 15 }}>C.C. 00000000000000000020-1</p>
                </div>
              </AccountDropdownInfo>
              <AccountDropdownInfo>
                <p className="accountTitle">Conta Corrente</p>
                <div style={{ display: 'flex' }}>
                  <p>Ag. hello-1</p>
                  <p style={{ marginLeft: 15 }}>C.C. 00000000000000000020-1</p>
                </div>
              </AccountDropdownInfo>
            </AccountDropdownArea>
          </div>
        )}
        <AccountInfo>
          <button
            type="button"
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={copyBranchHandler}
          >
            <p id="branch">Ag. 00005-1</p>
          </button>
          <button
            type="button"
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={copyAccountHandler}
          >
            <p id="account" style={{ marginLeft: 15 }}>
              C.C. 00000000000000000020-1
            </p>
          </button>
        </AccountInfo>
      </AccountArea>

      <button
        type="button"
        id="copy"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          marginLeft: 10,
          cursor: 'pointer',
        }}
        onClick={copyBothHandler}
      >
        <img
          src={copy}
          alt="copy"
          style={{
            marginTop: 28,
            right: 20,
            width: 16,
            height: 16,
          }}
        />
      </button>

      <div>
        {isAccountCopied && (
          <img
            src={copiedAccount}
            alt="copied account"
            style={{
              width: 344,
              height: 48,
              position: 'absolute',
              marginTop: 225,
            }}
          />
        )}
        {isBranchCopied && (
          <img
            src={copiedBranch}
            alt="copied branch"
            style={{
              width: 344,
              height: 48,
              position: 'absolute',
              marginTop: 285,
            }}
          />
        )}
      </div>

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
        <button
          type="button"
          style={{
            backgroundColor: 'transparent',
            padding: 0,
            border: 'none',
          }}
        >
          <img
            src={chatText}
            alt="chat text"
            style={{ width: 24, height: 24, marginLeft: 20, cursor: 'pointer' }}
          />
        </button>
        <button
          type="button"
          style={{ backgroundColor: 'transparent', padding: 0, border: 'none' }}
        >
          <img
            src={calendar}
            alt="calendar"
            style={{ width: 24, height: 24, marginLeft: 20, cursor: 'pointer' }}
          />
        </button>
        <button
          type="button"
          style={{ backgroundColor: 'transparent', padding: 0, border: 'none' }}
        >
          <img
            src={bell}
            alt="bell"
            style={{ width: 24, height: 24, marginLeft: 20, cursor: 'pointer' }}
          />
        </button>
        <button
          type="button"
          style={{ backgroundColor: 'transparent', padding: 0, border: 'none' }}
        >
          <img
            src={userArea}
            alt="userArea"
            style={{ width: 50, height: 50, marginLeft: 20, cursor: 'pointer' }}
          />
        </button>
      </SearchBarArea>
    </HeaderContainer>
  );
};

export default Header;
