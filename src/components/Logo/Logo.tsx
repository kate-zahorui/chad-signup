import React from 'react';

import svg from '../../images/sprite.svg';
import s from './Logo.module.css';

const Logo: React.FunctionComponent = () => {
  return (
    <div className={s.logo}>
      <svg width="32" height="32" className={s.logo__icon}>
        <use href={`${svg}#icon-chad-logo`}></use>
      </svg>
      <h1 className={s.logo__text}>Chad</h1>
    </div>
  );
};

export default Logo;
