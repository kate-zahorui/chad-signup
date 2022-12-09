import React from 'react';

// import s from './Button.module.css';

interface IProps {
  text: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

const Button: React.FunctionComponent<IProps> = ({ text, type = 'submit' }) => {
  return <button type={type}>{text}</button>;
};

export default Button;
