import React from 'react';

// import s from './Button.module.css';

interface IProps {
  text: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

const Button: React.FunctionComponent<IProps> = ({
  text,
  onClick,
  type = 'submit',
}) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
