import Header from 'components/Header';
import MonthSelector from 'components/MonthSelector';
import AccountBook from 'pages/accountBook/AccountBook';
import Chart from 'pages/accountBook/Chart';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <AccountBook />
  </React.StrictMode>
);