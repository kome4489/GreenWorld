import { handleActions } from 'redux-actions';
import { DATAS_SUCESS, SAVE_CHANGE, SWITCH } from '../constants/ActionTypes';

const initialState = {
  aaa: null,
};

const app = handleActions({

  [DATAS_SUCESS]: (state, action) => Object.assign({}, state, {
    aaa: '2222',
  }),

  [SAVE_CHANGE]: (state, action) => Object.assign({}, state, {
    nextList: [action.payload.input1, action.payload.input2],
    prevList: state.nextList,
  }),

  [SWITCH]: (state, action) => Object.assign({}, state, {
    switchValue: action.payload.value,
  }),

}, initialState);

export default app;
