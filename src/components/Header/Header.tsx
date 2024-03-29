import { memo, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountCircleOutlined } from '@mui/icons-material';
import { IconButton, Typography, Menu, Tooltip, MenuItem } from '@mui/material';

import { IHeaderProps } from '../../types/Interfaces';
import {
  ControlPanelStyles,
  GreetingTextStyles,
  HeaderContainerStyles,
  HeaderStyles,
  LogoImage,
} from './Header.styles';

import { mainGrey } from '../../styles/Colors';
import logo from '../../assets/img/images/logo.svg';

function Header({ user, setUser }: IHeaderProps) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [greeting, setGreeting] = useState('');

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && setUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useLayoutEffect(() => {
    if (user.isAdmin) {
      setGreeting('Привет, Админ!');
    } else {
      setGreeting('Добро пожаловать!');
    }
  }, [user]);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChoosePage = (page: string) => {
    if (page === 'Home') {
      navigate('/');
    } else if (user.isAdmin && page === 'Dashboard') {
      navigate('admin-control');
    } else if (page === 'Login') {
      const password = prompt('Введите пароль для входа:');
      if (password === '111') {
        const newUser = { ...user, isAdmin: true };
        localStorage.setItem('user', JSON.stringify(newUser));
        if (setUser) {
          setUser(_prev => newUser);
        }
        navigate('admin-control');
      } else {
        alert('Неверный пароль. Вход запрещен.');
      }
    } else if (user.isAdmin && page === 'Logout') {
      localStorage.removeItem('user');
      if (setUser) {
        setUser({ ...user, isAdmin: false });
      }
      navigate('/');
    }
    setAnchorElUser(null);
  };

  const pages = ['Login', 'Home', 'Dashboard', 'Logout'];

  return (
    <HeaderStyles>
      <HeaderContainerStyles>
        <LogoImage src={logo} alt="Логотип" />
        <ControlPanelStyles>
          <GreetingTextStyles>{greeting}</GreetingTextStyles>
          <Tooltip title="User Menu">
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
              <MenuItem key={page}>
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
