import { memo } from 'react';

import {
  ControlPanelStyles,
  GreetingTextStyles,
  HeaderContainerStyles,
  HeaderStyles,
  LogoImage,
} from './Header.styles';
import logo from '../../assets/img/images/logo.svg';
import { AccountCircleOutlined } from '@mui/icons-material';
import { neonGreen } from '../../styles/Colors';

function Header() {
  return (
    <HeaderStyles>
      <HeaderContainerStyles>
        <LogoImage src={logo} alt="Логотип" />
        <ControlPanelStyles>
          <GreetingTextStyles>Привет, Админ!</GreetingTextStyles>
          <AccountCircleOutlined
            fontSize="large"
            sx={{
              cursor: 'pointer',
              color: neonGreen,
              '@media (max-width: 640px)': {
                fontSize: '28px',
              },
            }}
          />
        </ControlPanelStyles>
      </HeaderContainerStyles>
    </HeaderStyles>
  );
}

export default memo(Header);
