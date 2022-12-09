import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { PrivateRoute, PublicRoute, SharedPublicLayout } from './';
import {
  ConnectGmailPage,
  ConnectShopifyPage,
  Home,
  LogInPage,
  NoMobileAccess,
  NoGmail,
  NoShopify,
  Response,
  SignUpPage,
} from '../pages';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<SharedPublicLayout />}>
            <Route index element={<SignUpPage />} />
            <Route path="/connect-shopify" element={<ConnectShopifyPage />} />
            <Route path="/connect-gmail" element={<ConnectGmailPage />} />
            <Route path="/no-shopify" element={<NoShopify />} />
            <Route path="/no-gmail" element={<NoGmail />} />
            <Route path="/response" element={<Response />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/no-access" element={<NoMobileAccess />} />
          </Route>
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/no-user-access" element={<NoMobileAccess />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
