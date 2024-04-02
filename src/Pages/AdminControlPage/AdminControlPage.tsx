import { Outlet } from 'react-router-dom';
import { Divider } from '@mui/material';

import NavMenu from '../../components/NavMenu/NavMenu';
import Toolbar from '../../components/Toolbar/Toolbar.component';

import { IAdminControlPageProps } from '../../types/Interfaces';
import { AdminControlContentStyles } from './AdminControlPage.styles';
import { AdminPanelSettingsIcon } from '../../components/Toolbar/Toolbar.styles';

function AdminControlPage({ allProducts }: IAdminControlPageProps) {
  return (
    <>
      <Toolbar title={'Панель управления'} icon={<AdminPanelSettingsIcon />} allProducts={allProducts} />
      <Divider variant="fullWidth" sx={{ mb: '24px' }} />
      <AdminControlContentStyles>
        <NavMenu />
        <Divider orientation="vertical" variant="fullWidth" sx={{ mr: '24px' }} />
        <Outlet />
      </AdminControlContentStyles>
    </>
  );
}

export default AdminControlPage;
