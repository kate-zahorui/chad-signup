import React from 'react';
import { ListItem } from '@mui/material';

import s from './BenefitsItem.module.css';

interface IProps {
  children: any;
}

const BenefitsItem: React.FunctionComponent<IProps> = ({ children }) => {
  return (
    <ListItem className={s.list__item}>
      <div>{children}</div>
    </ListItem>
  );
};

export default BenefitsItem;
