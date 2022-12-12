import React from 'react';
import { Link } from 'react-router-dom';

import { ContentPaper, LogInForm, Logo } from '../../components';
// import s from './LogInPage.module.css';

const LogInPage: React.FunctionComponent = () => {
  return (
    <ContentPaper>
      <Logo />
      <section>
        <h2>Welcome back</h2>
        <p>Feeling ready to take on the day? Chad is too!</p>
        <LogInForm />
        <p>
          Don’t have an account?
          <Link to="/">Join the waitlist</Link>
        </p>
      </section>
    </ContentPaper>
  );
};

export default LogInPage;
