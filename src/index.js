import Header from 'components/Header';
import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
  </React.StrictMode>
);