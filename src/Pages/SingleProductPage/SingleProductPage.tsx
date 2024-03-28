import { useNavigate, useParams } from 'react-router-dom';
import { KeyboardBackspace } from '@mui/icons-material';
import { Button, Divider } from '@mui/material';

import ProductItem from '../../components/ProductItem/ProductItem';

import { ISingleProductPageProps } from '../../types/Interfaces';
import { mainGrey } from '../../styles/Colors';

function SingleProductPage({ allProducts }: ISingleProductPageProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = allProducts.find(el => el.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '11px',
          marginRight: 'auto',
          color: mainGrey,
        }}
      >
        <KeyboardBackspace />
        назад
      </Button>

      <Divider variant="fullWidth" sx={{ mb: '24px' }} />
      <ProductItem product={product} />
    </>
  );
}

export default SingleProductPage;
