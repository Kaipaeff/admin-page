import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { IProduct, IUser } from './types/Interfaces';
import { GlobalStyles } from './styles/GlobalStyles';

import Layout from './components/Layout/Layout';
import Products from './components/Products/Products';

import AdminControlPage from './Pages/AdminControlPage/AdminControlPage';
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';

function App() {
  const [user, setUser] = useState<IUser>({ login: 'Admin', password: '123', isAdmin: false });
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setAllProducts(data));
  }, []);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<HomePage allProducts={allProducts} user={user} />} />
          <Route path="admin-control" element={<AdminControlPage allProducts={allProducts} user={user} />}>
            <Route path="products" element={<Products allProducts={allProducts} />} />
          </Route>
          <Route path="products/:id" element={<SingleProductPage allProducts={allProducts} user={user} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
