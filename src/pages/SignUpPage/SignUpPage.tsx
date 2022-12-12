import React from 'react';
import { Link } from 'react-router-dom';

import useWindowDimensions from '../../services/hooks/useWindowDimensions';
import { ContentPaper, Logo, SignUpForm, StepsMobile } from '../../components';

import s from './SignUpPage.module.css';

const SignUpPage: React.FunctionComponent = () => {
  const { width } = useWindowDimensions();

  return (
    <ContentPaper>
      <Logo />
      {width < 834 && <StepsMobile />}
      <section>
        <h2 className={s.title}>Welcome to Chad</h2>
        <p className={s.text}>
          Go live in 10 minutes! Our self-service widget empowers your customers
          to manage orders and track shipments 24/7 without driving you crazy.
        </p>
        <SignUpForm />
        <p className={s.link}>
          Already have an account?
          <Link to="/login" className={s.link__accent}>
            Login
          </Link>
        </p>
      </section>
    </ContentPaper>
  );
};

export default SignUpPage;
