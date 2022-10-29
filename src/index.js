import Header from 'components/Header';
import AccountBook from 'pages/accountBook/AccountBook';
import Chart from 'pages/chart/Chart';
import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Chart />
    <AccountBook />
  </React.StrictMode>
);