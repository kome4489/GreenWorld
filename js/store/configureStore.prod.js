import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import init from '../middleware/init';
import query from '../middleware/query';
import chat from '../middleware/chat';

export default function configureStore(history, initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(init, query, chat, createLogger()),
  );
}
