import React from 'react';
import { Link } from 'react-router-dom';

import { ContentPaper, Logo, PlatformSelectForm } from '../../components';
import s from './NoGmail.module.css';

const NoGmail: React.FunctionComponent = () => {
  const options = ['Microsoft Outlook', 'Yahoo', 'Other'];

  return (
    <ContentPaper>
      <Logo />
      <section>
        <h2 className={s.title}>Don’t use Gmail?</h2>
        <p className={s.text}>
          Chad Beta is currently only integrated with Gmail. We’ll send you an
          email when Chad becomes compatible with your support ticket platform.
        </p>
        <PlatformSelectForm options={options} />
        <p className={s.link}>
          Actually use Gmail?
          <Link to="/connect-gmail" className={s.link__accent}>
            Connect
          </Link>
        </p>
      </section>
    </ContentPaper>
  );
};

export default NoGmail;
