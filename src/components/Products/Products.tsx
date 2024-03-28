import ProductItem from '../ProductItem/ProductItem';

import { IProductsProps } from '../../types/Interfaces';
import { ProductsItemsStyles, ProductsStyles } from './Products.styles';
import CustomLink from '../hooks/CustomLink';

function Products({ allProducts }: IProductsProps) {
  return (
    <ProductsStyles>
      <ProductsItemsStyles>
        {allProducts.map(item => (
          <CustomLink key={item.id} to={`/products/${item.id}`}>
            <ProductItem key={item.id} product={item} />
          </CustomLink>
        ))}
      </ProductsItemsStyles>
    </ProductsStyles>
  );
}

export default Products;
