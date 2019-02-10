import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './store';
import * as serviceWorker from './serviceWorker';

import App from './App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();

if (module.hot) {
  module.hot.accept(); // HMR for JS
  // HMR For CSS modules
  document.querySelectorAll('link[href][rel=stylesheet]').forEach((link) => {
    const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);
    link.href = nextStyleHref; // eslint-disable-line no-param-reassign
  });
}
