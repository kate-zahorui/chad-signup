import React from 'react';
import { Button } from '../';

// import s from './Modal.module.css';

const Modal: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <button type="button">close</button>
        <section>
          <h2>You’re ready to go! 🚀</h2>
          <p>
            A fully loaded self-service portal is now ready to deploy on your
            Shopify store.
          </p>
          <p>
            We’ve programmed it to follow industry best practices for shipping,
            return & exchange, and payment policy.
          </p>
          <p>
            You can customize these settings to fit your store policy anytime.
          </p>
          <p>
            Lastly, <b>nothing is live until you hit “Go Live”!</b>
          </p>
          <Button text="Start customizing" type="button" />
        </section>
      </div>
    </div>
  );
};

export default Modal;
