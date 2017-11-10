import { handleActions } from 'redux-actions'
import { SWITCH, ONCHANGE } from '../constans/ActionTypes'

const initialState = {
  aaa: 1,
  bbb: 2,
  login: {
    id: null,
    pass: null,
  }
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
  [ONCHANGE]: (state, action) => {
    console.log(action)
    switch(action.payload.type) {
      case 'id':
        Object.assign({}, state.login, {
          id: action.payload.value,
        })
        break;
      case 'pass':
      Object.assign({}, state.login, {
        pass: action.payload.value,
      })
        break;
      default:
        break;
    }
    return state;
  },
}, initialState);

export default app;