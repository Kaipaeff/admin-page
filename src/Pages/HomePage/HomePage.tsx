import { Divider } from '@mui/material';

import ProductList from '../../components/ProductList/ProductList';
import Toolbar from '../../components/Toolbar/Toolbar.component';

import { HomePageIcon } from '../../components/Toolbar/Toolbar.styles';

function HomePage() {
  return (
    <>
      <Toolbar title={'Главная'} icon={<HomePageIcon />} />
      <Divider variant="fullWidth" sx={{ mb: '24px' }} />
      <ProductList />
    </>
  );
}

export default HomePage;
