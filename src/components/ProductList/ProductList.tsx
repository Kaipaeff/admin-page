import { Link, Outlet, useMatch, useParams } from 'react-router-dom';

import {} from 'react-router-dom';

import ProductItem from '../ProductItem/ProductItem';

import { ProductsItemsStyles, ProductsStyles } from './ProductList.styles';
import { Skeleton } from '../Skeleton/Skeleton';
import { useGetProductsQuery } from '../../store/fakeApi/fakeApi.api';

function ProductList() {
  const { isLoading, data } = useGetProductsQuery('products');
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
        ) : isLoading ? (
          [...new Array(5)].map((_, index) => <Skeleton key={index} />)
        ) : (
          data?.map(item => (
            <Link key={item.id} to={pathUrl(item.id)}>
              <ProductItem key={item.id} product={item} />
            </Link>
          ))
        )}
      </ProductsItemsStyles>
    </ProductsStyles>
  );
}

export default ProductList;
