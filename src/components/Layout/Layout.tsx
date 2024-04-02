import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';

import { ILayoutProps } from '../../types/Interfaces';

function Layout({ user, setUser }: ILayoutProps) {
  return (
    <>
      <Header user={user} setUser={setUser} />

      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
