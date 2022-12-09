import React from 'react';

import { LogInForm, Logo } from '../../components';
// import s from './LogInPage.module.css';

const LogInPage: React.FunctionComponent = () => {
  return (
    <main>
      <Logo />
      <section>
        <h2>Welcome back</h2>
        <p>Feeling ready to take on the day? Chad is too!</p>
        <LogInForm />
        <p>
          Don’t have an account?
          {/* <a href="">Join the waitlist</a> */}
        </p>
      </section>
    </main>
  );
};

export default LogInPage;
