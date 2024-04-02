import { Link, Outlet, useMatch, useParams } from 'react-router-dom';

import {} from 'react-router-dom';

import ProductItem from '../ProductItem/ProductItem';

import { IProductsProps } from '../../types/Interfaces';
import { ProductsItemsStyles, ProductsStyles } from './ProductList.styles';
import { Skeleton } from '../Skeleton/Skeleton';

function Products({ allProducts, loading }: IProductsProps) {
  const { id } = useParams();
  const match = useMatch('/admin-control/products');

  const pathUrl = (id: number) => {
    return match ? `/admin-control/products/${id}` : `/products/${id}`;
  };

  return (
    <ProductsStyles>
      <ProductsItemsStyles>
        {id ? (
          loading ? (
            [...new Array(5)].map((_, index) => <Skeleton key={index} />)
          ) : (
            <Outlet />
          )
        ) : loading ? (
          [...new Array(5)].map((_, index) => <Skeleton key={index} />)
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
