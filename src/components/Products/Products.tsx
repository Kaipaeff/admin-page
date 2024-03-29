import { Link, Outlet, useMatch, useParams } from 'react-router-dom';

import {} from 'react-router-dom';

import ProductItem from '../ProductItem/ProductItem';

import { IProductsProps } from '../../types/Interfaces';
import { ProductsItemsStyles, ProductsStyles } from './Products.styles';

function Products({ allProducts }: IProductsProps) {
  const { id } = useParams();
  const match = useMatch('/admin-control/products');

  const pathUrl = (id: number) => {
    return match ? `/admin-control/products/${id}` : `/products/${id}`;
  };

  return (
    <ProductsStyles>
      <ProductsItemsStyles>
        {id ? (
          <Outlet />
        ) : (
          allProducts.map(item => (
            <Link key={item.id} to={pathUrl(item.id)}>
              <ProductItem key={item.id} product={item} />
            </Link>
          ))
        )}
      </ProductsItemsStyles>
    </ProductsStyles>
  );
}

export default Products;
