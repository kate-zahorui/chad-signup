import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../../components';
// import s from './Response.module.css';

const Response: React.FunctionComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/');
  };

  const fromGmail = location?.state?.from?.pathname === '/no-gmail';

  return (
    <section>
      <h2>Response received</h2>
      <p>
        Thank you for your interest in Chad! We’ll be hard at work building
        integrations to support your
        {fromGmail ? 'email client' : 'platform'}.
      </p>
      <Button text="Done" type="button" onClick={handleBtnClick} />
    </section>
  );
};

export default Response;
