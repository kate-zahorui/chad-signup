import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List } from '@mui/material';

import {
  useAppSelector,
  useAppDispatch,
} from '../../services/hooks/reduxHooks';
import { connectShopify } from '../../redux/auth/authOperations';
import {
  BenefitsItem,
  Btn,
  ContentPaper,
  Logo,
  StoreConnected,
} from '../../components';
import s from './ConnectShopifyPage.module.css';

const ConnectShopifyPage: React.FunctionComponent = () => {
  const { userData, shop_token } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!shop_token) return;
    setIsConnected(true);
  }, [shop_token]);

  const handleBtnClick = () => {
    if (!userData) return;
    dispatch(connectShopify(userData.name));
  };

  return (
    <ContentPaper>
      {isConnected ? (
        <StoreConnected />
      ) : (
        <>
          <Logo />
          <section>
            <h2 className={s.title}>Connect your Shopify store</h2>
            <p className={s.text}>
              Installs the Chad widget in your Shopify store and sets it up to
              display your customers’ order information and self-serve options.
            </p>
            <List className={s.list}>
              <BenefitsItem>
                <h3 className={s.item__title}>Track orders and shipping</h3>
                <p className={s.item__text}>
                  Global coverage with 600+ couriers supported
                </p>
              </BenefitsItem>
              <BenefitsItem>
                <h3 className={s.item__title}>Manage orders</h3>
                <p className={s.item__text}>
                  Allow customers to track, return, exchange, or report problems
                  with their orders
                </p>
              </BenefitsItem>
              <BenefitsItem>
                <h3 className={s.item__title}>Process returns and exchanges</h3>
                <p className={s.item__text}>
                  Automatically checks your store policy and existing inventory
                  before resolving or escalating each request
                </p>
              </BenefitsItem>
            </List>

            <Btn text="Connect store" type="button" onClick={handleBtnClick} />
            <div className={s.link}>
              <Link to="/no-shopify">I don’t use Shopify</Link>
            </div>
          </section>
        </>
      )}
    </ContentPaper>
  );
};

export default ConnectShopifyPage;
