import React from 'react';

import { Logo, PlatformSelectForm } from '../../components';
// import s from './NoGmail.module.css';

const NoGmail: React.FunctionComponent = () => {
  const options = ['Microsoft Outlook', 'Yahoo', 'Other'];

  return (
    <main>
      <Logo />
      <section>
        <h2>Don’t use Gmail?</h2>
        <p>
          Chad Beta is currently only integrated with Gmail. We’ll send you an
          email when Chad becomes compatible with your support ticket platform.
        </p>
        <PlatformSelectForm options={options} />
        <p>
          Actually use Gmail?
          {/* <a href="">Connect</a> */}
        </p>
      </section>
    </main>
  );
};

export default NoGmail;
