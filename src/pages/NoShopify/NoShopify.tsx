import React from 'react';
import { Link } from 'react-router-dom';

import { ContentPaper, Logo, PlatformSelectForm } from '../../components';

import s from './NoShopify.module.css';

const NoShopify: React.FunctionComponent = () => {
  const options = ['Salesforce', 'Ecwid', 'Other'];

  return (
    <ContentPaper>
      <Logo />
      <section>
        <h2 className={s.title}>Don’t use Shopify?</h2>
        <p className={s.text}>
          Chad Beta is currently only available on Shopify. We’ll send you an
          email when Chad becomes available on your platform.
        </p>
        <PlatformSelectForm options={options} />
        <p className={s.link}>
          Actually use Shopify?
          <Link to="/connect-shopify" className={s.link__accent}>
            Connect
          </Link>
        </p>
      </section>
    </ContentPaper>
  );
};

export default NoShopify;
