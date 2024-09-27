// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Adjust the path as necessary
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter> {/* Wrap your app in BrowserRouter */}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

