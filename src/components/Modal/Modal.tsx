import React from 'react';
import { Backdrop, IconButton } from '@mui/material';

import {
  useAppDispatch,
  useAppSelector,
} from '../../services/hooks/reduxHooks';
import { setIsModalShown } from '../../redux/auth/authSlice';
import { Btn, ContentPaper } from '../';

import svg from '../../images/sprite.svg';
import s from './Modal.module.css';

const Modal: React.FunctionComponent = () => {
  const { isModalShown } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setIsModalShown(false));
  };

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={isModalShown}
    >
      <ContentPaper>
        <div className={s.btnContainer}>
          <IconButton aria-label="close-close" onClick={handleClose}>
            <svg width="24" height="24">
              <use href={`${svg}#icon-close`}></use>
            </svg>
          </IconButton>
        </div>
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
          <Btn text="Start customizing" type="button" onClick={handleClose} />
        </section>
      </ContentPaper>
    </Backdrop>
  );
};

export default Modal;
