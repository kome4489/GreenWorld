import { createAction } from 'redux-actions';
import * as Types from '../constants/ActionTypes';

export const saveChange = createAction(Types.SAVE_CHANGE, (input1, input2) => ({
  types: [Types.SAVE_CHANGE],
  input1,
  input2,
}));

export const onChange = createAction(Types.ON_CHANGE, body => ({
  types: [Types.ON_CHANGE],
  body,
}));

export const onSwitch = createAction(Types.SWITCH, value => ({
  types: [Types.SWITCH],
  value,
}));
