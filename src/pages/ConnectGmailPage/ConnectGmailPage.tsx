import React, { useEffect } from 'react';

import {
  useAppSelector,
  useAppDispatch,
} from '../../services/hooks/reduxHooks';
import { connectGmail, register } from '../../redux/auth/authOperations';
import { Logo } from '../../components';
// import s from './ConnectGmailPage.module.css';

const ConnectGmailPage: React.FunctionComponent = () => {
  const { userData, google_token, shop_token } = useAppSelector(
    state => state.auth
  );
  const dispatch = useAppDispatch();

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
        {/* <a href="">I don’t use Gmail</a> */}
      </section>
    </main>
  );
};

export default ConnectGmailPage;
