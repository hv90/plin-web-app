import React, { useState, useLayoutEffect } from 'react';

import caretDownBigger from '../../assets/images/icons/caretDownBigger.png';
import refresh from '../../assets/images/icons/refresh.png';
import pause from '../../assets/images/icons/pause.png';
import X from '../../assets/images/icons/X.png';
import ShowButtonWider from '../ShowButtonWider';

import {
  ContentContainer,
  PrintIcon,
  DownloadIcon,
  ShareIcon,
  BalanceDropdownArea,
  BalanceDropdownInfoArea,
  BalanceDropdownRefreshArea,
  AnimatedRefreshIcon,
  DropdownContainer,
  DropdownInfo,
  ShareMenuContainer,
  DownloadMenuContainer,
} from './styles';

const Content: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [isShareClicked, setIsShareClicked] = useState(false);
  const [isDownloadClicked, setIsDownloadClicked] = useState(false);

  const refreshHandler = () => {
    setIsLoading(current => !current);
    setTimeout(() => {
      // setIsLoading(current => !current);
    }, 4000);
  };

  useLayoutEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(current => !current);
      }, 4000);
    }
  }, [isLoading]);

  const dropdownHandler = () => {
    setIsDropdownClicked(current => !current);
  };

  const shareHandler = () => {
    setIsShareClicked(current => !current);
  };

  const downloadHandler = () => {
    setIsDownloadClicked(current => !current);
  };

  return (
    <ContentContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>Saldo Bancário</p>
        <button
          type="button"
          style={{ backgroundColor: 'transparent', border: 'none' }}
        >
          <PrintIcon />
        </button>
        <button
          type="button"
          style={{ backgroundColor: 'transparent', border: 'none' }}
          onClick={downloadHandler}
        >
          <DownloadIcon />
        </button>
        {isDownloadClicked && (
          <DownloadMenuContainer>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className="loading">Baixando</p>
              <div style={{ marginLeft: -160, marginTop: 7 }}>
                <AnimatedRefreshIcon>
                  <div />
                </AnimatedRefreshIcon>
              </div>
              <p className="loading" style={{ marginLeft: 10 }}>
                201kb
              </p>
              <div
                style={{
                  height: 25,
                  width: 1,
                  backgroundColor: '#E5E4E2',
                  marginLeft: 10,
                }}
              />
              <p id="name">Saldo %NomeDadoParaAConta% %DataDaConsulta%.pdf</p>
              <img
                src={pause}
                alt="pause"
                style={{ marginLeft: 10, width: 24, height: 24 }}
              />
            </div>
            <img
              src={X}
              alt="X"
              style={{ width: 24, height: 24, marginRight: 20 }}
            />
          </DownloadMenuContainer>
        )}
        <button
          type="button"
          style={{ backgroundColor: 'transparent', border: 'none' }}
          onClick={shareHandler}
        >
          <ShareIcon />
        </button>
        {isShareClicked && (
          <ShareMenuContainer>
            <p>Enviar por e-mail</p>
            <p>Enviar por WhatsApp</p>
            <p>Enviar por opção 3</p>
          </ShareMenuContainer>
        )}
      </div>
      <BalanceDropdownArea>
        <BalanceDropdownInfoArea>
          <p id="title">Data do Saldo</p>
          <p id="date">07/12/2020</p>
        </BalanceDropdownInfoArea>
        <button
          type="button"
          onClick={dropdownHandler}
          style={{ border: 'none', backgroundColor: 'transparent' }}
        >
          <img
            src={caretDownBigger}
            alt="caret down"
            style={{ width: 24, height: 24, marginLeft: 145 }}
          />
        </button>
        <div
          style={{
            border: '1px solid #622EE5',
            width: 280,
            marginTop: 45,
            position: 'absolute',
          }}
        />
        {isDropdownClicked && (
          <DropdownContainer>
            <DropdownInfo>
              <p className="title">Disponibilizado</p>
              <div className="description">
                <p className="value">R$20.000,00</p>
                <p>&nbsp;do seu saldo</p>
              </div>
              <p className="title">Distribuído</p>
              <div className="description">
                <p className="value">R$12.050,00</p>
                <p>&nbsp;(60,25%)</p>
              </div>
              <button
                type="button"
                style={{
                  width: 117,
                  height: 40,
                  backgroundColor: '#622EE5',
                  borderRadius: 5,
                  padding: '12 28 12 28',
                  marginTop: 20,
                }}
              >
                <p
                  style={{
                    fontFamily: 'RalewayBold',
                    fontWeight: 700,
                    fontSize: 14,
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                  }}
                >
                  Alterar
                </p>
              </button>
            </DropdownInfo>
          </DropdownContainer>
        )}
        <BalanceDropdownRefreshArea>
          {!isLoading && (
            <>
              <p id="time">Saldo atualizado às 16:48</p>
              <button
                type="button"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={refreshHandler}
              >
                <img
                  src={refresh}
                  alt="refresh"
                  style={{ width: 24, height: 24, marginLeft: 13 }}
                />
              </button>
            </>
          )}
          {isLoading && (
            <AnimatedRefreshIcon>
              <div />
            </AnimatedRefreshIcon>
          )}
        </BalanceDropdownRefreshArea>
      </BalanceDropdownArea>
      <div style={{ marginTop: 50 }}>
        <ShowButtonWider value="R$40.000,00" />
      </div>
    </ContentContainer>
  );
};

export default Content;
