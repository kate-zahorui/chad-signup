import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useAppSelector,
  useAppDispatch,
} from '../../services/hooks/reduxHooks';
import { setIsLogin } from '../../redux/auth/authSlice';
import { Button } from '../../components';

// import s from './NoMobileAccess.module.css';

const NoMobileAccess: React.FunctionComponent = () => {
  const { isLogin, userData } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBtnClick = () => {
    if (isLogin) {
      dispatch(setIsLogin(false));
    }
    navigate('/login');
  };

  const handleLogoutBtnClick = () => {
    dispatch(setIsLogin(false));
  };

  return (
    <main>
      <section>
        {isLogin ? (
          <h2>Use your desktop to access Chad</h2>
        ) : (
          <h2>You’re ready to go!</h2>
        )}
        <p>
          Chad doesn’t support mobile browsers. To access your dashboard, login
          from your laptop or desktop computer.
        </p>

        <Button text="Ok" type="button" onClick={handleBtnClick} />
        {isLogin && (
          <p>
            Not {userData?.email}
            <button type="button" onClick={handleLogoutBtnClick}>
              Logout
            </button>
          </p>
        )}
      </section>
    </main>
  );
};

export default NoMobileAccess;
