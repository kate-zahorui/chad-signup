import React from 'react';

import { Button } from '../';
// import s from './NoMobileAccess.module.css';

const NoMobileAccess: React.FunctionComponent = () => {
  return (
    <section>
      <h2>You’re ready to go!</h2>
      <p>
        Chad doesn’t support mobile browsers. To access your dashboard, login
        from your laptop or desktop computer.
      </p>

      <Button text="Ok" type="button" />
    </section>
  );
};

export default NoMobileAccess;
