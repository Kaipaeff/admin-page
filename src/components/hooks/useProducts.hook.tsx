// import { useState, useLayoutEffect } from 'react';
// import { fetchProductsApi } from '../../services/product-api.service';
// import { ProductType } from '../../types/Interfaces';

// function useProducts() {
//   const [products, setProducts] = useState<ProductType[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);

//   useLayoutEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         const allProductsApi: ProductType[] = await fetchProductsApi();
//         setProducts(allProductsApi);
//       } catch (error) {
//         console.error('Ошибка при получении данных с сервера:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return { products, loading };
// }

// export default useProducts;
