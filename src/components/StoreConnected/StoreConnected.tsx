import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../services/hooks/reduxHooks';
import { Btn } from '../../components';

import s from './StoreConnected.module.css';

const StoreConnected: React.FunctionComponent = () => {
  const { userData } = useAppSelector(state => state.auth);

  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/connect-gmail');
  };

  return (
    <section>
      <h2 className={s.title}>Store connected</h2>
      {userData && (
        <p className={s.text}>
          Chad is now able to manage customer support requests for&nbsp;
          {userData?.name}.
        </p>
      )}
      <Btn text="Continue" type="button" onClick={handleBtnClick} />
      <p className={s.link}>
        Wrong store?
        <Link to="/" className={s.link__accent}>
          Connect another one
        </Link>
      </p>
    </section>
  );
};

export default StoreConnected;
