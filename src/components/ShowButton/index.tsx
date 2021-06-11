import React, { useState } from 'react';

import main from '../../assets/images/icons/main.png';
import food from '../../assets/images/icons/food.png';
import rent from '../../assets/images/icons/rent.png';
import eye from '../../assets/images/icons/eye.png';
import notEye from '../../assets/images/icons/notEye.png';
import shield from '../../assets/images/icons/shield.png';

import { ShowButtonContainer } from './styles';

interface Props {
  title: string;
  value: string;
}

const ShowButton: React.FC<Props> = ({ title, value }: Props) => {
  const [shouldShow, setShouldShow] = useState(false);

  const shouldShowHandler = () => {
    setShouldShow(current => !current);
  };

  const srcHandler = () => {
    switch (title.toLowerCase()) {
      case 'principal':
        return main;
      case 'alimentação':
        return food;
      case 'aluguel':
        return rent;
      default:
        return '';
    }
  };

  return (
    <ShowButtonContainer>
      <button type="button" onClick={shouldShowHandler}>
        {!shouldShow && (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={shield}
                alt="shield"
                style={{ width: 24, height: 24 }}
              />
              <p>{title}</p>
            </div>
            <img
              src={eye}
              alt="eye"
              style={{ width: 24, height: 24, marginLeft: 20 }}
            />
          </>
        )}
        {shouldShow && (
          <>
            <img
              src={srcHandler()}
              alt="main"
              style={{ width: 36, height: 36 }}
            />
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
                  justifyContent: 'space-between',
                  marginLeft: 10,
                }}
              >
                <p id="shownTitle">{title}</p>
                <img
                  src={notEye}
                  alt="closed eye"
                  style={{ width: 16, height: 16, marginLeft: 10 }}
                />
              </div>
              <p id="shownValue">{value}</p>
            </div>
          </>
        )}
      </button>
    </ShowButtonContainer>
  );
};

export default ShowButton;
