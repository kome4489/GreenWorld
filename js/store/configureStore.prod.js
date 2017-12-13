import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import init from '../middleware/init';

export default function configureStore(history, initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(init, createLogger()),
  );
}
