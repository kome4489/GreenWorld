import { combineReducers } from 'redux';
import app from './app';
import query from './query';
import chat from './chat';

const rootReducer = combineReducers({
  app, query, chat,
});

export default rootReducer;
