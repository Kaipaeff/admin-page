import { Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';

import Layout from './components/Layout/Layout';
import ProductList from './components/ProductList/ProductList';

import AdminControlPage from './Pages/AdminControlPage/AdminControlPage';
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import ReportsPage from './Pages/Reports/ReportsPage';
import UsersPage from './Pages/Users/UsersPage';
import CategoriesPage from './Pages/Categories/CategoriesPage';
import OrdersPage from './Pages/Orders/OrdersPage';
import StartPage from './Pages/StartPage/StartPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/admin-page" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="admin-control" element={<AdminControlPage />}>
            <Route path="start-page" element={<StartPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="categories" element={<CategoriesPage />} />

            <Route path="products" element={<ProductList />}>
              <Route path=":id" element={<SingleProductPage />} />
            </Route>

            <Route path="orders" element={<OrdersPage />} />
            <Route path="reports" element={<ReportsPage />} />
          </Route>
          <Route path="products/:id" element={<SingleProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
