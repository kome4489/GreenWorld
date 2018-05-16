import { createAction } from 'redux-actions';
import * as Types from '../constants/ActionTypes';

export const goodSearch = createAction(Types.QUERY_API, (body, url, screenType) => ({
  types: [Types.QUERY_REQUEST, Types.QUERY_SUCCESS, Types.QUERY_FAILURE],
  url,
  body,
  screenType,
}));

export const goodCreate = createAction(Types.QUERY_API, (body, url, screenType) => ({
  types: [Types.QUERY_REQUEST, Types.QUERY_SUCCESS, Types.QUERY_FAILURE],
  url,
  body,
  screenType,
}));

export const goodUpdate = createAction(Types.QUERY_API, (body, url, screenType) => ({
  types: [Types.QUERY_REQUEST, Types.QUERY_SUCCESS, Types.QUERY_FAILURE],
  url,
  body,
  screenType,
}));

export const onChange = createAction(Types.ON_CHANGE, (value, type) => ({
  types: [Types.ON_CHANGE],
  value,
  type,
}));
