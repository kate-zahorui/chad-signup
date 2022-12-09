import React from 'react';

import { Button } from '../../components';
// import s from './StoreConnected.module.css';

const StoreConnected: React.FunctionComponent = () => {
  return (
    <section>
      <h2>Store connected</h2>
      <p>
        Chad is now able to manage customer support requests for [STORE-NAME].
      </p>
      <Button text="Continue" type="button" />
      <p>
        Wrong store?
        {/* <a href="">Connect another one</a> */}
      </p>
    </section>
  );
};

export default StoreConnected;
