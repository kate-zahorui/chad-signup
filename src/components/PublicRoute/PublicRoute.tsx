import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../../services/hooks/reduxHooks';
// import s from './PublicRoute.module.css';

const PublicRoute: React.FunctionComponent = () => {
  const { isLogin } = useAppSelector(state => state.auth);
  return <>{!isLogin ? <Outlet /> : <Navigate to="/home" />}</>;
};

export default PublicRoute;
