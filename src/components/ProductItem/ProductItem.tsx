import { useMatch, useParams } from 'react-router-dom';
import { Card, CardContent, Divider, Rating, Button } from '@mui/material';

import { IProductItemProps } from '../../types/Interfaces';

import {
  ProductItemDescrStyles,
  ProductItemImageContainerStyles,
  ProductItemInfoStyles,
  ProductItemPriceStyles,
  ProductItemRatingStyles,
  ProductItemStyles,
  ProductItemTitleStyles,
} from './ProductItem.styles';

import { mediumGrey, white } from '../../styles/Colors';
import ControlButtons from '../ControlButtons/ControlButtons.component';

function ProductItem({ product: { title, price, image, description, rating, id: productId } }: IProductItemProps) {
  const { id } = useParams();
  const match = useMatch(`admin-control/products/${id}`);

  return (
    <ProductItemStyles>
      <Card sx={{ maxWidth: 1, backgroundColor: white }}>
        <CardContent
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: `${id ? '48px' : ''}`,
            height: `${id ? '580px' : ''}`,
            padding: '24px 80px',
            '@media (max-width: 640px)': {
              padding: '12px',
            },
          }}
        >
          <ProductItemImageContainerStyles width={id && '290px'}>
            <img src={image} alt="Картинка товара" width={id && '290px'} />
          </ProductItemImageContainerStyles>

          {!id && <Divider orientation="vertical" variant="fullWidth" sx={{ m: '0 56px', height: '120px' }} />}

          <ProductItemInfoStyles $gap={id && '24px'}>
            <ProductItemTitleStyles fontSize={id && '22px'}>{title}</ProductItemTitleStyles>

            <ProductItemDescrStyles
              fontSize={id && '18px'}
              overflow={!id ? 'hidden' : 'visible'}
              $textOverflow={!id ? 'ellipsis' : 'clip'}
              display={!id ? '-webkit-box' : 'flex'}
              $webkitLineClamp={!id ? '1' : 'auto'}
              $webkitBoxOrient={!id ? 'vertical' : 'inherit'}
            >
              {description}
            </ProductItemDescrStyles>

            {id && (
              <ProductItemRatingStyles>
                <Rating name="read-only" value={rating.rate} readOnly />
                {`(${rating.count})`}
              </ProductItemRatingStyles>
            )}

            <ProductItemPriceStyles fontSize={id && '32px'}>
              <sup style={{ color: mediumGrey, fontSize: '0.7em', marginRight: '4px' }}>$</sup>
              {price}
            </ProductItemPriceStyles>

            {id && !match && (
              <Button variant="contained" color="success" sx={{ width: '160px' }}>
                В корзину
              </Button>
            )}
            {match && <ControlButtons id={productId} />}
          </ProductItemInfoStyles>
        </CardContent>
      </Card>
    </ProductItemStyles>
  );
}

export default ProductItem;
