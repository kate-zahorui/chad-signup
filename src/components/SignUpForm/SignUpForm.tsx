import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import { Button } from '../';
// import s from './SignUpForm.module.css';

const SignUpForm: React.FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const emailInputId = nanoid();
  const nameInputId = nanoid();
  const passwordInputId = nanoid();

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

  return (
    <form action="">
      <label htmlFor={emailInputId}>Email</label>
      <input
        id={emailInputId}
        type="email"
        name="email"
        placeholder="megachad@trychad.com"
        required
        value={email}
        onChange={handleInputChange}
      />
      <label htmlFor={nameInputId}>Your name</label>
      <input
        id={nameInputId}
        type="text"
        name="name"
        placeholder="Mega Chad"
        required
        value={name}
        onChange={handleInputChange}
      />
      <label htmlFor={passwordInputId}>Password</label>
      <input
        id={passwordInputId}
        type="text"
        name="password"
        placeholder="Enter password"
        required
        value={password}
        onChange={handleInputChange}
      />
      <Button text="Create account" />
    </form>
  );
};

export default SignUpForm;
