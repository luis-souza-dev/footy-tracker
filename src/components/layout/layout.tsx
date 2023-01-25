import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';

const Layout = () => (
    <div className='h-screen w-screen flex flex-col gap-y-20 overflow-hidden'>
        <Header />
        <main className='flex-1'>
          <Outlet />
        </main>
    </div>
  );

export default Layout;
