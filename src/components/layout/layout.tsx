import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';

const Layout = () => (
    <div className='h-screen w-screen flex flex-col gap-y-20 overflow-x-hidden scrollbar-thin scrollbar-track-rounded scrollbar-thumb-rounded scrollbar-track-gray-300 scrollbar-thumb-gray-400'>
        <Header />
        <main className='flex-1'>
          <Outlet />
        </main>
    </div>
  );

export default Layout;
