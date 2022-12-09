import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import { Button } from '../';
// import s from './LogInForm.module.css';

const LogInForm: React.FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <Button text="Login" />
    </form>
  );
};

export default LogInForm;
