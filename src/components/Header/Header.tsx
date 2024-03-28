import { memo, useState } from 'react';
import { AccountCircleOutlined } from '@mui/icons-material';
import { IconButton, Typography, Menu, Tooltip, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const pages = ['Home', 'Dashboard'];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChoosePage = (page: string) => {
    if (page === 'Home') {
      navigate('/');
    } else if (page === 'Dashboard') {
      navigate('/admin-control');
    }
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
            {pages.map(page => (
              <MenuItem key={page} onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={() => handleChoosePage(page)}>
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </ControlPanelStyles>
      </HeaderContainerStyles>
    </HeaderStyles>
  );
}

export default memo(Header);
