import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { store } from './redux/store';
import App from './components/App';

import '/node_modules/modern-normalize/modern-normalize.css';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4f637d',
    },
    secondary: {
      main: '#134267',
    },
    accent: {
      main: '#32abf2',
    },
    input: {
      main: '#030e16',
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
