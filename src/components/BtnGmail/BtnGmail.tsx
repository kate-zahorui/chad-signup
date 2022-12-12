import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import svg from '../../images/sprite.svg';
import s from './BtnGmail.module.css';

interface IProps {
  type?: 'button' | 'submit';
  onClick?: () => void;
}

const StyledButton = styled(Button)<ButtonProps>(() => ({
  width: '100%',
  height: '50px',
  position: 'relative',
  borderRadius: '2px',
  border: '1px solid #5383EC',
  backgroundColor: '#5383EC',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#5383EC',
  },
}));

const BtnGmail: React.FunctionComponent<IProps> = ({
  onClick,
  type = 'submit',
}) => {
  return (
    <StyledButton type={type} onClick={onClick} variant="contained">
      <div className={s.iconBox}>
        <svg width="18" height="18" className={s.icon}>
          <use href={`${svg}#icon-gmail`}></use>
        </svg>
      </div>

      <span>Connect Gmail account</span>
    </StyledButton>
  );
};

export default BtnGmail;
