import { memo, useState } from 'react';
import { AccountCircleOutlined } from '@mui/icons-material';
import { IconButton, Typography, Menu, Tooltip, MenuItem } from '@mui/material';

import {
  ControlPanelStyles,
  GreetingTextStyles,
  HeaderContainerStyles,
  HeaderStyles,
  LogoImage,
} from './Header.styles';

import { mainGrey } from '../../styles/Colors';
import logo from '../../assets/img/images/logo.svg';

function Header() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const settings = ['Account', 'Dashboard', 'Logout'];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <HeaderStyles>
      <HeaderContainerStyles>
        <LogoImage src={logo} alt="Логотип" />
        <ControlPanelStyles>
          <GreetingTextStyles>Привет, Админ!</GreetingTextStyles>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AccountCircleOutlined
                fontSize="large"
                sx={{
                  cursor: 'pointer',
                  color: mainGrey,
                  '@media (max-width: 640px)': {
                    fontSize: '28px',
                  },
                }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map(setting => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </ControlPanelStyles>
      </HeaderContainerStyles>
    </HeaderStyles>
  );
}

export default memo(Header);
