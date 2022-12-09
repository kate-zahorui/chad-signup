import React from 'react';
// import { useLocation } from 'react-router-dom';

import { Button } from '../../components';
// import s from './Response.module.css';

const Response: React.FunctionComponent = () => {
  // const location = useLocation();

  return (
    <section>
      <h2>Response received</h2>
      <p>
        Thank you for your interest in Chad! We’ll be hard at work building
        integrations to support your platform.
        {/* email client */}
      </p>
      <Button text="Done" type="button" />
    </section>
  );
};

export default Response;
