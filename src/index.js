import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
