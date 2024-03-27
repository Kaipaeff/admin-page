import { memo } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />

      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default memo(Layout);
