import { handleActions } from 'redux-actions'
import { SWITCH } from '../constans/ActionTypes'

const initialState = {
  aaa: 1,
  bbb: 2,
}

const app = handleActions({
  [SWITCH]: (state, action) => {
    console.log(state);
    console.log(action);
    return Object.assign({}, state, {
      aaa: action.payload.aaa,
      bbb: action.payload.bbb,
  })
  },
}, initialState);

export default app;