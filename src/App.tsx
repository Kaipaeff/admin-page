import AdminControlPage from './Pages/AdminControlPage/AdminControlPage';
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
// import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import { GlobalStyles } from './styles/GlobalStyles';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Header /> */}
      {/* <Main /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="admin-control" element={<AdminControlPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
