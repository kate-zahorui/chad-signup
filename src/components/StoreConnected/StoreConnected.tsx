import React from 'react';

import { Button } from '../../components';
// import s from './StoreConnected.module.css';

const StoreConnected: React.FunctionComponent = () => {
  const handleBtnClick = () => {
    //  navigate to Connect Gmail Page
  };

  return (
    <section>
      <h2>Store connected</h2>
      <p>
        Chad is now able to manage customer support requests for [STORE-NAME].
      </p>
      <Button text="Continue" type="button" onClick={handleBtnClick} />
      <p>
        Wrong store?
        {/* <a href="">Connect another one</a> */}
      </p>
    </section>
  );
};

export default StoreConnected;
