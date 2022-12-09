import React from 'react';
import { Outlet } from 'react-router-dom';

// import s from './PrivateRoute.module.css';

const PrivateRoute: React.FunctionComponent = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
