import { handleAction } from 'redux-actions'
import { SWITCH } from '../constans/ActionTypes'

const initialState = {
  aaa: 1,
  bbb: 2,
}

const app = handleAction({}, Object.assign({}, {
  [SWITCH]: (state, action) => ({
    aaa: action.payload.aaa,
    bbb: action.payload.bbb,
  })
  }
), initialState);

export default app;