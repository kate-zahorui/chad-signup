import React from 'react';

import { Logo } from '../../components';
// import s from './ConnectGmailPage.module.css';

const ConnectGmailPage: React.FunctionComponent = () => {
  return (
    <main>
      <Logo />
      <section>
        <h2>Connect your customer support email</h2>
        <p>
          Allows Chad to send automated responses on your behalf from your usual
          support mailbox
        </p>
        <ul>
          <li>
            <h3>Contextual responses</h3>
            <p>
              Custom responses to any support situation from “where’s my stuff?”
              to “I want a refund”
            </p>
          </li>
          <li>
            <h3>Reply from anywhere</h3>
            <p>
              Respond to your customers via email or Chad chat—it’s all saved in
              the same thread
            </p>
          </li>
          <li>
            <h3>Categorical inbox tags</h3>
            <p>
              Tags your emails by category so you know what to expect before
              even opening an email
            </p>
          </li>
        </ul>
        <button type="button">Connect Gmail account</button>
        {/* <a href="">I don’t use Gmail</a> */}
      </section>
    </main>
  );
};

export default ConnectGmailPage;
