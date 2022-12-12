import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface IProps {
  text: string;

  onClick?: () => void;
  disabled?: boolean;
}

const ColorButton = styled(Button)<ButtonProps>(() => ({
  padding: '6px 12px',
  borderRadius: '4px',
  scale: '1',
  // color
  color: '#93A8C1',
  backgroundColor: '#134267',
  boxShadow: 'none',
  // font
  fontSize: '16px',
  lineHeight: '1.31',
  '&:hover': {
    scale: '1.05',
    backgroundColor: '#134267',
    boxShadow: 'none',
  },
  '&[disabled]': {
    color: '#5D7FA3',
    backgroundColor: 'transparent',
  },
}));

const NavigationButton: React.FunctionComponent<IProps> = ({
  text,
  onClick,
  disabled = false,
}) => {
  return (
    <ColorButton
      type="button"
      onClick={onClick}
      variant="contained"
      disabled={disabled}
    >
      {text}
    </ColorButton>
  );
};

export default NavigationButton;
