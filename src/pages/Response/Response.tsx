import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Btn, ContentPaper } from '../../components';

import svg from '../../images/sprite.svg';
import s from './Response.module.css';

const Response: React.FunctionComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/');
  };

  const fromGmail = location?.state?.from?.pathname === '/no-gmail';

  return (
    <ContentPaper>
      <section className={s.section}>
        <svg width="90" height="90" className={s.icon}>
          <use href={`${svg}#icon-progress`}></use>
        </svg>
        <h2 className={s.title}>Response received</h2>
        <p className={s.text}>
          Thank you for your interest in Chad! We’ll be hard at work building
          integrations to support your
          {fromGmail ? 'email client' : 'platform'}.
        </p>
        <Btn text="Done" type="button" onClick={handleBtnClick} />
      </section>
    </ContentPaper>
  );
};

export default Response;
