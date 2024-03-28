import { memo } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import { Outlet } from 'react-router-dom';
import { ILayoutProps } from '../../types/Interfaces';

function Layout({ user }: ILayoutProps) {
  return (
    <>
      <Header user={user}/>

      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default memo(Layout);
