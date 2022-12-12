import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// import s from './Button.module.css';

interface IProps {
  text: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

const ColorButton = styled(Button)<ButtonProps>(() => ({
  width: '100%',
  padding: '11px',
  color: '#fff',
  backgroundColor: 'var(--accent-color)',
  borderRadius: '8px',
  border: '1px solid transparent',
  '&:hover': {
    color: 'var(--accent-color)',
    backgroundColor: '#fff',
    border: '1px solid var(--accent-color)',
  },
}));

const Btn: React.FunctionComponent<IProps> = ({
  text,
  onClick,
  type = 'submit',
}) => {
  return (
    <ColorButton type={type} onClick={onClick} variant="contained">
      {text}
    </ColorButton>
  );
};

export default Btn;
