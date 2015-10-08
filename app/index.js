import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app';
import store from './stores/posts'

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('app')
);
