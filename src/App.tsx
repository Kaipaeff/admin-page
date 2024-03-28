import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { IProduct } from './types/Interfaces';
import Layout from './components/Layout/Layout';
import { GlobalStyles } from './styles/GlobalStyles';

import AdminControlPage from './Pages/AdminControlPage/AdminControlPage';
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import Products from './components/Products/Products';

function App() {
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  console.log('allProducts:', allProducts);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setAllProducts(data));
  }, []);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage allProducts={allProducts} />} />
          <Route path="admin-control" element={<AdminControlPage />}>
            <Route path="products" element={<Products allProducts={allProducts} />} />
          </Route>
          <Route path="products/:id" element={<SingleProductPage allProducts={allProducts} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
