import React, { useState } from 'react';

import {
  SideMenuContainer,
  SideMenuContainerRetracted,
  BalanceIcon,
  SummaryIcon,
  StatementIcon,
  PaymentIcon,
  TransferIcon,
  PixIcon,
  CardIcon,
  BillingIcon,
  ManagementIcon,
  HelpIcon,
  SideMenuSwitcherIcon,
  SideMenuSwitcherReverseIcon,
} from './styles';

const SideMenu: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const sideMenuSwitchHandler = () => {
    setIsToggled(current => !current);
  };

  return (
    <>
      {isToggled && (
        <SideMenuContainer>
          <SummaryIcon />
          <BalanceIcon />
          <StatementIcon />
          <PaymentIcon />
          <TransferIcon />
          <PixIcon />
          <CardIcon />
          <BillingIcon />
          <ManagementIcon />
          <HelpIcon />

          <button
            type="button"
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={sideMenuSwitchHandler}
          >
            {!isToggled && <SideMenuSwitcherIcon />}
            {isToggled && <SideMenuSwitcherReverseIcon />}
          </button>
        </SideMenuContainer>
      )}

      {!isToggled && (
        <SideMenuContainerRetracted>
          <div style={{ visibility: 'hidden' }}>
            <SummaryIcon />
            <BalanceIcon />
            <StatementIcon />
            <PaymentIcon />
            <TransferIcon />
            <PixIcon />
            <CardIcon />
            <BillingIcon />
            <ManagementIcon />
            <HelpIcon />
          </div>

          <button
            type="button"
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={sideMenuSwitchHandler}
          >
            {!isToggled && <SideMenuSwitcherIcon />}
            {isToggled && <SideMenuSwitcherReverseIcon />}
          </button>
        </SideMenuContainerRetracted>
      )}
    </>
  );
};

export default SideMenu;
