import { createStore } from 'redux';

const configureStore = () => {
  const reducer = (state = {}) => state;
  return createStore(
    reducer,
    process.env.NODE_ENV !== 'production'
      /* eslint-disable no-underscore-dangle */
      && window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
  );
};

export default configureStore;
