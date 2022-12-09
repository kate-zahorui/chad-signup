import React from 'react';
import { Outlet } from 'react-router-dom';

// import s from './PublicRoute.module.css';

const PublicRoute: React.FunctionComponent = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicRoute;
