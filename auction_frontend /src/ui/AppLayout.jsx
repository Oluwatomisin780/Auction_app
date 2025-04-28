import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <>
      <Header />
      <SideBar />
      <div className=" mt-6  pt-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
