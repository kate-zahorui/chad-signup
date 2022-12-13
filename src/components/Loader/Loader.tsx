import React from 'react';
import { Oval } from 'react-loader-spinner';

import s from './Loader.module.css';

const Loader: React.FunctionComponent = () => {
  return (
    <div className={s.container}>
      <Oval color="#32abf2" height={100} width={100} />
    </div>
  );
};

export default Loader;
