import { Divider } from '@mui/material';

import { MainStyles } from './Main.styles';
import AdminControlPage from '../../Pages/AdminControlPage/AdminControlPage';
import HomePage from '../../Pages/HomePage/HomePage';

function Main() {
  return (
    <MainStyles>
      {/* <HomePage /> */}
      <AdminControlPage />
      <Divider variant="fullWidth" sx={{ mt: 'auto', pt: '24px' }} />
    </MainStyles>
  );
}

export default Main;
