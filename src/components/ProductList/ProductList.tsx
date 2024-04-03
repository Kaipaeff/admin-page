import { Link, Outlet, useMatch, useParams } from 'react-router-dom';

import {} from 'react-router-dom';

import ProductItem from '../ProductItem/ProductItem';

import { ProductsItemsStyles, ProductsStyles } from './ProductList.styles';
import { Skeleton } from '../Skeleton/Skeleton';
import useProducts from '../hooks/useProducts.hook';

function ProductList() {
  const { products, loading } = useProducts();
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
        ) : loading ? (
          [...new Array(5)].map((_, index) => <Skeleton key={index} />)
        ) : (
          products.map(item => (
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
