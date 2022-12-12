import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { IconButton, InputLabel, OutlinedInput } from '@mui/material';

import {
  useAppDispatch,
  useAppSelector,
} from '../../services/hooks/reduxHooks';
import { setUserData } from '../../redux/auth/authSlice';
import { Btn } from '../';

import svg from '../../images/sprite.svg';
import s from './SignUpForm.module.css';

const SignUpForm: React.FunctionComponent = () => {
  const { userData } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const emailInputId = nanoid();
  const nameInputId = nanoid();
  const passwordInputId = nanoid();

  // when user comes to connect another store (to enter another name)
  useEffect(() => {
    if (!userData) return;
    setEmail(userData.email);
    setName(userData.name);
    setPassword(userData.password);
  }, [userData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
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
    dispatch(setUserData({ email, name, password }));
    setEmail('');
    setName('');
    setPassword('');
    navigate('/connect-shopify');
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <InputLabel htmlFor={emailInputId} className={s.label}>
        Email
      </InputLabel>
      <OutlinedInput
        id={emailInputId}
        type="email"
        name="email"
        placeholder="megachad@trychad.com"
        required
        value={email}
        onChange={handleInputChange}
        className={s.input}
      />
      <InputLabel htmlFor={nameInputId} className={s.label}>
        Your name
      </InputLabel>
      <OutlinedInput
        id={nameInputId}
        type="text"
        name="name"
        placeholder="Mega Chad"
        required
        value={name}
        onChange={handleInputChange}
        className={s.input}
      />
      <InputLabel htmlFor={passwordInputId} className={s.label}>
        Password
      </InputLabel>

      <div className={s.passwordBox}>
        <OutlinedInput
          id={passwordInputId}
          type="password"
          name="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={handleInputChange}
          className={s.input}
        />
        <IconButton aria-label="password" className={s.passwordBtn}>
          <svg width="16" height="16">
            <use href={`${svg}#icon-eye`}></use>
          </svg>
        </IconButton>
      </div>
      <Btn text="Create account" />
    </form>
  );
};

export default SignUpForm;
