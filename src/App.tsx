import React from 'react';
import GlobalStyles from './styles/global';

import Header from './components/Header';
import SideMenu from './components/SideMenu';
import TopMenu from './components/TopMenu';
import Content from './components/Content';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <TopMenu />
      <SideMenu />
      <Content />
    </>
  );
};

export default App;
