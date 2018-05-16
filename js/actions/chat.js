import { createAction } from 'redux-actions';
import * as Types from '../constants/ActionTypes';

export const chatStart = createAction(Types.CHAT_API, (body, url, screenType) => ({
  types: [Types.CHAT_REQUEST, Types.CHAT_SUCCESS, Types.CHAT_FAILURE],
  url,
  body,
  screenType,
}));

export const chatClear = createAction(Types.CHAT_API, (body, url, screenType) => ({
  types: [Types.CHAT_REQUEST, Types.CHAT_SUCCESS, Types.CHAT_FAILURE],
  url,
  body,
  screenType,
}));
