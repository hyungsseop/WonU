import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./Header";
import reportWebVitals from './reportWebVitals';
import store from './storage';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
      <Provider store={store}>
          <Header/>
          <App />
      </Provider>
  </CookiesProvider>,
);

reportWebVitals();