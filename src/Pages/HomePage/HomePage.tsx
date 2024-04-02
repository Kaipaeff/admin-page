import { Divider } from '@mui/material';

import Products from '../../components/ProductList/ProductList';
import Toolbar from '../../components/Toolbar/Toolbar.component';

import { IHomePageProps } from '../../types/Interfaces';
import { HomePageIcon } from '../../components/Toolbar/Toolbar.styles';

function HomePage({ allProducts, user }: IHomePageProps) {
  return (
    <>
      <Toolbar title={'Главная'} icon={<HomePageIcon />} showServicesButtons={false} />
      <Divider variant="fullWidth" sx={{ mb: '24px' }} />
      <Products allProducts={allProducts} />
    </>
  );
}

export default HomePage;
