import React from 'react';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from '../../services/hooks/reduxHooks';
import { NavigationButton, SidebarPagination } from '../';
import svg from '../../images/sprite.svg';
import s from './StepsSidebar.module.css';

const StepsSidebar: React.FunctionComponent = () => {
  const { shop_token } = useAppSelector(state => state.auth);
  const location = useLocation();

  const welcomeStep = location.pathname === '/';
  // const connectShopifyStep = location.pathname === '/connect-shopify';
  const shopifyConnectedStep =
    location.pathname === '/connect-shopify' && Boolean(shop_token);
  const connectGoogleStep = location.pathname === '/connect-gmail';

  const getTextStyle = (): string => {
    switch (location.pathname) {
      case '/':
        return `${s.textNext}`;

      case '/connect-shopify':
        return `${s.textActive}`;

      case '/connect-gmail':
        return `${s.textDone}`;

      default:
        return `${s.textNext}`;
    }
  };

  const getStepsIcon = (): string => {
    switch (location.pathname) {
      case '/':
        return `${svg}#icon-group-1`;

      case '/connect-shopify':
        if (shop_token) {
          return `${svg}#icon-group-3`;
        } else {
          return `${svg}#icon-group-2`;
        }

      case '/connect-gmail':
        return `${svg}#icon-group-4`;

      default:
        return `${svg}#icon-group-1`;
    }
  };

  return (
    <aside className={s.sidebar}>
      <div className={s.steps}>
        <svg width="33" height="272" className={s.steps__icon}>
          <use href={getStepsIcon()}></use>
        </svg>
        <ul className={s.steps__list}>
          <li className={welcomeStep ? s.textActive : s.textDone}>Welcome</li>
          <li className={getTextStyle()}>Connect your Shopify store</li>
          <li className={connectGoogleStep ? s.textActive : s.textNext}>
            Connect your customer support email
          </li>
          <li className={s.textNext}>Done</li>
        </ul>
      </div>
      {!welcomeStep && (
        <div className={s.btnBox}>
          <NavigationButton text="Back" />
          <NavigationButton text="Next" disabled={!shopifyConnectedStep} />
        </div>
      )}

      <div className={s.bottomBox}>
        <h2 className={s.bottomBox__logo}>5X</h2>
        <p className={s.bottomBox__text}>
          Acquiring a new customer is 5x more costly than making an unhappy
          customer happy
        </p>
      </div>
      <SidebarPagination />
    </aside>
  );
};

export default StepsSidebar;
