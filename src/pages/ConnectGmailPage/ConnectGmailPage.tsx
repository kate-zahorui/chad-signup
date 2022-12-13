import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { List } from '@mui/material';

import {
  useAppSelector,
  useAppDispatch,
} from '../../services/hooks/reduxHooks';
import useWindowDimensions from '../../services/hooks/useWindowDimensions';
import { connectGmail, register } from '../../redux/auth/authOperations';
import { setIsLogin, setIsModalShown } from '../../redux/auth/authSlice';
import { BtnGmail, BenefitsItem, ContentPaper, Logo } from '../../components';

import s from './ConnectGmailPage.module.css';

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
      dispatch(setIsLogin(true));
      dispatch(setIsModalShown(true));
    } else {
      navigate('/no-access');
    }
    // eslint-disable-next-line
  }, [isRegistered, width]);

  const handleBtnClick = () => {
    dispatch(connectGmail());
  };

  return (
    <ContentPaper>
      <Logo />
      <section>
        <h2 className={s.title}>Connect your customer support email</h2>
        <p className={s.text}>
          Allows Chad to send automated responses on your behalf from your usual
          support mailbox
        </p>
        <List className={s.list}>
          <BenefitsItem>
            <h3 className={s.item__title}>Contextual responses</h3>
            <p className={s.item__text}>
              Custom responses to any support situation from “where’s my stuff?”
              to “I want a refund”
            </p>
          </BenefitsItem>
          <BenefitsItem>
            <h3 className={s.item__title}>Reply from anywhere</h3>
            <p className={s.item__text}>
              Respond to your customers via email or Chad chat—it’s all saved in
              the same thread
            </p>
          </BenefitsItem>
          <BenefitsItem>
            <h3 className={s.item__title}>Categorical inbox tags</h3>
            <p className={s.item__text}>
              Tags your emails by category so you know what to expect before
              even opening an email
            </p>
          </BenefitsItem>
        </List>

        <BtnGmail type="button" onClick={handleBtnClick} />

        <div className={s.link}>
          <Link to="/no-gmail">I don’t use Gmail</Link>
        </div>
      </section>
    </ContentPaper>
  );
};

export default ConnectGmailPage;
