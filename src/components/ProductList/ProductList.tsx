import { Link, Outlet, useMatch, useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../store/product/productsApi';

import ProductItem from '../ProductItem/ProductItem';
import { Skeleton } from '../Skeleton/Skeleton';

import { ProductsItemsStyles, ProductsStyles } from './ProductList.styles';

function ProductList() {
  const { isLoading, data = [] } = useGetProductsQuery('');
  const { id } = useParams();
  const match = useMatch('/admin-page/admin-control/products');

  const pathUrl = (id: string) => {
    return match ? `/admin-page/admin-control/products/${id}` : `/admin-page/products/${id}`;
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
