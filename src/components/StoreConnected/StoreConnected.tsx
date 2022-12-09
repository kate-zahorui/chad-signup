import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../services/hooks/reduxHooks';
import { Button } from '../../components';

// import s from './StoreConnected.module.css';

const StoreConnected: React.FunctionComponent = () => {
  const { userData } = useAppSelector(state => state.auth);

  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/connect-gmail');
  };

  return (
    <section>
      <h2>Store connected</h2>
      {userData && (
        <p>
          Chad is now able to manage customer support requests for&nbsp;
          {userData?.name}.
        </p>
      )}
      <Button text="Continue" type="button" onClick={handleBtnClick} />
      <p>
        Wrong store?
        <Link to="/">Connect another one</Link>
      </p>
    </section>
  );
};

export default StoreConnected;
