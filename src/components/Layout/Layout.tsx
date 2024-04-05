import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';

import { IUser } from '../../types/Interfaces';
import { useState } from 'react';

function Layout() {
  const [user, setUser] = useState<IUser>({ login: 'Admin', password: '123', isAdmin: false });

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
