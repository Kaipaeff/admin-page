import { memo } from 'react';

import ProductItem from '../ProductItem/ProductItem';
import { products } from '../../utilities/data';

import { ProductsItemsStyles, ProductsStyles } from './Products.styles';

function Products() {
  console.log('products', products);

  return (
    <ProductsStyles>
      <ProductsItemsStyles>
        {products.map((item, index) => (
          <ProductItem key={item.id} item={item} index={index} />
        ))}
      </ProductsItemsStyles>
    </ProductsStyles>
  );
}

export default memo(Products);
