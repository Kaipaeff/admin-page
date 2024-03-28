import { Divider } from '@mui/material';

import Products from '../../components/Products/Products';
import Toolbar from '../../components/Toolbar/Toolbar.component';

import { IHomePageProps } from '../../types/Interfaces';
import { HomePageIcon } from '../../components/Toolbar/Toolbar.styles';

function HomePage({ allProducts }: IHomePageProps) {
  return (
    <>
      <Toolbar title={'Главная'} icon={<HomePageIcon />} />
      <Divider variant="fullWidth" sx={{ mb: '24px' }} />
      <Products allProducts={allProducts} />
    </>
  );
}

export default HomePage;
