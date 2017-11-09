import { createAction } from 'redux-actions' 
import { SWITCH } from '../constans/ActionTypes'

export const switchScreen = createAction(SWITCH, (aaa, bbb) => ({
  aaa,
  bbb,
}));