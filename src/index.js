import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
