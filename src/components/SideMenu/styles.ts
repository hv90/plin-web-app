import styled from 'styled-components';

import balance from '../../assets/images/icons/balance.png';
import balanceHover from '../../assets/images/icons/balanceHover.png';
import billing from '../../assets/images/icons/billing.png';
import billingHover from '../../assets/images/icons/billingHover.png';
import card from '../../assets/images/icons/card.png';
import cardHover from '../../assets/images/icons/cardHover.png';
import help from '../../assets/images/icons/help.png';
import helpHover from '../../assets/images/icons/helpHover.png';
import management from '../../assets/images/icons/management.png';
import managementHover from '../../assets/images/icons/managementHover.png';
import payment from '../../assets/images/icons/payment.png';
import paymentHover from '../../assets/images/icons/paymentHover.png';
import pix from '../../assets/images/icons/pix.png';
import pixHover from '../../assets/images/icons/pixHover.png';
import statement from '../../assets/images/icons/statement.png';
import statementHover from '../../assets/images/icons/statementHover.png';
import summary from '../../assets/images/icons/summary.png';
import summaryHover from '../../assets/images/icons/summaryHover.png';
import transfer from '../../assets/images/icons/transfer.png';
import transferHover from '../../assets/images/icons/transferHover.png';
import sideMenuSwitcher from '../../assets/images/icons/sideMenuSwitcher.png';
import sideMenuSwitcherHover from '../../assets/images/icons/sideMenuSwitcherHover.png';

export const SideMenuContainer = styled.div`
  @keyframes open {
    from {
      margin-left: -34px;
    }
    to {
      margin-left: 0;
    }
  }
  margin-top: -46px;
  margin-left: 0;
  width: 46px;
  height: 100%;
  background-color: #f9f9f9;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  animation: open 1.2s ease-in-out;

  button {
    background-color: transparent;
    border: none;
  }
`;

export const SideMenuContainerRetracted = styled.div`
  @keyframes retract {
    from {
      margin-left: 0;
    }
    to {
      margin-left: -34px;
    }
  }

  margin-top: -46px;
  margin-left: -34px;
  width: 46px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  animation: retract 1.2s ease-in-out;
`;

export const BalanceIcon = styled.div`
  width: 46px;
  height: 48px;
  cursor: pointer;
  background-image: url(${balance});

  &:hover {
    background-image: url(${balanceHover});
  }
`;
export const BillingIcon = styled.div`
  width: 46px;
  height: 48px;
  cursor: pointer;
  background-image: url(${billing});

  &:hover {
    background-image: url(${billingHover});
  }
`;

export const CardIcon = styled.div`
  width: 46px;
  height: 48px;
  cursor: pointer;
  background-image: url(${card});

  &:hover {
    background-image: url(${cardHover});
  }
`;

export const HelpIcon = styled.div`
  width: 46px;
  height: 48px;
  cursor: pointer;
  background-image: url(${help});

  &:hover {
    background-image: url(${helpHover});
  }
`;

export const ManagementIcon = styled.div`
  width: 46px;
  height: 48px;
  cursor: pointer;
  background-image: url(${management});

  &:hover {
    background-image: url(${managementHover});
  }
`;

export const PaymentIcon = styled.div`
  width: 46px;
  height: 48px;
  cursor: pointer;
  background-image: url(${payment});

  &:hover {
    background-image: url(${paymentHover});
  }
`;

export const PixIcon = styled.div`
  width: 46px;
  height: 48px;
  cursor: pointer;
  background-image: url(${pix});

  &:hover {
    background-image: url(${pixHover});
  }
`;

export const StatementIcon = styled.div`
  width: 46px;
  height: 48px;
  cursor: pointer;
  background-image: url(${statement});

  &:hover {
    background-image: url(${statementHover});
  }
`;

export const SummaryIcon = styled.div`
  width: 46px;
  height: 48px;
  cursor: pointer;
  background-image: url(${summary});

  &:hover {
    background-image: url(${summaryHover});
  }
`;

export const TransferIcon = styled.div`
  width: 46px;
  height: 48px;
  cursor: pointer;
  background-image: url(${transfer});

  &:hover {
    background-image: url(${transferHover});
  }
`;

export const SideMenuSwitcherIcon = styled.div`
  width: 46px;
  height: 48px;
  margin-left: 26px;
  cursor: pointer;
  background-image: url(${sideMenuSwitcher});

  &:hover {
    background-image: url(${sideMenuSwitcherHover});
  }
`;

export const SideMenuSwitcherReverseIcon = styled.div`
  width: 46px;
  height: 48px;
  margin-left: 26px;
  cursor: pointer;
  background-image: url(${sideMenuSwitcher});
  transform: rotate(180deg);
  &:hover {
    background-image: url(${sideMenuSwitcherHover});
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;
