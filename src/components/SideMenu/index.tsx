import React, { useState, useEffect } from 'react';

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
  Button,
} from './styles';

const SideMenu: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const sideMenuSwitchHandler = () => {
    setIsToggled(current => !current);
  };

  useEffect(() => {
    setIsToggled(current => !current);
  }, []);

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
          <Button type="button" onClick={sideMenuSwitchHandler}>
            {!isToggled && <SideMenuSwitcherIcon />}
            {isToggled && <SideMenuSwitcherReverseIcon />}
          </Button>
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

          <Button type="button" onClick={sideMenuSwitchHandler}>
            {!isToggled && <SideMenuSwitcherIcon />}
            {isToggled && <SideMenuSwitcherReverseIcon />}
          </Button>
        </SideMenuContainerRetracted>
      )}
    </>
  );
};

export default SideMenu;
