import { Divider } from '@mui/material';

import { IMainProps } from '../../types/Interfaces';
import { MainStyles } from './Main.styles';

function Main({ children }: IMainProps) {
  return (
    <MainStyles>
      {children}
      <Divider variant="fullWidth" sx={{ mt: 'auto', pt: '24px' }} />
    </MainStyles>
  );
}

export default Main;
