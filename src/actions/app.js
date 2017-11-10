import { createAction } from 'redux-actions' 
import { SWITCH, ONCHANGE } from '../constans/ActionTypes'

export const switchScreen = createAction(SWITCH, (aaa, bbb) => ({
  aaa,
  bbb,
}));

export const onChange = createAction(ONCHANGE, (type, value) => ({
  type,
  value,
}));