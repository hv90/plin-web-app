import React from 'react';

import tag from '../../assets/images/icons/tag.png';
import plus from '../../assets/images/icons/plus.png';
import { TopMenuContainer, TopMenuContainerCover } from './styles';
import ShowButton from '../ShowButton';

const TopMenu: React.FC = () => {
  return (
    <TopMenuContainerCover>
      <TopMenuContainer>
        <button
          type="button"
          style={{
            backgroundColor: 'transparent',
            padding: 0,
            border: 'none',
            cursor: 'pointer',
            marginLeft: 26,
          }}
        >
          <img src={tag} alt="tag" style={{ width: 36, height: 36 }} />
        </button>
        <button
          id="plus"
          type="button"
          style={{
            backgroundColor: 'transparent',
            padding: 0,
            border: 'none',
            cursor: 'pointer',
            marginLeft: 20,
          }}
        >
          <img src={plus} alt="plus" style={{ width: 36, height: 36 }} />
        </button>
        <ShowButton title="Principal" value="R$10.000,00" />
        <ShowButton title="Aluguel" value="R$1.600,00" />
        <ShowButton title="Alimentação" value="R$450,00" />
      </TopMenuContainer>
    </TopMenuContainerCover>
  );
};

export default TopMenu;
