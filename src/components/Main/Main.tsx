import { Divider } from '@mui/material';

import Products from '../Products/Products';
import NavMenu from '../NavMenu/NavMenu';

import { AdminPanelSettingsIcon, MainContentStyles, MainStyles, MainStylesTitle } from './Main.styles';
import { Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <MainStyles>
      <MainStylesTitle>
        <AdminPanelSettingsIcon />
        Панель управления
      </MainStylesTitle>

      <Divider variant="fullWidth" sx={{ mb: '24px' }} />

      <MainContentStyles>
        <NavMenu />
        <Divider orientation="vertical" variant="fullWidth" sx={{ mr: '24px' }} />
        <Routes>
          <Route path="/admin-page/products" element={<Products />} />
        </Routes>
      </MainContentStyles>

      <Divider variant="fullWidth" sx={{ mt: '24px' }} />
    </MainStyles>
  );
}

export default Main;
