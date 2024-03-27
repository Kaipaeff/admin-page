import { Divider } from '@mui/material';

import { MainStyles } from './Main.styles';
import { IMainProps } from '../../types/Interfaces';
// import AdminControlPage from '../../Pages/AdminControlPage/AdminControlPage';
// import HomePage from '../../Pages/HomePage/HomePage';

function Main({ children }: IMainProps) {
  return (
    <MainStyles>
      {children}
      {/* <HomePage /> */}
      {/* <AdminControlPage /> */}
      <Divider variant="fullWidth" sx={{ mt: 'auto', pt: '24px' }} />
    </MainStyles>
  );
}

export default Main;
