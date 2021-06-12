import React, { useState } from 'react';

import eye from '../../assets/images/icons/eye.png';
import notEye from '../../assets/images/icons/notEye.png';
import shield from '../../assets/images/icons/shield.png';

import { ShowButtonContainer } from './styles';

interface Props {
  value: string;
}

const ShowButtonWider: React.FC<Props> = ({ value }: Props) => {
  const [shouldShow, setShouldShow] = useState(false);

  const shouldShowHandler = () => {
    setShouldShow(current => !current);
  };

  return (
    <ShowButtonContainer>
      <button type="button" onClick={shouldShowHandler}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src={shield} alt="shield" style={{ width: 24, height: 24 }} />
          {!shouldShow && <p id="title">Saldo</p>}
          {shouldShow && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p id="shownTitle">Saldo disponível</p>
              <p id="shownValue">{value}</p>
            </div>
          )}
        </div>
        {!shouldShow && (
          <img
            src={eye}
            alt="eye"
            style={{ width: 24, height: 24, marginLeft: 20 }}
          />
        )}
        {shouldShow && (
          <img
            src={notEye}
            alt="notEye"
            style={{ width: 24, height: 24, marginLeft: 20 }}
          />
        )}
      </button>
      <div style={{ width: 280, border: '1px solid #778899' }} />
    </ShowButtonContainer>
  );
};

export default ShowButtonWider;
