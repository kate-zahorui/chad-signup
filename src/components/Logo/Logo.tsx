import React from 'react';

import svg from '../../images/sprite.svg';
// import s from './Logo.module.css';

const Logo: React.FunctionComponent = () => {
  return (
    <>
      <svg width="32" height="32">
        <use href={`${svg}#icon-chad-logo`}></use>
      </svg>
      <p>Chad</p>
    </>
  );
};

export default Logo;
