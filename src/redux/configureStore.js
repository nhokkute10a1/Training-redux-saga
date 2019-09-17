import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../reducers/combineReducer';
import rootSagas from '../sagas/rootSaga';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

// use redux-saga
const sagaMiddleware = createSagaMiddleware();

// use redux-thunk
const configureStore = () => {
  const middleware = [thunk, sagaMiddleware];
  const enhancers = [applyMiddleware(...middleware)];
  const store = createStore(rootReducers, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSagas);
  return store;
};

export default configureStore;
