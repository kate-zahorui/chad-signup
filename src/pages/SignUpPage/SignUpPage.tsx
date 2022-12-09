import React from 'react';
// import s from './SignUpPage.module.css';

import useWindowDimensions from '../../services/hooks/useWindowDimensions';
import { Logo, SignUpForm, StepsMobile } from '../../components';

const SignUpPage: React.FunctionComponent = () => {
  const { width } = useWindowDimensions();

  return (
    <main>
      <Logo />
      {width < 834 && <StepsMobile />}
      <section>
        <h2>Welcome to Chad</h2>
        <p>
          Go live in 10 minutes! Our self-service widget empowers your customers
          to manage orders and track shipments 24/7 without driving you crazy.
        </p>
        <SignUpForm />
        <p>
          Already have an account?
          {/* <a href="">Login</a> */}
        </p>
      </section>
    </main>
  );
};

export default SignUpPage;
