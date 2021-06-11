import React, { useState } from 'react';

import Header from './components/Header';
import SideMenu from './components/SideMenu';
import TopMenu from './components/TopMenu';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <TopMenu />
      <SideMenu />
    </>
  );
};

export default App;
