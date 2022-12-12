import React from 'react';

import svg from '../../images/sprite.svg';
import s from './SidebarPagination.module.css';

const SidebarPagination: React.FunctionComponent = () => {
  return (
    <div className={s.pagination}>
      <svg width="88" height="8" className={s.icon}>
        <use href={`${svg}#icon-dots`}></use>
      </svg>
    </div>
  );
};

export default SidebarPagination;
