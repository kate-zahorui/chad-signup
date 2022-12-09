import React, { useState, useEffect } from 'react';

import {
  useAppSelector,
  useAppDispatch,
} from '../../services/hooks/reduxHooks';
import { connectShopify } from '../../redux/auth/authOperations';
import { Button, Logo, StoreConnected } from '../../components';
// import s from './ConnectShopifyPage.module.css';

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
    <main>
      {isConnected ? (
        <StoreConnected />
      ) : (
        <>
          <Logo />
          <section>
            <h2>Connect your Shopify store</h2>
            <p>
              Installs the Chad widget in your Shopify store and sets it up to
              display your customers’ order information and self-serve options.
            </p>
            <ul>
              <li>
                <h3>Track orders and shipping</h3>
                <p>Global coverage with 600+ couriers supported</p>
              </li>
              <li>
                <h3>Manage orders</h3>
                <p>
                  Allow customers to track, return, exchange, or report problems
                  with their orders
                </p>
              </li>
              <li>
                <h3>Process returns and exchanges</h3>
                <p>
                  Automatically checks your store policy and existing inventory
                  before resolving or escalating each request
                </p>
              </li>
            </ul>
            <Button
              text="Connect store"
              type="button"
              onClick={handleBtnClick}
            />
            {/* <a href="">I don’t use Shopify</a> */}
          </section>
        </>
      )}
    </main>
  );
};

export default ConnectShopifyPage;
