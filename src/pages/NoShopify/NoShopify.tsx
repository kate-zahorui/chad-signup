import React from 'react';

import { Logo, PlatformSelectForm } from '../../components';
// import s from './NoShopify.module.css';

const NoShopify: React.FunctionComponent = () => {
  const options = ['Salesforce', 'Ecwid', 'Other'];

  return (
    <main>
      <Logo />
      <section>
        <h2>Don’t use Shopify?</h2>
        <p>
          Chad Beta is currently only available on Shopify. We’ll send you an
          email when Chad becomes available on your platform.
        </p>
        <PlatformSelectForm options={options} />
        <p>
          Actually use Shopify?
          {/* <a href="">Connect</a> */}
        </p>
      </section>
    </main>
  );
};

export default NoShopify;
