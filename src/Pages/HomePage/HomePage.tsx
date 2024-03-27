import Products from '../../components/Products/Products';
import Toolbar from '../../components/Toolbar/Toolbar.component';

import { Divider } from '@mui/material';
import { HomePageIcon } from '../../components/Toolbar/Toolbar.styles';

function HomePage() {
  return (
    <>
      <Toolbar title={'Главная'} icon={<HomePageIcon />} />
      <Divider variant="fullWidth" sx={{ mb: '24px' }} />
      <Products />
    </>
  );
}

export default HomePage;
