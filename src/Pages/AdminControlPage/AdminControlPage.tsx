import { Divider } from '@mui/material';
import NavMenu from '../../components/NavMenu/NavMenu';
import Toolbar from '../../components/Toolbar/Toolbar.component';
import { AdminControlContentStyles } from './AdminControlPage.styles';
import { AdminPanelSettingsIcon } from '../../components/Toolbar/Toolbar.styles';
import { Outlet } from 'react-router-dom';
import { IAdminControlPageProps } from '../../types/Interfaces';

function AdminControlPage({ user }: IAdminControlPageProps) {
  return (
    <>
      <Toolbar title={'Панель управления'} icon={<AdminPanelSettingsIcon />} showServicesButtons={true} />
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
