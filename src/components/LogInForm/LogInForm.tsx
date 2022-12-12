import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { IconButton, InputLabel, OutlinedInput } from '@mui/material';

import { useAppDispatch } from '../../services/hooks/reduxHooks';
import { setIsLogin } from '../../redux/auth/authSlice';
import { Btn } from '../';

import svg from '../../images/sprite.svg';
// import s from './LogInForm.module.css';

const LogInForm: React.FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setIsLogin(true));

    setEmail('');
    setPassword('');
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <InputLabel htmlFor={emailInputId}>Email</InputLabel>
      <OutlinedInput
        id={emailInputId}
        type="email"
        name="email"
        placeholder="megachad@trychad.com"
        required
        value={email}
        onChange={handleInputChange}
      />

      <InputLabel htmlFor={passwordInputId}>Password</InputLabel>
      <div>
        <OutlinedInput
          id={passwordInputId}
          type="text"
          name="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={handleInputChange}
        />
        <IconButton aria-label="password">
          <svg width="16" height="16">
            <use href={`${svg}#icon-eye`}></use>
          </svg>
        </IconButton>
      </div>
      <Btn text="Login" />
    </form>
  );
};

export default LogInForm;
