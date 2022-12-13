import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PrivateRoute, PublicRoute, SharedPublicLayout } from './';
import { LoaderPage } from '../pages';

const ConnectGmailPage = lazy(
  () => import('../pages/ConnectGmailPage/ConnectGmailPage')
);
const ConnectShopifyPage = lazy(
  () => import('../pages/ConnectShopifyPage/ConnectShopifyPage')
);
const Home = lazy(() => import('../pages/Home/Home'));
const LogInPage = lazy(() => import('../pages/LogInPage/LogInPage'));
const NoMobileAccess = lazy(
  () => import('../pages/NoMobileAccess/NoMobileAccess')
);
const NoGmail = lazy(() => import('../pages/NoGmail/NoGmail'));
const NoShopify = lazy(() => import('../pages/NoShopify/NoShopify'));
const Response = lazy(() => import('../pages/Response/Response'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Suspense fallback={<LoaderPage />}>
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
      </Suspense>
      <ToastContainer
        autoClose={2000}
        hideProgressBar
        position="top-right"
        theme="colored"
        transition={Zoom}
      />
    </div>
  );
};

export default App;
