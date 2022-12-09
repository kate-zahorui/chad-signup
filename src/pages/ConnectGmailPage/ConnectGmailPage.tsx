import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  useAppSelector,
  useAppDispatch,
} from '../../services/hooks/reduxHooks';
import useWindowDimensions from '../../services/hooks/useWindowDimensions';
import { connectGmail, register } from '../../redux/auth/authOperations';
import { setIsLogin } from '../../redux/auth/authSlice';
import { Logo } from '../../components';
// import s from './ConnectGmailPage.module.css';

const ConnectGmailPage: React.FunctionComponent = () => {
  const { userData, google_token, shop_token, isRegistered } = useAppSelector(
    state => state.auth
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!google_token || !userData) return;
    const data = {
      ...userData,
      shop_token,
      google_token,
    };
    dispatch(register(data));
    // eslint-disable-next-line
  }, [google_token]);

  useEffect(() => {
    if (!isRegistered) return;
    if (width >= 1440) {
      setIsLogin(true);
    } else {
      navigate('/');
    }
    // eslint-disable-next-line
  }, [isRegistered, width]);

  const handleBtnClick = () => {
    dispatch(connectGmail());
  };

  return (
    <main>
      <Logo />
      <section>
        <h2>Connect your customer support email</h2>
        <p>
          Allows Chad to send automated responses on your behalf from your usual
          support mailbox
        </p>
        <ul>
          <li>
            <h3>Contextual responses</h3>
            <p>
              Custom responses to any support situation from “where’s my stuff?”
              to “I want a refund”
            </p>
          </li>
          <li>
            <h3>Reply from anywhere</h3>
            <p>
              Respond to your customers via email or Chad chat—it’s all saved in
              the same thread
            </p>
          </li>
          <li>
            <h3>Categorical inbox tags</h3>
            <p>
              Tags your emails by category so you know what to expect before
              even opening an email
            </p>
          </li>
        </ul>
        <button type="button" onClick={handleBtnClick}>
          Connect Gmail account
        </button>
        <Link to="/no-gmail">I don’t use Gmail</Link>
      </section>
    </main>
  );
};

export default ConnectGmailPage;
